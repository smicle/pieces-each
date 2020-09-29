# pieces-each
[![npm version](https://badge.fury.io/js/pieces-each.svg)](https://badge.fury.io/js/pieces-each)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/20246f24efa6434188e3443ea9840fe8)](https://www.codacy.com/gh/smicle/pieces-each/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=smicle/pieces-each&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/4e788f5c-6f1f-45f7-981e-0722fa84c109)](https://codebeat.co/projects/github-com-smicle-pieces-each-master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Intro
Recreate the array into n chunks.

## Installation
```sh
npm install pieces-each
```

## Usage
### JavaScript
```js
const PiecesEach = require('pieces-each').default

const array = PiecesEach([1, 2, 3, 4], 2)
```

### TypeScript
```ts
import PiecesEach from 'pieces-each'

const array = PiecesEach([1, 2, 3, 4], 2)
```

## Test
```sh
npm run test
```
