export function getHeapAnimations(arr){
    const animations = [] 
    /*if (arr.length <= 1) 
    {
        return arr
    }*/
    heapSort(arr,animations) 
    return animations

}

function heapSort(arr,animations){ 
    var N = arr.length 
    for(var i = Math.floor(N/2)-1; i>=0; i--){
      heapify(arr, N, i,animations)
    }
    for(var i = N-1; i > 0; i--){
      animations.push([1,0,i])
      animations.push([2,0,i])
      animations.push(["swap",0,arr[i]])
      animations.push(["swap",i,arr[0]])  
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, i, 0,animations);
    }
    
  }
  
  function heapify(arr, N, i,animations){
    var root = i 
    var lc = 2*i +1 
    var rc = 2*i +2 
    
    if(lc < N && arr[lc]> arr[root]){
      root = lc 
    }
    if(rc < N && arr[rc]> arr[root]){  
      root = rc 
    }
    if (root != i){ 
        animations.push(["heapify",1,root,i])
        animations.push(["heapify",2,root,i])
        animations.push(["swap",root, arr[i]])
        animations.push(["swap",i, arr[root]])
      swap(arr, i, root)
      
      heapify(arr, N, root,animations)
    }
  } 
  
  function swap(arr, IDX1, IDX2){
    //animations.push(["swap",IDX1, arr[IDX2]])
    //animations.push(["swap",IDX2,arr[IDX1]])  
    let temp = arr[IDX1]
        let temp2 = arr[IDX2]
        arr[IDX1]=temp2 
        arr[IDX2]= temp
    }