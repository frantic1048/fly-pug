import Fly from 'fly'
import { extname, join } from 'path'
import test from 'ava'

import flyPug from '../'

test('rendering', async t => {
  const fly = new Fly({
    plugins: [
      flyPug
    ],
    tasks: {
      * test (self) {
        yield self.source(join(__dirname, 'assert.pug'))
          .pug()
          .run({
            * func (file) {
              t.is(file.data.toString(), '<!DOCTYPE html><html lang="en"></html><head><meta charset="UTF-8"/><title>Oh Pug</title></head><body><h1>Oh my body</h1></body>')
              t.is(extname(file.base), '.html')
            }
          })
      }
    }
  })
  await fly.start('test')
})
