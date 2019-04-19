#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender();

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(require('prerender-memory-cache'))

server.start();
