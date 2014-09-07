var template = require('./lib/template.js');
var $ = require('jquery');

var jscoverageBrowserReporter = function(container) {
  var cov = window._$jscoverage || {};

  cov = map(cov);
//  jade.render($(container), 'coverage', {
//    cov: cov,
//    coverageClass: coverageClass
//  });
  var domStr = template({
    cov: cov,
    coverageClass: coverageClass
  });
  $(domStr).appendTo(container);

  /**
   * Map jscoverage data to a JSON structure
   * suitable for reporting.
   *
   * @param {Object} cov
   * @return {Object}
   * @api private
   */

  function map(cov) {
    var ret = {
      instrumentation: 'jscoverage'
      , sloc: 0
      , hits: 0
      , misses: 0
      , coverage: 0
      , files: []
    };

    for (var filename in cov) {
      var data = coverage(filename, cov[filename]);
      ret.files.push(data);
      ret.hits += data.hits;
      ret.misses += data.misses;
      ret.sloc += data.sloc;
    }

    ret.files.sort(function(a, b) {
      return a.filename.localeCompare(b.filename);
    });

    if (ret.sloc > 0) {
      ret.coverage = (ret.hits / ret.sloc) * 100;
    }

    return ret;
  };

  /**
   * Map jscoverage data for a single source file
   * to a JSON structure suitable for reporting.
   *
   * @param {String} filename name of the source file
   * @param {Object} data jscoverage coverage data
   * @return {Object}
   * @api private
   */

  function coverage(filename, data) {
    var ret = {
      filename: filename,
      coverage: 0,
      hits: 0,
      misses: 0,
      sloc: 0,
      source: {}
    };

    data.source.forEach(function(line, num){
      num++;

      if (data[num] === 0) {
        ret.misses++;
        ret.sloc++;
      } else if (data[num] !== undefined) {
        ret.hits++;
        ret.sloc++;
      }

      ret.source[num] = {
        source: line
        , coverage: data[num] === undefined
            ? ''
            : data[num]
      };
    });

    ret.coverage = ret.hits / ret.sloc * 100;

    return ret;
  }

  function coverageClass(n) {
    if (n >= 75) return 'high';
    if (n >= 50) return 'medium';
    if (n >= 25) return 'low';
    return 'terrible';
  }

};

module.exports = jscoverageBrowserReporter;