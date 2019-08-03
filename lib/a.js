const a = '1' 
const b = 'c'
isNaN(a)
isNaN(b)
console.log(typeof a, isNaN(a))
console.log(typeof b, isNaN(b))
if(isNaN(a) || isNaN(b)) {
   console.error(`${a}与${b}应均为数字`)
}