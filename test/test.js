var add = require('../lib/add')
// function add(a, b) {
//   if(isNaN(a) || isNaN(b)) {
//     console.error(`${a}与${b}应均为数字`)
//   }
//   // 实现该函数
//   const aList = a.split('').reverse()
//   const bList = b.split('').reverse()
//   const maxLen = Math.max(aList.length, bList.length)
//   // 可以精确表示到个位的最大整数 Math.pow(2, 53)
//   const MaxShowNumLen = (Math.pow(2,53) + '').length
//   if(maxLen < MaxShowNumLen) {
//     return '' + (Number(a) + Number(b))
//   }

//   let flag = 0
//   let cList = []

//   for(let i = 0, l =  maxLen; i < l ; i++ ){
//     let tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag
//     flag = 0
//     if (tmp > 9) {
//       tmp -= 10
//       flag = 1
//     }
//     cList.push(tmp)
//   }
//   if(flag) {
//     cList.push(flag)
//   }
//   return cList.reverse().join('')
// }

describe('大数相加add方法', function () {
  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    add('42329', '21532')
      .should.equal('63861')
  })
  
  it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    add('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
  })
})