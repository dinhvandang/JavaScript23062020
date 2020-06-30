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
// const NewArray = arrayNames.concat(arrayNames2)
//      console.log(NewArray)

//14 : callback
    // function binhphuong(num){
    //         return num * num
    // }

    // function tinhtongArray(arr , fn){
    //     var ketqua = 0
    //         for (const value of arr) {
    //             ketqua += fn(value)
    //         }
    //         return ketqua
    // }

    // const arrayNums = [1,2,3,4,5]
    // console.log(tinhtongArray(arrayNums , binhphuong))

//15 : ham map
    const arrayNums = [1,2,3,4,5,6,7,8,9,10]
    // const newArrayNums = []
    // for (const value of arrayNums) {
    //     newArrayNums.push(value +1)
    // }

        // const newArrayNums = arrayNums.map(function(value , index){
        //     console.log(value)
        //     return value
        // })
        //  console.log(newArrayNums)

         const newArrayNums = arrayNums.map(function(value , index){
        
            return value +1
        })
         console.log(newArrayNums)
   