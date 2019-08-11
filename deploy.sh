#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting
npm run lint

echo Building...
npm run build

# deploy
# 1. create new git repo in dist/
cd dist
git init
git add -A
git commit -m 'automatic deploy'

# 2. push new git repo to github
git push -f git@github.com:awesome-global-contributions/awesome-global-contributions.github.io.git master:master

echo Done. Note that it might take a bit until Github updates the website

cd -
