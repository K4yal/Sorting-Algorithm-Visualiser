import React from "react";
import mergeSort from "./Algorithms/Merge";
import {getMergeSortAnimations} from "./Algorithms/Merge"
import { getQuickAnimations } from "./Algorithms/Quick";
import { getBubbleAnimations } from "./Algorithms/Bubble"; 
import { getHeapAnimations } from "./Algorithms/Heap";
import "./style.css"

export default function SortingVisualser(){

    const [array, setArray]= React.useState([])
    const ANIMATION_SPEED_MS = 7
    const PRIMARY_COLOR = 'white'
    const SECONDARY_COLOR = 'red'
    const TERNARY_COLOR = 'green'
    

    function generateNewArray(){    
        const newArray=[]
        for(let i = 0; i<=150 ; i++){
            newArray.push(Math.floor(Math.random()*(850 -15 + 1) + 15))
            }
        
        setArray(newArray) 
        console.log(newArray)
    }

    
    
    function mergeSort() {
        const animations = getMergeSortAnimations(array)
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('bar')
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }
      function quickSort(){
        const animations= getQuickAnimations(array)
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bar')
            const isSwap = animations[i][0] ==="swap"
            if(!isSwap){
                const [x,barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === "1" ? SECONDARY_COLOR : PRIMARY_COLOR; 
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                  }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(()=>{
                const [x,barOneIdx, newHeight]= animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`},
                i * ANIMATION_SPEED_MS
                )

            }
        }
      }
      function bubbleSort(){
        const animations= getBubbleAnimations(array)
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bar')
            const isSwap = animations[i][0] ==="swap"
            if(!isSwap){
                const [x,barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                  }, i * ANIMATION_SPEED_MS); 
            }
            else{
                setTimeout(()=>{
                const [x,barOneIdx, newHeight]= animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`},
                i * ANIMATION_SPEED_MS
                )

            }
        }

      }
      function heapSort(){
        const animations = getHeapAnimations(array) 
        for(let i = 0; i < animations.length; i++){
          const arrayBars = document.getElementsByClassName('bar')
          if(animations[i][0]=== "heapify"){
            const [x,y,barOneIdx, barTwoIdx] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = animations[i][1] === 1 ? TERNARY_COLOR : PRIMARY_COLOR
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
                  }, i * 13); 
          }
          else if(animations[i][0]=== "swap"){
            setTimeout(()=>{
              const [a,barOneIdx, newHeight]= animations[i]
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`},
              i * 13)
          }
          else{
            const [b,barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                  }, i * 13); 

          }
        }
      }
    
   
   //^^^^Algos above ------------------ Algos above^^^
    return(
    <div className="Main">
        <div className="Header">
            
            <button className="NewArrayButton"
            onClick={()=>generateNewArray()}>
                Generate Array
            </button> 
            <p> &lt;=== First generate a random array</p> 
            <p>Then select a sorting algorithm to sort the array!!! ===&gt;</p>
            
            
            <div className="AlgoButtons">
            <button className="MergeSortB"
            onClick={()=>mergeSort()}>
                Merge Sort
            </button> 
            <button className="QuickSortB" 
            onClick={()=>quickSort()}>Quick Sort</button>
            <button className="HeapSortB"
             onClick={()=>heapSort()}>Heap Sort</button>
            <button className="BubbleSortB"
             onClick={()=>bubbleSort()}>Bubble Sort</button>
            </div>
        </div>
        
        <div className="BarContainer">
         { (array.map((x,id)=>(
            <div className="bar" 
            key={id}
            style={{height:`${x-150}px`,backgroundColor:PRIMARY_COLOR}}>
                
            </div>)
        ))
    } 
        </div>
    </div>
    )
    }