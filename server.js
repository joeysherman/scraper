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


stream.on('error', function() {
  logger.log('error');
});

stream.on('close', function() {
  logger.log('closing');
});

stream.on('flush', function() {
  logger.log('flushing');
});

stream.on('finish', function() {
  logger.log('finish');
});

stream.addRow = function(data) {
  stream.write(data)
}

function scrape(url){
  request(url)
    .then(function(body) {
      return cheerio.load(body);
    })
    .then(function($) {
      $('tr > td > a').each(function(i, elem) {



      });
    })
    .catch(function(err) {
      console.error(err);
    });
};

scrape('https://en.wikipedia.org/wiki/List_of_colleges_and_universities_in_California');
