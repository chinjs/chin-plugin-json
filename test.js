import assert from 'assert'
import { resolve, parse, extname } from 'path'
import json from '.'

const parseXbase = (path) =>
  Object
  .entries(parse(path))
  .filter(([key]) => key !== 'base')
  .reduce((a, [key,value]) => Object.assign(a, { [key]: value }), {})

const test = (options) => () => {
  const data = JSON.stringify({ key: 'value' })
  const out = parseXbase(resolve('./name.ext'))
  const [ outpath, processed ] = json(options).processor(data, { out })

  assert.equal(extname(outpath), '.json')

  options && options.parse
   ? assert.ok(typeof JSON.parse(processed) === 'object')
   : assert.ok(typeof JSON.parse(processed) === 'string')
}

it('empty', test())
it('parse: true', test({ parse: true }))