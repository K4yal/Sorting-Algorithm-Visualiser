export function getQuickAnimations(arr){
    const animations = [] 
    if (arr.length <= 1) return arr
    quickSort(arr, 0, arr.length-1,animations) 
    return animations

}

function quickSort(arr, lowIDX, highIDX,animations){
    if(lowIDX >= highIDX){
      return
    }
    let pivIDX = Math.floor(Math.random() * (highIDX - lowIDX + 1) + lowIDX)
    let pivot = arr[pivIDX] 
    let lp = lowIDX
    let rp = highIDX
    swap(arr,pivIDX,highIDX,animations)
    
    while(lp < rp){
        animations.push(["1",lp,rp])
        animations.push(["2",lp,rp])
      while(arr[lp] < pivot && lp < rp){
        lp++
      }
      while(arr[rp]>= pivot && lp < rp){
        rp--
      }
      
      swap(arr,lp,rp,animations)
      
    }
    swap(arr,lp, highIDX,animations)
    quickSort(arr,lowIDX,lp-1,animations)
    quickSort(arr,lp+1, highIDX,animations) 
    
  }
  
  function swap(arr, IDX1, IDX2,animations){
    animations.push(["swap",IDX1, arr[IDX2]])
    animations.push(["swap",IDX2,arr[IDX1]])
    let temp = arr[IDX1]
    let temp2 = arr[IDX2]
    arr[IDX1]=temp2 
    arr[IDX2]= temp
    
  }
  let nums = [10,9,8,7,6,5,4,3,2,1]
  console.log(getQuickAnimations(nums))