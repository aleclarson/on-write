# on-write v0.0.1

Add `'write'` events to a stream via monkey-patching.

This is useful for `Writable` and `Duplex` streams.

```js
const onWrite = require('on-write')

let stream = fs.createWriteStream('test.txt')
onWrite(stream, (chunk) => {
  // This callback is optional.
  console.log(chunk.toString())
})

// Also emits "write" events!
stream.on('write', (chunk) => {})
```

