import os
from os import path

DIR_DATA_ROOT = path.abspath(path.join('..', 'data'))
DIR_VOTING_RECORDS_RAW = path.join(DIR_DATA_ROOT, 'voting-records-raw')

os.makedirs(DIR_DATA_ROOT, exist_ok=True)
os.makedirs(DIR_VOTING_RECORDS_RAW, exist_ok=True)
