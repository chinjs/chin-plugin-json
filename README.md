# chin-plugin-json

[![npm](https://img.shields.io/npm/v/chin-plugin-json.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-json)
[![npm](https://img.shields.io/npm/dm/chin-plugin-json.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-json)
[![Build Status](https://img.shields.io/travis/kthjm/chin-plugin-json.svg?longCache=true&style=flat-square)](https://travis-ci.org/kthjm/chin-plugin-json)
[![Coverage Status](https://img.shields.io/codecov/c/github/kthjm/chin-plugin-json.svg?longCache=true&style=flat-square)](https://codecov.io/github/kthjm/chin-plugin-json)

[chin](https://github.com/kthjm/chin) plugin using JSON.stringify.

## Installation
```shell
yarn add -D chin chin-plugin-json
```

## Usage

### json(options)
```js
import json from 'chin-plugin-json'

const ext = json()
```
#### [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- `replacer`
- `space`

### mount(ext, options)
```js
import { mount } from 'chin-plugin-json'
import unified from 'chin-plugin-unified'
import mdast2hast from 'remark-rehype'

const md2html = unified('m2h', [mdast2hast])
const md2html2json = mount(md2html, { replacer, space })
```


## License
MIT (http://opensource.org/licenses/MIT)
