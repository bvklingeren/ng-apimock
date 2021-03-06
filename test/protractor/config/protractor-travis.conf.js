var config = require('./protractor-shared.conf').config;

config.sauceUser = process.env.SAUCE_USERNAME;
config.sauceKey = process.env.SAUCE_ACCESS_KEY;

config.params = {
    environment: 'TRAVIS',
    default_directory: '/tmp/'
};

config.multiCapabilities = [{
    'browserName': 'chrome',
    'name': 'ngApimock - protractor',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'shardTestFiles': true,
    'maxInstances': 10,
    chromeOptions: {
        // Get rid of --ignore-certificate yellow warning
        args: ['--no-sandbox', '--test-type=browser'],
        // Set download path and avoid prompting for download even though
        // this is already the default on Chrome but for completeness
        prefs: {
            'download': {
                'prompt_for_download': false,
                'default_directory': config.params.default_directory
            }
        }
    }
}];


exports.config = config;