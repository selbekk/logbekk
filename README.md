# A logger for Node

[![npm version](https://badge.fury.io/js/logbekk.svg)](http://badge.fury.io/js/logbekk)

Supports log levels and template strings.

## Install

	npm install logbekk --save

## Basic usage

	var Logger = require('logbekk');
	var log = new Logger();
	
	log.info('or .info or .warn or .error');
	var name = 'logbekk';
	log.info('{} supports templating too!', name);

## Settings

You can create your own settings file if you want. Create a JSON-formatted file
and save it as ``log.json``. You can also specify your own name / path by
setting the ``LOG_SETTINGS`` environment variable.

Here are the available settings and the defaults:

### dest
**Default:** ``process.out``<br>
Set to the name of your output file, or leave un-set if you want the logs to be
sent to stdout.

### logLevel
**Default:** ``'INFO'``<br>
Set to ``DEBUG``, ``INFO``, ``WARN`` or ``ERROR``, depending on the amount of
information you want to log.

### timestamp
**Default:** ``'YYYY-MM-DD HH:mm:ss'``<br>
We use [Moment](http://momentjs.com) for the timestamp. Check their
[documentation](http://momentjs.com/docs/#/parsing/string-format/) for setting
up your own custom timestamp format.

## Open open source

Want to change something? Fork it and fix it, or register an issue. If you want
to help out further, I'll give you commit access after your first pull request.
