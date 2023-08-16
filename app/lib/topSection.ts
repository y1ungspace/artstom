const contentful = require('contentful')

let topSectionResult = {}

const client = contentful.createClient({
  space: 'n3fw6fm0294h',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'wg1rw5VY4qe-WDkXf9fCVv0ldCTKLougbYxF7SY1dGg'
})

client.getEntry('16zYjJURSaNGT684637EK1')
  .then((entry: any) => console.log(entry.fields))
  .catch(console.error)

  export default topSectionResult 