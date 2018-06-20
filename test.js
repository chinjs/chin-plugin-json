import assert from 'assert'
import rewire from 'rewire'
import { resolve, extname } from 'path'
import { mount } from '.'
import unified from 'chin-plugin-unified'
import mdast2hast from 'remark-rehype'

it('mount', () => {
  const md2html = unified('m2h', [mdast2hast])
  const md2html2json = mount(md2html)

  const processedPromise = md2html2json.processor(markdown, {
    out: rewire('.').__get__('parseXbase')(resolve('./stub.md'))
  })

  return processedPromise.then(([ [ outpath, json ] ]) => {
    assert.equal(extname(outpath), '.json')
    assert.ok(json.includes('<h1>title</h1>'))
  })
})

const markdown = `
# title

[![alt](https://www.w3schools.com/w3images/lights.jpg)](https://github.com/kthjm/chin-plugin-json)

- 0
- 1
- 2

*italics* and **bold** and ~~strikethrough~~.`