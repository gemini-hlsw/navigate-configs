#!/bin/sh
CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED"
if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED
    echo "-- First container startup --"
    npm run populate
    node dist/index.js
else
    echo "-- Not first container startup --"
    npm run preview
    node dist/index.js
fi
