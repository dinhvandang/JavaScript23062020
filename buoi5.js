// 1 : rest nhan nv nhan tham so truyen vao

// function sum(...nums){
//   return nums.reduce((a, b) => a +b )
// }
//     console.log(sum(1,2,3,4,5))


// 2 spread ( coppy cac phan tu
    // const arrNums = [1,2,3,4,5,6,7,8,9,10]

    // const newArr = [...arrNums]

    // console.log(newArr)

    // const teo = {
    //     name : 'Teo' ,
    //     address : {location : 'Quan 10'}
    // }

    // const ti = teo
    // ti.address = {location : 'Quan 8'}
    // console.log(teo)
    // console.log(ti)

    const arrNums = [1,2,3]
     
    const newArr = arrNums
    newArr.pop()
    console.log(arrNums)
    console.log(newArr)
    