const binarySearch=(arr,target)=>{
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        const mid =Math.floor(left+(right-left)/2);

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid +1;
        }
        else{
            right = mid -1;
        }

    }
    return -1;
}

const prompt = require('prompt-sync')();
const sortedArray = prompt("Enter sorted array seprated by comma :");
const targetValue = parseInt(prompt("Enter value to  be searched:"));

const array = sortedArray.split(',').map(Number);
const result = binarySearch(array,targetValue);

if (result !== -1) {
    console.log('Value ' +targetValue+ ' found at index '+result+'.');
}
else{
    console.log('Value ' +targetValue+' was not found');
}

