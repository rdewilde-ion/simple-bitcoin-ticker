var request = require('supertest'),
  should = require('should');

describe('API Health Test', function () {

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';   

  describe('796 Xchange API', function () {
    it('should be healthy', function(done) {
      request('http://api.796.com')
      .get('/v3/futures/ticker.html?type=weekly')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');

          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('Bitfinex API', function () {
    it('should be healthy', function(done) {
      request('https://api.bitfinex.com')
      .get('/v1/pubticker/btcusd')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('last_price'); 
          parseInt(result.last_price, 10).should.be.type('number');

          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('Bitstamp API', function () {
    it('should be healthy', function(done) {
      request('https://www.bitstamp.net/api/ticker')
      .get('/')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('last'); 
          parseInt(result.last, 10).should.be.type('number');

          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('BTC-E API', function () {
    it('should be healthy', function(done) {
      request('https://btc-e.com')
      .get('/api/2/btc_usd/ticker')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');

          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('BTC100', function () {
    it('should be healthy', function(done) {
      request('https://www.btc100.com')
      .get('/apidata/getdata.json')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.instanceof(Array);
          result[0].should.type('object'); 
          result[0].should.have.property('bit');
          parseInt(result[0].bit, 10).should.be.type('number');

          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('BTCChina API', function () {
    it('should be healthy', function(done) {
      request('https://data.btcchina.com')
      .get('/data/ticker')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');
          
          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('BTCTrade API', function () {
    it('should be healthy', function(done) {
      request('http://www.btctrade.com')
      .get('/api/ticker')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('last'); 
          parseInt(result.last, 10).should.be.type('number');
          
          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('CHBTC API', function () {
    it('should be healthy', function(done) {
      request('http://api.chbtc.com')
      .get('/data/ticker')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');
          
          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('Huobi API', function () {
    it('should be healthy', function(done) {
      request('http://market.huobi.com')
      .get('/staticmarket/ticker_btc_json.js')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');
          
          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('OKCoin API', function () {
    it('should be healthy', function(done) {
      request('https://www.okcoin.cn')
      .get('/api/ticker.do')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');
          
          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });

  describe('Peatio API', function () {
    it('should be healthy', function(done) {
      request('https://peatio.com')
      .get('/api/v2/tickers/btccny.json')
      .expect(200)
      .end(function(err, res) {

        var result;

        if (err) {
          return done(err);
        }

        try {

          result = JSON.parse(res.text);

          result.should.be.type('object');
          result.should.have.property('ticker'); 
          parseInt(result.ticker.last, 10).should.be.type('number');
          
          done();
          
        } catch (e) {

          done(e);

        }
      });
    });
  });
});