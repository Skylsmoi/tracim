#!/bin/bash

# shellcheck disable=SC1091
. ../bash_library.sh # source bash_library.sh

windoz=""
if [[ $1 = "-w" ]]; then
    windoz="windoz"
fi

log "build frontend_app_file"
npm run build$windoz
log "copying built file to frontend/"
cp dist/file.app.js ../frontend/dist/app
log "copying en translation.json"
cp i18next.scanner/en/translation.json ../frontend/dist/app/file_en_translation.json
log "copying fr translation.json"
cp i18next.scanner/fr/translation.json ../frontend/dist/app/file_fr_translation.json
