document.querySelector('#image').addEventListener('click',function(e){
    // console.log(e.target); // it gives target in the console
    console.log(e.target.parentNode);
    let removeimage=e.target.parentNode
    removeimage.remove()
    
})