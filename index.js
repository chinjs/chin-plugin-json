const { parse, format } = require('path')
const { assign } = Object

const ASSIGNED = { ext: '.json' }

const json = ({ replacer = null, space } = {}) => ({
  options: { encoding: 'utf8' },
  processor: (data, { out }) => [
    format(assign({}, out, ASSIGNED)),
    JSON.stringify(data, replacer, space)
  ]
})

const mount = (ext, options) => {
  const ext2json = json(options)

  const processor = (data, util) =>
    Promise.resolve()
    .then(() => ext.processor(data, util))
    .then(result2results)
    .then(results =>
      results.map(([ outpath, processed ]) =>
        ext2json.processor(processed, { out: outpath ? parseXbase(outpath) : util.out })
      )
    )

  return assign({}, ext, { processor })
}

const parseXbase = (path) =>
  Object
  .entries(parse(path))
  .filter(([key]) => key !== 'base')
  .reduce((a, [key,value]) => assign(a, { [key]: value }), {})

const result2results = (result) =>
  !Array.isArray(result) ?
  [ [undefined, result] ] :
  !Array.isArray(result[0]) ?
  [ result ] :
  result

module.exports = json
module.exports.json = json
module.exports.mount = mount