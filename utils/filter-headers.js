
function filterHeaders(headers, nameList) {
    return nameList
      .map(name => name.toLowerCase())
      .reduce((acc, name) => ({
        ...acc,
        [name]: headers[name]
      }, {}))
      .filter(Boolean);
}

module.exports = filterHeaders;