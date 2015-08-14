#!/bin/bash

cp ../../../data/transdict-mover.json .
cp ../../../data/transdict-voter.json .
cp ../../../data/mv-relation.json .

wget 'https://spreadsheets.google.com/feeds/list/1s2CkDX0sMaZHzHjl_hbJs8DkyUAca08enU1te3aEPUU/od6/public/values?alt=json' -O navigation-data.json

