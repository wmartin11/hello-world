function run() {

  const greeting = 'hello!';

  return greeting;
}

function SessionManager() {
  this.store = {};
}


SessionManager.prototype.init = function hello () {
  return 'Hello, my name is ' + this.name;
};

module.exports = {
  run: run,
  SessionManager: SessionManager
};
