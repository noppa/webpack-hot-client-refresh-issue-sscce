#!/bin/bash

# "v3" or "v4"
LIB_VERSION=$1

if ! [[ $LIB_VERSION == "v3" || $LIB_VERSION == "v4" ]]
then
  echo "No lib version provided. Usage: "
  echo "./run.sh v3|v4 [fixed]"
  exit 1
fi

# conditionally add the -fixed suffix
TEST_DIR=$LIB_VERSION && [[ $2 == "fixed" ]] && TEST_DIR="$LIB_VERSION-fixed"

cp $TEST_DIR/* testbed/
# server.js varies by version, but not by fixed/not fixed
cp $LIB_VERSION/server.js testbed/

cd testbed
npm i
npm start
