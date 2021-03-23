
export const getAdults = obj => {
    const newObj = {};
    for(let key in obj){
      
      if(obj[key] >= 18){
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };
  
  getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
  
  