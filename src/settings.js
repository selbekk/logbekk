var extend = require('extend'),
    fs = require('fs'),
    LogLevel = require('./log-level');

var defaults = {
    dest: process.out,
    level: LogLevel.INFO,
    timestamp: 'YYYY-MM-DD HH:mm:ss'
};

function readSettings() {
    var filename = process.env.LOG_SETTINGS || './log.json'
    try {
        var settingsString = fs.readFileSync('./log.json', { encoding: 'UTF-8' });
        var settings = JSON.parse(settingsString);
        settings = extend({}, defaults, settings);
        settings.level = LogLevel.fromString(settings.level) || LogLevel.INFO;
        return settings;
    }
    catch(err) {
        return defaults;
    }
}

module.exports = readSettings();
