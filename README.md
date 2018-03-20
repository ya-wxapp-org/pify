# pify

[![NPM version](https://img.shields.io/npm/v/@ya-wxapp-org/pify.svg?style=flat)](https://npmjs.com/package/pify) [![NPM downloads](https://img.shields.io/npm/dm/@ya-wxapp-org/pify.svg?style=flat)](https://npmjs.com/package/pify) 

## Install

```bash
yarn add @ya-wxapp-org/pify
```

## Usage

```js
const pify = require('@ya-wxapp-org/pify')

const info =  await pify(wx.getUserInfo)({
    withCredentials: true
})
//=> userinfo.
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**pify** © [fimars](https://github.com/fimars), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by fimars with help from contributors ([list](https://github.com/fimars/pify/contributors)).

> [github.com/fimars](https://github.com/fimars) · GitHub [@fimars](https://github.com/fimars) · Twitter [@fimars](https://twitter.com/fimars)
