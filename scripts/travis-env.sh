#!/usr/bin/env bash

# by default, build app for the OS travis is running
app_os_target=$TRAVIS_OS_NAME
# DEBUG(mc, 2018-10-25): remove "app-shell_travis-testing-mc"
osx_branches="master edge app-shell_travis-testing-mc"
branch_re=\\b$TRAVIS_BRANCH\\b

# if os is linux and osx won't run, build both linux and osx
# note: \b regex only works on Linux (not BSD-like macOS)
if [[ $TRAVIS_OS_NAME = linux && ! $osx_branches =~ $branch_re ]]; then
  app_os_target="posix"
fi

export APP_OS_TARGET=$app_os_target
