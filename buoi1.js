//1 : khai bao bien
// var a=5
// const b=6
// a=10
// b=12
// console.log(b)

//2 : kieu du lieu
// null , undefined
// var a=null
// console.log(a)
//th1 : khai bao 1 bien khong gan gia tri = undefined
// var a
// console.log(a)
// th2 : truy van toi key(ob) khong ton tai thi la undefined
// const teo={
//     name : "Nguyen Van Teo", age: 10
// }

// console.log(teo.address)


//3 :  object
// const teo={
//     name : "Nguyen Van Teo", age: 10
// }

// console.log(teo.address)

//4 : array
//  const arrayNames = ["Teo","Ti","Tun"]
//  arrayNames[0] = "Tuan"
// console.log(arrayNames[0])

//mutable and immutable
//5: toan tu
// + , - , * , / , % , ++ , --
// a +=1 === a = a+1
var a = 5
var b = 6
var ketqua = a++ - --b + --a + b-- + ++a - b++ + b-- - b++
// 5 - --b + --a + b-- + ++a - b++ + b-- - b++
// 5 - 5 + --a + b-- + ++a - b++ + b-- - b++
// 5 - 5 + 4 + b-- + ++a - b++ + b-- - b++
// 5 - 5 + 4 + 5+ ++a - b++ + b-- - b++
console.log(ketqua)