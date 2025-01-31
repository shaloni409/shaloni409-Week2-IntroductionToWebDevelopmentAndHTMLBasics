function findLargest(arr) {
    let num=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            num=arr[i];
        }
    }
    return num;

  
}
console.log(findLargest([10, 5, 8, 20]));  // Output: 20


