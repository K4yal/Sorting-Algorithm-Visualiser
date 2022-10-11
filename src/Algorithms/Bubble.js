export function getBubbleAnimations(arr){
    const animations = [] 
    //if (arr.length <= 1) return arr
    bubbleSort(arr,animations) 
    return animations

}


function bubbleSort(arr,animations){
    for(let i = 1; i <arr.length ; i++){
      for(let j = 0; j < arr.length -1; j++){
        animations.push([1,j,j+1])
        animations.push([2,j,j+1])
        if (arr[j]> arr[j+1]){
          swap(arr, j, j+1,animations)
        }
      }
    }
    
  }
  
  function swap(arr, IDX1, IDX2, animations){
    animations.push(["swap",IDX1, arr[IDX2]])
    animations.push(["swap",IDX2,arr[IDX1]])  
    let temp = arr[IDX1]
      let temp2 = arr[IDX2]
      arr[IDX1]=temp2 
      arr[IDX2]= temp
  }