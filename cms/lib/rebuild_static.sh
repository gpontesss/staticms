#!/bin/sh

SCRIPTDIR=$(dirname $(readlink -f "$0"))
ROOTDIR=$(cd "$SCRIPTDIR/../.."; pwd)

yarn --cwd "$ROOTDIR/static" build

find $ROOTDIR/build/* \
    -maxdepth 0 \
    ! -wholename $ROOTDIR/build/.gitkeep \
    -exec rm -r {} +

cp -R $ROOTDIR/static/out/* $ROOTDIR/build/
cp -R $ROOTDIR/cms/public/uploads $ROOTDIR/build/uploads
