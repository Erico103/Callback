function makingHomework(vak, callback){
console.log(`Ok, ok I am gonna do my ${vak}`)
callback()
}

function readyHomework(){
  setTimeout(function(){
   console.log('Look, moms, I have done my homework' ) 
  },3000)

}

makingHomework("Algebra", readyHomework)

