#!/usr/bin/env bash

# install node.js
nvm install

# install osx dependencies
if [ "$TRAVIS_OS_NAME" = "osx" ]; then
  brew update
  brew upgrade pyenv
  brew install yarn --without-node
  pyenv install --skip-existing
  eval "$(pyenv init -)"
fi

# report versions for sanity
make --version
python --version
pip --version
node --version
yarn --version
