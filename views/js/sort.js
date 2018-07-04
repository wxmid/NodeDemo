var arry = [85,24,8,45,17,31,96,50];
// 快速排序
function quikSort(arr) {
    if(arr.length <=1) return arr;
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex-1,1)[0];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quikSort(left).concat([pivot],quikSort(right));
};
// 插入排序
function insertSort(arr) {
    for(var i = 1;i< arr.length;i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// 二分插入排序
function binaryInsertSort(arr){
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i], left = 0, right = i - 1;
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (var j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
}
// 选择排序
function selectSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        var min = arr[i];
        for(var j = i + 1; j < arr.length - 1; j++){
            if(min > arr[j]){
                var temp = min;
                min = arr[j];
                arr[j] = temp;
            }
        }
        arr[i] = min;
    }
    return arr;
}
// 冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    
    for (var i = 0; i < len - 1; i++) {
        var n = 0;
        for (var j = 0; j < len - i ; j++) {
            
            if(arr[j] < arr[j-1]){
                n++;
                console.log(n);
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            
        }
        if( n < 1){
            
            break;
        }
    }
    return arr;
}
// 希尔排序
function shallSort(array) {
    var increment = array.length;
    var i
    var temp; //暂存
    var count = 0;
    do {
        //设置增量
        increment = Math.floor(increment / 3) + 1;
        for (i = increment ; i < array.length; i++) {
            console.log(increment);
            if (array[i] < array[i - increment]) {
                temp = array[i];
                for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;
            }
        }
    }
    while (increment > 1)
    return array;
}