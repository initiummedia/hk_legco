import sys
from lxml import etree
import requests
from pyquery import PyQuery as pq
import pandas as pd
import os
from os import path
import sys

# from scripts import config
import config


SEED_PAGES = [
    'http://www.legco.gov.hk/general/english/counmtg/yr12-16/mtg_1213.htm',
    'http://www.legco.gov.hk/general/english/counmtg/yr12-16/mtg_1314.htm',
    'http://www.legco.gov.hk/general/english/counmtg/yr12-16/mtg_1415.htm'
]
# Information fields, useful for reviewing the result
INFO_FIELDS = ['vote-date', 'vote-time', 'motion-en', 'motion-ch', 'mover-en', 'mover-ch', 'mover-type', 'vote-separate-mechanism']


def crawl_seed(seed):
    d = pq(seed)
    return d('a').map(lambda i, a: a.attrib.get('name', None)).filter(lambda i, s: s.startswith('cm20'))


def crawl_xml(meeting):
    # This logic is translated from the official JS code
    yy, mm, dd = map(lambda i: int(meeting[i:(i + 2)]), [4, 6, 8])
    if mm >= 10:
        yr = 'yr%02d-%02d' % (yy, yy + 1)
    else:
        yr = 'yr%02d-%02d' % (yy - 1, yy)
    prefix = 'http://www.legco.gov.hk'
    url = '%(prefix)s/%(yr)s/chinese/counmtg/voting/cm_vote_20%(yy)02d%(mm)02d%(dd)02d.xml' % locals()
    return requests.get(url)


def xml_to_records(xml):
    doc = etree.XML(xml)
    records = []
    for topic in doc.xpath('//legcohk-vote/meeting/vote'):
        info = [topic.xpath(f)[0].text for f in INFO_FIELDS]
        date = info[0]
        topic_id = '%s-%s' % (date, topic.attrib['number'])
        for member in topic.xpath('individual-votes/member'):
            member_id = member.attrib['name-en'] # Use English name as ID for simplicity
            member_id_en = member.attrib['name-en']
            member_id_ch = member.attrib['name-ch']
            vote = member.xpath('vote')[0].text
            records.append((topic_id, member_id, vote, member_id_en, member_id_ch) + tuple(info))
    return records


def name_normalize(name):
    mapping = {
        'Dr Joseph LEE': 'Prof Joseph LEE',
        '郭偉強': '郭偉强',
    }
    return mapping.get(name, name)


# More:
# http://nbviewer.ipython.org/urls/course.ie.cuhk.edu.hk/~engg4030/tutorial/tutorial7/Legco-Preprocessing.ipynb
def clean_record(t):
    # According to the numbers, they seem to be the same person
    # records.append((topic_id, member_id, vote, member_id_en, member_id_ch) + tuple(info))
    # INFO_FIELDS = ['vote-date', 'vote-time', 'motion-en', 'motion-ch', 'mover-en', 'mover-ch', 'mover-type', 'vote-separate-mechanism']
    t = list(t)
    # Voters name
    t[1] = name_normalize(t[1])
    t[2] = name_normalize(t[2])
    t[3] = name_normalize(t[3])
    t[4] = name_normalize(t[4])
    # Movers name
    t[9] = name_normalize(t[9])
    t[10] = name_normalize(t[10])

    # Other normalization if any
    # ...
    return tuple(t)


def main():
    meetings = []
    for seed_page in SEED_PAGES:
        meetings.extend(crawl_seed(seed_page))

    with open(path.join(config.DIR_DATA_ROOT, 'meetings.txt'), 'w') as fp:
        for m in meetings:
            fp.write('%s\n' % m)

    print('Parsed %d meetings from the root page' % len(meetings))

    vote_xmls = []
    for m in meetings:
        r = crawl_xml(m)
        print('Crawling %s' % m)
        # print('progress: %s/%s %s' % (len(vote_xmls), len(meetings), '#' * len(vote_xmls)))
        sys.stdout.flush()
        with open(path.join(config.DIR_VOTING_RECORDS_RAW, '%s.xml' % m), 'w') as fp:
            if r.ok:
                fp.write(r.content.decode('utf-8'))
                vote_xmls.append(r.content)

    # vote_xmls = filter(lambda r: r.ok, vote_xmls)
    # vote_xmls = [r.content for r in vote_xmls]
    print('Collected %d voting record XMLs in total' % len(vote_xmls))

    records = []
    for vote_xml in vote_xmls:
        records.extend(xml_to_records(vote_xml))

    records = [clean_record(r) for r in records]
    df = pd.DataFrame(records, columns = ['topic_id', 'member_id', 'vote', 'name-en', 'name-ch'] + INFO_FIELDS)
    df.to_csv(path.join(config.DIR_DATA_ROOT, 'records-all-with-info.csv'), encoding='utf-8')
    df.head()

    df = df[['topic_id', 'member_id', 'vote']]
    df.to_csv(path.join(config.DIR_DATA_ROOT, 'records-all.csv'), encoding='utf-8')


if __name__ == '__main__':
    main()
