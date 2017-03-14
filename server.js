/**
 * Created by Joey on 3/10/2017.
 */


const cheerio = require('cheerio'),
      request = require('request-promise'),
      logger  = console.Console;

logger.newline = function() {
  console.log('---------------------------------');
};

logger.log = function(data) {
  console.log(data);
}

logger.newline();

/**
 *
 * @param url
 */
function scrape(url){
  request(url)
    .then(function(body) {
      return cheerio.load(body);
    })
    .then(function($) {
      $('ul > li > a').each(function(i, elem) {

        console.log('#' + i + ' - ' + $(this).text());
      });
    })
    .catch(function(err) {
      console.error(err);
    });
};

scrape('https://en.wikipedia.org/wiki/Lists_of_American_institutions_of_higher_education');
