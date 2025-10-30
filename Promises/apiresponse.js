// //getting api response using async and await

// async function getapiresponse(){
// try {
//     const response=await fetch("https://api.github.com/users/Pranavnag2005")
//     // console.log(response);
//     // we are using await keyword for the data to convert into json format
//     const jsondata=await response.json()
//     console.log(jsondata);
    
    
// } catch (error) {
//     console.log(error);
    
// }
// }
// getapiresponse()

//usage of .then and .catch;


fetch("https://api.github.com/users/Pranavnag2005")
.then(function(response){
    // console.log(response);
    // console.log(response.json()); // it returns promise=>pending
    return response.json()
    
})
.then(function(data){
    console.log(data);
    
})
.catch(function(e){
    console.log("something went wrong",e);
    
})