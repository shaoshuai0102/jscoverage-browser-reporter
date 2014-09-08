# jscoverage-browser-reporter [![spm version](http://spmjs.io/badge/jscoverage-browser-reporter)](http://spmjs.io/package/jscoverage-browser-reporter)

---

jscoverage reporter in browser.

## Install

```
$ spm install jscoverage-browser-reporter --save
```

## Usage

1. Convent your source files with [jscoverage](https://github.com/fishbar/jscoverage) first.

2. Use these files in your test runner html instead of source files.

   ```
   <script src="source-cov.js"></script>
   ```
   
3. Then use this module to get your coverage report.

   ```
   seajs.use(['jquery/1.7.2/jquery', 'jscoverage-browser-reporter/0.1.0/index'], function($, reporter) {
   
     var reportDomStr = reporter();
     $(reportDomStr).appendTo('#coverage-container');
   
   });
   ```

## Example

<img src="https://raw.githubusercontent.com/shaoshuai0102/jscoverage-browser-reporter/master/example.png" />
