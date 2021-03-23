export default arr => {
    if(!Array.isArray(arr) || arr.length === 0) return null;

    const newArr = arr.map(element => Math.pow(Math.abs(element), 2));
    return Math.min(...newArr);
}


