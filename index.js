const path = require('path')
const pug = require('pug')

module.exports = function flyPug () {
  return this.filter('pug', function plugin (data, options) {
    if (!options.filename) {
      options.filename = path.resolve(path.join(options.file.dir, options.file.base))
    }
    delete options.file
    return { ext: '.html', code: pug.render(data.toString(), options) }
  })
}
