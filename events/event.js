 // what we need to learn about events
    //types, timestamp,defaultprevented
    //target, toelement, SrcElement,curreentTarget
    // clientx,clienty,screenX,ScreenY
    //altkey, ctrlkey,shiftkkey, keycode

// In this code what we are doing is adding eventlisteners to particular image
// inside the unordered list  and checking the output in the console
document.getElementById("third").addEventListener('click',function (e){
    console.log("third image clicked ")
     e.stopPropagation() // by using this method it does not bubble up and give only one output
})
// In this code what we are doing is adding eventlisteners to total unorderedlist
// which consists list items and images in it 
// when clicked inside the ul it gets printed 

//but if you place both at a time first particular event is worked after that
// whole ul is responded so you will get first above ouptut and next below ouptut
// this is called event bubbling
// - because of event bubbling, the event moves up to its parent (<ul id="image">), triggering the second listener, which logs: "ul clicked".

document.getElementById("image").addEventListener('click',function(e){
    console.log("ul clicked ")
   
})
// Event propagation is the overall process of how events travel through the DOM. It includes three phases:
// - Capturing Phase – The event travels from the root (window) down to the target element.
// - Target Phase – The event reaches the target element.
// - Bubbling Phase – The event bubbles back up from the target to the root.
// So, event propagation = capturing → target → bubbling.

//event bubbling is the subset of event propagation


//**********-------------------************** */
// if we place the third parameter inside the eventlistener like true it means
// it is in event capturing it means from root to bottom what are the eventlisteners
// are there those are captured so dont use it
// but by default it is false so it bubbles up everytime we can stop those bubbling up
// using stop propagation


//using prevent default usiing to stop default action
document.getElementById("google").addEventListener('click',function(e){
    console.log("no redirecting to google ");
    
    e.preventDefault()
})