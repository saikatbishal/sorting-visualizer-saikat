export const getMergeSortAnimations
export const mergeSort = (array,start,end,animations=[]) => {
    if (array.length === 1) return array;
    const middle = Math.floor((end-start+1) / 2);
    const firstHalf = mergeSort(array,start,middle,animations);
    const secondHalf = mergeSort(array,middle, end, animations);
    const sortedArray = [];
    let i = start,
        j = middle + 1;
    while (i < middle+1 && j < end+1) {
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);
        }
        else {
            sortedArray.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    return sortedArray;

};
export const bubbleSort = inputArr => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
    i = left, 
    j = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}
export const quickSort = (items) => {
    const stack = [];
    stack.push(0);
    stack.push(items.length - 1);
    while(stack[stack.length - 1] >= 0){
        var i = stack.pop();
        var j = stack.pop();
        
        var pivotIndex = partition(items, i, j);
        if (pivotIndex - 1 > i){
            stack.push(j);
            stack.push(pivotIndex - 1);
		}
        if (pivotIndex + 1 < j){
            stack.push(pivotIndex + 1);
            stack.push(j);
        }
    }
}
