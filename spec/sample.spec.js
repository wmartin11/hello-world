const { run, SessionManager } = require('../lib/demo');

describe("Basic Test - Alt", () => {
  it('should return correct data - alt', (done) => {
    const response = [1,2,3,4];
    setTimeout(() => {
      expect(response).toEqual([1, 2, 3, 4]);
      done();
    }, 10)
  });

  it('should return a greeting', () => {
    const greeting = run();

    expect(greeting).toEqual('hello!');
  })

  it('should provide a sessionManager', () => {
    const sessionManager = new SessionManager();

    expect(sessionManager).toBeDefined();
  })
});
