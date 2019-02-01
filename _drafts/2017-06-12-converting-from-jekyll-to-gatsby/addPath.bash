#!/bin/bash

for dir in pages/*/
do
  echo "$dir"
  path=$(tail -c +18 <<< "$dir")
  string="path: \"/$path\""
  echo "$date"
  sed -i.bak "3i\\
$string
" $dir/index.md
done
