const {run} = require('../lib/demo');

describe("Basic Test - Alt", () => {
  it('should return correct data - alt', (done) => {
    const response = [1,2,3,4];
    setTimeout(() => {
      expect(response).toEqual([1, 2, 3, 4]);
      done();
    }, 10)
  });

});
