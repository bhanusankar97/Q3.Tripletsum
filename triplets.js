function smallestDifferenceTriplet(arr1, arr2, arr3, n){
    let result_min = 0, result_max = 0, result_mid = 0;
    let i = 0, j = 0, k = 0;
    let diff = 1000;
    while(i<n && j < n && k < n){
        let sum = arr1[i]+arr2[j]+arr3[k];
        let max = Math.max(Math.max(arr1[i], arr2[j]), arr3[k]);
        let min = Math.min(Math.min(arr1[i], arr2[j]), arr3[k]);
        if(max == arr1[i]){
            i = i+1;
        }else if(min == arr2[j]){
            j = j+1
        }else{
            k = k+1
        }
        if(diff > (max-min)){
            diff = max - min;
            result_max = max;
            result_min = min;
            result_mid = sum - (max+min);
        }
    }
    console.log((result_max + ","+result_mid+","+result_min))
}
let arr1 = [5, 2, 8], arr2 = [10, 7, 12], arr3 = [9, 14, 6]
let n = arr1.length
arr1.sort(function(a,b){return a-b});
arr2.sort(function(a,b){return a-b});
arr3.sort(function(a,b){return a-b});
smallestDifferenceTriplet(arr1, arr2, arr3, n);