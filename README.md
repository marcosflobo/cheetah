[![Build Status](https://travis-ci.org/marcosflobo/cheetah.svg?branch=master)](https://travis-ci.org/marcosflobo/cheetah) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/39527aeaf99e408bb4b8f9d388df7cb2)](https://www.codacy.com/app/marcosflobo/cheetah?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcosflobo/cheetah&amp;utm_campaign=Badge_Grade)
# cheetah
Web application to visualize and manage graphical representation of work using agile methodologies for agile teams

# cheetah-api
Is the official API backend for this project. See for info in [cheetah-api in github](https://github.com/marcosflobo/cheetah-api).

# WIKI
In our [wiki](https://github.com/marcosflobo/cheetah/wiki) we are adding all the documentation related to project development.

# Agile board
Please checkout or [Kanban board](https://github.com/marcosflobo/cheetah/projects/1) to follow up the ongoing tasks.

# Test
## Dependencies
To perform unit tests, we need to install some packages using [npm](https://www.npmjs.com/)
```bash
npm install -g karma jasmine karma-chrome-launcher karma-firefox-launcher karma-jasmine karma-junit-reporter jasmine-core karma-coverage grunt-cli
```
## Run unit tests + code coverage
```bash
karma start karma.conf.js
```