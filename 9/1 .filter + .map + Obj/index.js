const getAdults = obj => {
    const arrObj = Object.entries(obj); 
    const filterArr = arrObj.filter(user => user[1] >= 18);

    const userNames = filterArr.map(user => user[0]);

    return userNames;
}

const names = {'John Doe' : 19, 'Tom' : 17, 'Bob' : 18};
console.log(getAdults(names));