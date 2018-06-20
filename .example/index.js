import json, { mount } from '..'
import unified from 'chin-plugin-unified'
import hast2mdast from 'rehype-remark'
import mdast2hast from 'remark-rehype'
import { join } from 'path'

const txt2json = json()
const md2html2json = mount(unified('m2h', [mdast2hast]))
const html2md2json = mount(unified('h2m', [hast2mdast]))

export default {
  put: join(__dirname, 'put'),
  out: join(__dirname, 'out'),
  clean: true,
  processors: {
    txt: txt2json,
    md: md2html2json,
    html: html2md2json
  }
}