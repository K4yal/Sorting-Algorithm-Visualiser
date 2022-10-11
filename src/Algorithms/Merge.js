export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const tempArr = array.slice();
    mergeSort(array, 0, array.length - 1, tempArr, animations);
    return animations;
  }

function merger(inputArray, startIdx, midIdx, endIdx, tempArr, animations){    
    let i = startIdx
    let j = midIdx + 1
    let k = startIdx

    while( i <= midIdx && j <= endIdx){

        animations.push([i,j])
        animations.push([i,j])

        if(tempArr[i]<= tempArr[j]){
            animations.push([k, tempArr[i]])

            inputArray[k++] = tempArr[i++]
        }
        else{
            animations.push([k, tempArr[j]])

            inputArray[k++]= tempArr[j++]
        }
    }
    while(i<=midIdx){
        animations.push([i, i])
        animations.push([i, i])
        animations.push([k, tempArr[i]])
        inputArray[k++]= tempArr[i++]
        
    }
    while(j<=endIdx){
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, tempArr[j]])
        inputArray[k++]= tempArr[j++]
        
    }
} 

 function mergeSort(inputArray, startIdx, endIdx, tempArr, animations){
    if(startIdx===endIdx){
        return
    }
    const midIdx= Math.floor((startIdx + endIdx)/2)
    mergeSort(tempArr,startIdx,midIdx,inputArray, animations)
    mergeSort(tempArr,midIdx + 1 ,endIdx,inputArray, animations)
    merger(inputArray, startIdx, midIdx, endIdx, tempArr, animations) 
    
}