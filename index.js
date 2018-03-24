
function onWrite(stream, cb) {
  var _write = stream._writev
  if (_write) {
    stream._writev = write
  } else {
    _write = stream._write
    stream._write = write
  }
  function write(chunk) {
    this.emit('write', chunk)
    _write.apply(this, arguments)
  }
  if (cb) {
    return stream.on('write', cb)
  }
}

module.exports = onWrite

