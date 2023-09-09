const linearSearch=(arr,target)=>{
    for(i=0 ; i< arr.length ; i++){
        if(arr[i]=== target){
            return i;
        }
    }
    return -1;
}

const prompt = require('prompt-sync')();
const inputArray = prompt("Enter list of numbers seprated by comma :");
const targetValue = parseInt(prompt("Enter value to  be searched:"));

const array = inputArray.split(',').map(Number);
const result = linearSearch(array,targetValue);

if (result !== -1) {
    console.log('Value ' +targetValue+ ' found at index '+result+'.');
}
else{
    console.log('Value ' +targetValue+' was not found');
}

