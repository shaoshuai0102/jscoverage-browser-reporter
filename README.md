# jscoverage-browser-reporter [![spm version](http://spmjs.io/badge/jscoverage-browser-reporter)](http://spmjs.io/package/jscoverage-browser-reporter)

---

jscoverage reporter in browser

## Install

```
$ spm install jscoverage-browser-reporter --save
```

## Usage

```js
var reporter = require('jscoverage');
var $ = require('jquery');
var str = reporter();
$(str).appendTo(body);
// use jscoverageBrowserReporter
```
