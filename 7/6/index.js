let array = [1, 2, 4, 5];


export const reverseArray = arr => {
    if(Array.isArray(arr)){
        const copy = [...arr];
        return copy.reverse();
    }
    else{
        return null;
    }
}



const bound = reverseArray(array);
console.log(bound);
