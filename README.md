# fly-pug

[![fly badge][fly-bgp]][fly-bg] [![npm badge][npm-bgp]][npm-bg] ![download badge][dl-bgp] [![travisbadge][travis-bgp]][travis-bg] [![license badge][license-bgp]][license-bg]

[fly-bgp]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square&maxAge=2592000
[fly-bg]: https://github.com/flyjs/fly

[npm-bgp]: https://img.shields.io/npm/v/fly-pug.svg?style=flat-square
[npm-bg]: https://www.npmjs.org/package/fly-pug

[dl-bgp]: https://img.shields.io/npm/dm/fly-pug.svg?style=flat-square

[travis-bgp]: https://img.shields.io/travis/frantic1048/fly-pug.svg?style=flat-square
[travis-bg]: https://travis-ci.org/frantic1048/fly-pug

[license-bgp]: https://img.shields.io/github/license/frantic1048/fly-pug.svg?style=flat-square
[license-bg]: https://spdx.org/licenses/WTFPL.html

[Pug][] plugin for *[Fly][]* .

[Fly]: https://github.com/flyjs/fly
[Pug]: https://github.com/pugjs/pug

## Install

This plugin requires [Fly][] .

```bash
    npm i -D fly-pug
```

## Usage

Async/Await flavored:

```js
    export async function pagu () {
      await this
          .source('src/*.pug')
          .pug()
          // or pass your options to pug
          // .pug({pretty: true})
          .target('dist')
    }
```

Generator function flavored:

```js
    exports.pagu = function* () {
      yield this
          .source('src/*.pug')
          .pug()
          // or pass your options to pug
          // .pug({pretty: true})
          .target('dist')
    }
```

Check out Pug [documentation][] for available options.

[documentation]: http://jade-lang.com/api/

## License

[Do What The F*ck You Want To Public License](https://spdx.org/licenses/WTFPL)
