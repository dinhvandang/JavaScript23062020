// 22 : toan tu 3 ngoi
const a =5
const b = 6 
    // if (a > b){
    //     console.log("A lon hon B")
    // }else{
    //     console.log("A be hon hoac bang B")
    // }
    // console.log(a > b ? "A lon hon B" : ("A be hon hoac bang B") ) // neu a lon hon b thi dau ? la chay a>b , con dau : la hoac a<=b

// 23 : function scope
    // var a = 5 
    // function tinhtong(){
    //     var a = 7
    //     var b = 6
    //     return a + b;
    // }
    // console.log(tinhtong())
    
// 24 : cach su dung ks bien

// 25  : function context and bind
    // const teo = {
    //     name : ' Nguyen Van Teo',
    //     age : 20,
    //     showName : function(){
    //         console.log(this.name)
    //     }
    // }
    // // const showName2 = teo.showName.bind(teo)
    // const showName2 = teo.showName.bind({name : "Nguyen Van TI"})
    //  showName2()
// 26 : arrow function

//  const teo = {
//         name : ' Nguyen Van Teo',
//         age : 20,
//         showName : function(){
//             console.log(this.name)
//             const that = this
//             // var a = function(){
//                 var a = () => {
//                 console.log(that.name)
//             }
//             a()
//         }
//     }
//     teo.showName()

// const arrayNames = [ 'Teo', 'TI' , 'Tun']
// const newArrayNames = arrayNames.map(function(value)  {
//     return 'Ti'
// })
// console.log(newArrayNames)

//     const arrayNames = [ 'Teo', 'TI' , 'Tun']
//     const newArrayNames = arrayNames.map((value) => {
//         return 'Ti'
//     })
//     console.log(newArrayNames)

//     const showName = () => {
        
//     }

// 27 : Template String
    // const teo = {
    //     name : "Nguyen Van Teo",
    //     age : 20
    // }
    // const string = "Xin chao" + teo.name + " . Ban hien tai " + teo.age + " tuoi"
    // const string2 = `Xin chao ${teo.name} . Ban hien tai ${teo.age} tuoi `
    // console.log(string)
    // console.log(string2)

// 28 : argument

    // const obj = {
    //     0 : 'Thanh',
    //     1 : 'Trang',
    //     2 : 'Thuy',
    //     length : 3
    // }
    // console.log(Array.from(obj))

//     function tinhtong(){
//         return Array.from(arguments).reduce((accum , currentValue) => {
//                 return accum + currentValue
//         },0)
//         // console.log(Array.from(arguments))
//     }
//    console.log(tinhtong(1,2,3,4,5,6,7,8,9,10))


// 29 : default parametter
        // function tinhtong(a=5,b=5){
        //     console.log(a+b)

            
        // }
        //    tinhtong()


// 30 : apply