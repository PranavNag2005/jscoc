// // A promise is an object thaat represent Eventual completion or rejection of Asynchronous operation

// const promise1=new Promise(function(resolve,reject){
//     //do an async task
//     //dbcalls,apicalls 
//     setTimeout(function(){
//         console.log("inside promise");
//         resolve()
//     },1000)
// })
// promise1.then(function(){
//     console.log("inside then ");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("async task completed");
//     resolve()
//     },1000)
// }).then(function(){
//     console.log("it was resolved successfully");
    
// })
// const promiseThreee=new Promise(function(Resolve,Reject){
//     setTimeout(function(){
//         console.log("inside promise three")
//         Resolve({username:"pranav",email:"pranav@gmail.com"});
        
//     },1000)
// }).then(function(user){
//     console.log(user);
    
// })

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("in promisefour");
        let error=true;
        if(!error){
        resolve({username:"vamsi",password:"v@123"})
        }
        else{
            reject("something went wrong! Tryagain later")
        }


        
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
})
.then(function(username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{console.log("promise is either resolved or rejected");
})
// usage of async and await
const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("in promise five")
        let error=true
        if(!error){
            resolve({name:"pranav",description:"In js promisefive"})
        }
        else{
            reject("js went wrong")
        }
    },1000)
})

// usage of async block gives unhandled promise rejection so for that we should use try and catch blocks
async function consumingpromisefive(){
    try{
    const response=await promisefive
    console.log(response);}
    catch(e){
        console.log(e);
        
        
    }
    
}
consumingpromisefive()