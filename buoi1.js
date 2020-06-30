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
//th3 : function khong return thi undefined
// function showName(name){
//     console.log(name)
//     }
//     console.log(showName("Phat"))

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
// do uu tien cua toan tu : ++,--
//*,/
//+,-
// var a = 5
// var b = 6
// var ketqua = a++ - --b + --a + b-- + ++a - b++ + b-- - b++
// // a++ - --b + --a + b-- + ++a - b++ + b-- - b++ a = 6 , b=6
// // a++ - --b + --a + b-- + ++a - b++ + b-- - b++ a = 6 , b=6
// console.log(ketqua)

//6 : function
// pham vi truy cap ( access modifier)
// function showName(name){
// console.log(name)
// return name
// }
// console.log(showName("Phat"))

//7 : object method 
// const teo = {
//     name : "Nguyen Van Teo", 
//     age :10,
//     info : function(){
//         console.log("Name : " +this.name)
//         console.log("Age : " +this.age)
//     }
// }
// teo.info()
//8: phep so sanh
// 9 : vong lap for
    // for(var i = 0 ; i < 10 ; i++){
    //     console.log(i)
    // }

// 10 : for in
//array :  var arrayNames = ["Teo" , "Ti" , "Tun" , " Tuan" , "Hoa"]
//  var arrayNames = ["Teo" , "Ti" , "Tun" , " Tuan" , "Hoa"]
//  for (const key in arrayNames){
//      console.log(arrayNames)
//  }

//  const teo = {
//         name : "Nguyen Van Teo", 
//         age :10,
//         info : function(){
//             console.log("Name : " +this.name)
//             console.log("Age : " +this.age)
//         }
//     }
//     for (const key in teo){
//         console.log(key)
//     }
// Ex
var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getkey(object){
    //   for (const key in object) {
    // console.log(key)
    // if (typeof object[key] == "object"){
    //     getkey(object[key])
    // }
    //     }
     console.log(Object.keys(object))
      }
  
  
  getkey(apartment)
  
    