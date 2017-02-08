const { join } = require('path')
const { render } = require('pug')

module.exports = function (fly) {
  fly.plugin('pug', {}, function * (file, options) {
    if (!options.filename) {
      options.filename = join(file.dir, file.base)
    }
    try {
      const result = render(file.data.toString(), options)
      file.data = Buffer(result)
      file.base = file.base.replace(/\.pug$/, '.html')
    } catch (error) {
      fly.emit('plugin_error', {
        plugin: 'fly-pug',
        error: error.message
      })
    }
  })
}
