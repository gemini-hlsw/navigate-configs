#!/bin/sh
CONTAINER_ALREADY_STARTED="/usr/src/app/dbinit/CONTAINER_ALREADY_STARTED"
if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED
    echo "-- First container startup --"
    pnpm populate
    pnpm preview
else
    echo "-- Not first container startup --"
    pnpm preview
fi
