function run() {

  const greeting = 'hello!';

  return greeting;
}

function SessionManager() {
  this.store = {};
}

/**
 * initialize the session store
 * @return {string}
 */
SessionManager.prototype.init = function (config) {
  this.store['session'] = config;
};

SessionManager.prototype.get = function (key) {
  return this.store.session[key];
};

module.exports = {
  run: run,
  SessionManager: SessionManager
};
