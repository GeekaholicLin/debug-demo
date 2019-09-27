console.log('running another entry')
import(/* webpackChunkName: 'async-b' */'./async-b').then(() => console.log('async-b done in entryjs'))

setTimeout(() => {
  import(/* webpackChunkName: 'async-a' */'./async-a').then(() => console.log('async-a done in entryjs'))
}, 5000)
const entry = 'entry'
export default entry