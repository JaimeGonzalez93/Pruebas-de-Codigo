function selectionSort(array){
    
let minimo
    for (let i=0;i<array.length-1 ;i++){
         minimo=i;
        for (let j=i+1;j<array.length;j++){
            if(array[j]<array[minimo]){
                minimo=j;
            }
            let temp=array[i];
            array[i]=array[minimo];
            array[minimo]=temp;
        }
    }
    return array;
}
let test=[5,4,2,1,3,6];
let resultado = selectionSort(test);
console.log(resultado);