
function add(a, b) {
  // 实现该函数
  const aList = a.split('').reverse()
  const bList = b.split('').reverse()
  const maxLen = Math.max(aList.length, bList.length)
  // 可以精确表示到个位的最大整数 Math.pow(2, 53)
  // const MaxShowNumLen = (Math.pow(2,53) + '').length
  // if(maxLen < MaxShowNumLen) {
  //   return '' + (Number(a) + Number(b))
  // }

  let flag = 0
  let cList = []

  for(let i = 0, l =  maxLen; i < l ; i++ ){
    let tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag
    flag = 0
    if (tmp > 9) {
      tmp -= 10
      flag = 1
    }
    cList.push(tmp)
  }
  if(flag) {
    cList.push(flag)
  }
  return cList.reverse().join('')
}

module.exports = add