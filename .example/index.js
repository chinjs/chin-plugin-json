import json from '..'
import { join } from 'path'

export default {
  put: join(__dirname, 'put'),
  out: join(__dirname, 'out'),
  clean: true,
  processors: [
    ['parse.json', { json: json({ parse: true }) }],
    ['unparse.json', { json: json({ parse: false }) }]
  ]
}