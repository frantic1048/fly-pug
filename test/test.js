import test from 'ava'
import { readFileSync } from 'fs'

import flyPug from '../'

const fly = {
  filter (name, plugin) {
    this[name] = plugin
  }
}

flyPug.call(fly)

test('rendering', t => {
  const data = readFileSync('assert.pug')
  const options = { file: { base: 'assert.pug', dir: '' } }
  t.deepEqual(fly.pug(data, options), {
    ext: '.html',
    code: '<!DOCTYPE html><html lang="en"></html><head><meta charset="UTF-8"/><title>Oh Pug</title></head><body><h1>Oh my body</h1></body>'
  })
})
