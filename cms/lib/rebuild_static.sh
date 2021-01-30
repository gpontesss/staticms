#!/bin/sh

SCRIPTDIR=$(dirname $(readlink -f "$0"))
yarn --cwd "$SCRIPTDIR/../../static" build
