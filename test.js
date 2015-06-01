var Logger = require('./lib');
var log = new Logger();


log.debug('small bits of information usable for test environment debugging');
log.info('this is documenting the regular flow of the application');
log.warn('warning you that something is out of the ordinary');
log.error('a proper error');
