function myGen(fn){
  function myYield(callback){
    return ()=>{next:callback}
  }
  return (...args)=>fn(...args.slice(0,-1),myYield)
}
function test(myYield){
  let a = myYield(()=>{
    console.log(1)
  })
  let b = myYield(()=>{
    console.log(2)
  })
}
let a = myGen(test)
let c = a.next()
let d = 3;