var LogLevel = function(name, priority) {
    this.name = name;
    this.priority = priority;
};

LogLevel.prototype.isValid = function(levelToMatch) {
    return this.priority >= levelToMatch.priority;
};

module.exports = {
    DEBUG: new LogLevel('DEBUG', 1),
    INFO: new LogLevel('INFO', 10),
    WARN: new LogLevel('WARN', 100),
    ERROR: new LogLevel('ERROR', 1000),
    fromString(str) {
        if(!str) {
            return;
        }

        str = str.toUpperCase();
        if(this.hasOwnProperty(str)) {
            return this[str];
        }
    }
};
