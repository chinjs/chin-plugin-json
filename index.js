const { format } = require('path')

const ASSIGNED = { ext: '.json' }

module.exports = ({ parse, replacer = null, space } = {}) => ({
  options: { encoding: 'utf8' },
  processor: (data, { out }) => [
    format(Object.assign({}, out, ASSIGNED)),
    JSON.stringify(
      parse ? JSON.parse(data) : data,
      replacer,
      space
    )
  ]
})