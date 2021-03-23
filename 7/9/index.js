
export const withdraw = (clients, balances, client, amount) => {
    let money = balances[clients.indexOf(client)];
    if(money < amount){
        return -1;
    }
    else {
        return balances = money - amount;
    }

}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

