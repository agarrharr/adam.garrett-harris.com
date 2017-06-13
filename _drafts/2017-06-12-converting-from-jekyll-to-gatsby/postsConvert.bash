#!/bin/bash

for f in pages/*.md
do
  echo "Creating directory for: $f"
  filename="${f%.*}"
  echo "${filename%.*}"
  mkdir "${filename%.*}"
  mv $f $filename/index.md
done
