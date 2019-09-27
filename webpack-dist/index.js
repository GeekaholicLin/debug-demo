// index.js
import def, { sum } from './sum';
import plus from './plus'
import(/* webpackChunkName: 'async' */'./async-a').then(() => console.log('async-a done in index'))
console.log('running index entry')
console.log(sum(1, 2), def, plus)
export default 'index'
