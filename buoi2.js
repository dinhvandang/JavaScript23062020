// 11 : for of
//Array
// const arrayNames = ["Teo" , "Ti" , "Tun" , " Tuan" , "Hoa"]
// for (const value of arrayNames) {
//     console.log(value)
// }
// Object
// const teo = {
//     name : "Teo" ,
//     age : 20
// }
//     for (const key in teo) {
       
//         console.log(teo[key])
//     }


//12 : array method
 const arrayNames = ["Teo" , "Ti" , "Tun"]
 const arrayNames2 = [ " Hoa" , "Tuan"]
 //them vi tri cuoi
//   arrayNames.push("Toan")
//   console.log(arrayNames)
// xoa vi tri cuoi 
// arrayNames.pop()
// console.log(arrayNames)
// them vi tri dau
// arrayNames.unshift('A')
// console.log(arrayNames)
// xoa vi tri dau
// arrayNames.shift()
// console.log(arrayNames)
// noi du lieu
const NewArray = arrayNames.concat(arrayNames2)
     console.log(NewArray)