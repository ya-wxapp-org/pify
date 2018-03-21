export default function pify(func) {
  function caller(options) {
    function handler(resolve, reject) {
      func(
        Object.assign({
          success: (...args) => resolve(...args),
          fail: (...args) => reject(...args)
        }, options)
      );
    }
    return new Promise(handler);
  }
  return caller;
}
