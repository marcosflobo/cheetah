[![Build Status](https://travis-ci.org/marcosflobo/cheetah.svg?branch=master)](https://travis-ci.org/marcosflobo/cheetah) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/39527aeaf99e408bb4b8f9d388df7cb2)](https://www.codacy.com/app/marcosflobo/cheetah?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcosflobo/cheetah&amp;utm_campaign=Badge_Grade)
# cheetah
Web application to visualize and manage graphical representation of work using agile methodologies for agile teams

# cheetah-api
Is the official API backend for this project. See for info in [cheetah-api in github](https://github.com/marcosflobo/cheetah-api).

# WIKI
In our [wiki](https://github.com/marcosflobo/cheetah/wiki) we are adding all the documentation related to project development.

# Agile board
Please checkout or [Kanban board](https://github.com/marcosflobo/cheetah/projects/1) to follow up the ongoing tasks.

# Frameworks used
- AngularJS
- Karma
- Protractor

# Test
## Dependencies
To perform unit tests and e2e tests, we need to install some packages using [npm](https://www.npmjs.com/)
```bash
npm install -g karma jasmine karma-chrome-launcher karma-firefox-launcher karma-jasmine karma-junit-reporter jasmine-core karma-coverage grunt-cli protractor
```

## Run unit tests + code coverage
```bash
karma start karma.conf.js
```
## Run e2e tests
For e2e testing we are using [Protractor](https://www.protractortest.org).

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```bash
sudo webdriver-manager update
```
Now start up a server with:
```bash
webdriver-manager start
```
Al the e2e tests and configuration are located in /e2e-tests. To run the e2e tests you have to have the webdriver 
started (as shown before) and, then, run:
```bash
cd e2e-tests/
protractor protractor.conf.js
```