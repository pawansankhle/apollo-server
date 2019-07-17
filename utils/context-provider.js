
const filterHeaders =  require('./filter-headers');

function contextProvider({ req }) {
  return {
            req,
            customHeaders: {
              headers: {
                ...filterHeaders(req.headers, ['authorization', 'x-level' ]),
                credentials: 'same-origin',
                'Content-Type': 'application/json',
              },
            }
          }
}

module.exports = contextProvider;