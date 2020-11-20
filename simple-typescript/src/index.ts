// function multiply (a: number, b: number): number {
//     return a*b
// }

//Various ways to import modules.
// import multiply, { multiplyByTwo } from './multiply'
// import * as multiplyModule from './multiply'
import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply'

const a=4 
const b=7

// console.log(`${a} * ${b} =  ${multiply(a, b)}`)
// console.log(`${a} * ${b} =  ${multiplyModule.default(a, b)}`)
//multiplyModule.multiplyByTwo(6)

console.log(`${a} * ${b} =  ${multiply(a, b)}`)
mBy2(6);