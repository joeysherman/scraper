/**
 * Created by Joey on 3/10/2017.
 */


const cheerio = require('cheerio'),
      request = require('request-promise'),
      fs      = require('fs'),
      chalk   = require('chalk'),
      moment  = require('moment'),
      logger  = console.Console;


var   date = moment().format('MMMDoYYYY'),
      time = moment().format('LT'),
      filename = date + '.csv',
      stream = {};

logger.init = function() {
  logger.newline();
  console.log('Scraper ' + chalk.green('started') + ' - ' + chalk.blue(time));
  logger.newline();
};

logger.newline = function() {
  console.log('---------------------------------\n');
};

logger.log = function(data) {
  console.log(data + '/n');
};

logger.init();

/**
 *
 * @param url
 */

if (fs.existsSync(filename)) {
  filename = date + '-' + Date.now() + '.csv';
}

stream = fs.createWriteStream(filename);


stream.on('flush', function() {
  logger.log('flushing');
});

stream.on('flush', function() {
  logger.log('flushing');
});

stream.on('flush', function() {
  logger.log('flushing');
});

stream.on('flush', function() {
  logger.log('flushing');
});


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
