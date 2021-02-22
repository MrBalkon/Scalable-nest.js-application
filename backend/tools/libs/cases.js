/* eslint-disable @typescript-eslint/no-var-requires */
const clean = require('./toNoCase')
function toSpaceCase(string) {
    return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? ' ' + match : ''
    }).trim()
  }
function toPascalCase(string) {
    return toSpaceCase(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
      return letter.toUpperCase()
    })
}

function toDotCase(string) {
    return toSpaceCase(string).replace(/\s/g, '.')
  }
function toKebabCase(string) {
    return toSpaceCase(string).replace(/\s/g, '-')
  }

  module.exports = {
    toPascalCase, toDotCase, toKebabCase
  }