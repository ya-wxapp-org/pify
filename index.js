module.exports = function(func) {
  function caller(options) {
    function handler(resolve, reject) {
      func({
        success: (...args) => resolve(...args),
        fail: (...args) => reject(...args),
        ...options
      })
    }
    return new Promise(handler)
  }
  return caller
};
