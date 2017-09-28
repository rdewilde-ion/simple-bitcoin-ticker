var restpal = require('restpal');
var should = require('should');

describe('API Health Test', function () {

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  var pattern = {
    status: 200,
    schema: {
      required: ['ticker'],
      properties: {
        ticker: {
          type: 'object',
          properties: {
            last: {
              format: 'numeric'
            }
          }
        }
      }
    }
  };

  describe('Bittrex API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('http://www.ionexplorer.com/api/bittrex/ticker/ion')
        .status(200)
        // .pattern(pattern)
        .schema({
          required: ['data'],
          properties: {
            data: {
              type: 'object',
              properties: {
                Last: {
                  format: 'numeric'
                }
              }
            }
          }
        })
      .run(done);
    });
  });

});