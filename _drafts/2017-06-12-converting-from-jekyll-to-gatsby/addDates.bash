#!/bin/bash

for dir in pages/*/
do
  echo "$dir"
  date=$(cut -c 7-16 <<< "$dir")
  string="date: $date"
  echo "$date"
  sed -i.bak "3i\\
$string
" $dir/index.md
done
