========
fly-pug
========

|fly-bg|_ |npm-bg|_ |dl-bg| |travis-bg|_ |license-bg|_

.. |fly-bg| image:: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square&maxAge=2592000
.. _fly-bg: https://github.com/flyjs/fly

.. |npm-bg| image:: https://img.shields.io/npm/v/fly-pug.svg?style=flat-square
.. _npm-bg: https://www.npmjs.org/package/fly-pug

.. |dl-bg| image:: https://img.shields.io/npm/dm/fly-pug.svg?style=flat-square

.. |travis-bg| image:: https://img.shields.io/travis/frantic1048/fly-pug.svg?style=flat-square
.. _travis-bg: https://travis-ci.org/frantic1048/fly-pug

.. |license-bg| image:: https://img.shields.io/github/license/frantic1048/fly-pug.svg?style=flat-square
.. _license-bg: https://spdx.org/licenses/WTFPL.html

Pug_ plugin for |Fly|_

.. |Fly| replace:: *Fly*
.. _Fly: https://github.com/flyjs/fly
.. _Pug: https://github.com/pugjs/pug

------------------
Install
------------------

This plugin requires Fly_ .

.. code:: bash

    npm i -D fly-pug

------------------
Usage
------------------

Async/Await flavored:

.. code:: js

    export async function pagu () {
      await this
          .source('src/*.pug')
          .pug()
          // or pass your options to pug
          // .pug({pretty: true})
          .target('dist')
    }

Generator function flavored:

.. code:: js

    exports.pagu = function* () {
      yield this
          .source('src/*.pug')
          .pug()
          // or pass your options to pug
          // .pug({pretty: true})
          .target('dist')
    }

Check out Pug documentation_ for available options.

.. _documentation: http://jade-lang.com/api/

------------------
License
------------------

`Do What The F*ck You Want To Public License <https://spdx.org/licenses/WTFPL>`_