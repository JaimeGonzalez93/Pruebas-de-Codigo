function bubbleSort(array){
    let temp;
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length-1-i;j++){
            if (array[j]>array[j+1]){
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
    
}

let test=[5,4,2,1,3,6];
let resultado = bubbleSort(test);
console.log(resultado);
