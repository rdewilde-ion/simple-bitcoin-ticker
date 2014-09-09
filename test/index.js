var restpal = require('restpal');
var should = require('should');

describe('API Health Test', function () {

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';   

  describe('796 Xchange API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('http://api.796.com/v3/futures/ticker.html?type=weekly')
        .status(200)
        .schema({
          required: ['ticker'],
          properties: {
            ticker: {
              required: ['last'],
              properties: {
                last: {
                  type: 'string'
                }
              }
            }
          }
        })
      .run(done);
    });
  });

  describe('Bitfinex API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://api.bitfinex.com/v1/pubticker/btcusd')
        .status(200)
        .schema({
          required: ['last_price'],
          properties: {
            last_price: {
              type: 'string'
            }
          }
        })
      .run(done);
    });
  });

  describe('Bitstamp API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://www.bitstamp.net/api/ticker/')
        .status(200)
        .schema({
          required: ['last'],
          properties: {
            last: {
              type: 'string'
            }
          }
        })
      .run(done);
    });
  });

  describe('BTC-E API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://btc-e.com/api/2/btc_usd/ticker')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'object',
            required: ['last'],
            properties: {
              last: {
                type: 'number'
              }
            }
          }          
        })
      .run(done);
    });
  });

  describe('BTC100', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://www.btc100.com/apidata/getdata.json')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'array'
          }
        })
        .check(function (res) {
          var result = JSON.parse(res.body);
          result[0].should.have.property('bit');
          parseInt(result[0].bit, 10).should.be.type('number');
        })
      .run(done);
    });
  });

  describe('BTCChina API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://data.btcchina.com/data/ticker')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'number',
            required: ['last'],
            properties: {
              last: {
                type: 'number'
              }
            }
          }
        })
      .run(done);
    });
  });

  describe('BTCTrade API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('http://www.btctrade.com/api/ticker')
        .status(200)
        .schema({
          required: ['last'],
          properties: {
            last: {
              type: 'number'
            }
          }    
        })
      .run(done);
    });
  });

  describe('CHBTC API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('http://api.chbtc.com/data/ticker')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'number',
            required: ['last'],
            properties: {
              last: {
                type: 'number'
              }
            }
          }          
        })
      .run(done);
    });
  });

  describe('Huobi API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('http://market.huobi.com/staticmarket/ticker_btc_json.js')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'number',
            required: ['last'],
            properties: {
              last: {
                type: 'number'
              }
            }
          }          
        })
      .run(done);
    });
  });

  describe('OKCoin API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://www.okcoin.cn/api/ticker.do')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'number',
            required: ['last'],
            properties: {
              last: {
                type: 'number'
              }
            }
          }          
        })
      .run(done);
    });
  });

  describe('Peatio API', function () {
    it('should be healthy', function(done) {
      restpal
        .get('https://peatio.com/api/v2/tickers/btccny.json')
        .status(200)
        .schema({
          required: ['ticker'],
          ticker: {
            type: 'number',
            required: ['last'],
            properties: {
              last: {
                type: 'number'
              }
            }
          }          
        })
      .run(done);
    });
  });
});