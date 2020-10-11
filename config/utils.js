import path from 'path';

import glob from 'glob';
import minimist from 'minimist';
import gulp from 'gulp';
import browserSyncLib from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import notify from 'gulp-notify';
import c from 'ansi-colors';
import beeper from 'beeper';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();

// Gather arguments passed to node commands
const args = minimist(process.argv.slice(2));

// Develop environment
const isDev = args.development;

// Create a new browserSync instance
const browserSync = browserSyncLib.create();

// Karma test
const KarmaServer = require('karma').Server;

// Error handle
const reportError = function (error) {
	// [log]
	//console.log(error);

	// Format and ouput the whole error object
	//console.log(error.toString());

	// ----------------------------------------------
	// Pretty error reporting

	var report = '\n';
	var chalk = c.white.bgRed;

	if (error.plugin) {
		report += chalk('PLUGIN:') + ' [' + error.plugin + ']\n';
	}

	if (error.message) {
		report += chalk('ERROR: ') + ' ' + error.message + '\n';
	}

	console.error(report);

	// ----------------------------------------------
	// Notification

	if (error.line && error.column) {
		var notifyMessage = 'LINE ' + error.line + ':' + error.column + ' -- ';
	} else {
		var notifyMessage = '';
	}

	notify({
		title: 'FAIL: ' + error.plugin,
		message: `${notifyMessage}${error.message}`,
		sound: 'Frog', // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
	}).write(error);

	beeper('****-*-*'); // System beep (backup)

	// ----------------------------------------------
	// Prevent the 'watch' task from stopping

	this.emit('end');
};

// Gulp environment
const { task, watch, src, dest, series, parallel } = gulp;

export {
	args,
	isDev,
	browserSync,
	plugins,
	path,
	glob,
	KarmaServer,
	reportError,
	gulp,
	task,
	watch,
	src,
	dest,
	series,
	parallel,
};
