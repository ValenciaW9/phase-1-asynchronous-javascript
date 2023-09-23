
///Identify a Synchronous Code Block - As we have experienced in Javascript , our code executes top-to-bottom, left-to-right.

function getData(){
    console.log("2. Returning instantly available data.");
    return [{author: "Ta-Nehisi Coates"}, {author: "Cathy Park Hong"}];
  }
  
  function main(){
    console.log("1. Starting Script");
    const data = getData();
    console.log(`3. Data is currently ${JSON.stringify(data)}`);
    console.log("4. Script Ended");
  }
  
  main();


//Identify an Asynchronous Code Block
//The easiest asynchronous wrapper function is window.setTimeout() it takes as arguments:
//Function the "call back" function)  
//a nNumber representing millisecounds
//The setTimeour(0 will wait the specified  number of millisecounds and thene xecutes the vallback.
ssetTimeout(() => console.log('Hello World!'), 2000);

/// Since this code is in an asynchronous container, JavaScript can do other work and come back when the work "on the back-burner" is done. If JavaScript didn't have an asynchronous model, while you waited those 2 seconds, no gifs would animate and streaming audio might stall. Asynchronous execution makes browsers the exceedingly useful tools they are.
setTimeout(() => console.log('Hello World!'), 2000);
console.log("No, me first");
//Output No, me first
//Hello World!
setTimeout(() => console.log('Hello World!'), 0);
// Here the browser has < 0 milliseconds (i.e. nanoseconds) to see if it can find any work to do — and it still does!
//avaScript in the browser has an asynchronous execution model. This fact has little impact when you're writing simple code, but when you start doing work that might block the browser you'll need to leverage asynchronous functions. Remember, these functions can be surprising and nearly every JavaScript developer sooner or later forgets to reckon with asynchrony.

//While working asynchronously can be a bit of a headache for developers, it allows JavaScript to do other work whenever it has an opportunity. Important methods which require us to think asynchronously are setTimeout() and fetch(), among others.












