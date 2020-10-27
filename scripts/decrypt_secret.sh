#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$SA_KEY" \
--output $HOME/secrets/GCE_SA.json ./scripts/GCE_SA.json.gpg