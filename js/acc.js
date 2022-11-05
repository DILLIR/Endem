function add(){
    let acc__value = document.querySelectorAll(".acc__value");
    let balance = document.querySelector(".acc__balance");

    balance.innerHTML = acc.data.balance + " ET";

    console.log(acc);
    
    for (let index = 0; index < acc__value.length; index++) {
        const element = acc__value[index];
        let user =  acc;
        switch(index){
            case 0:
                element.innerHTML = user.data.name;
                break;
            case 1:
                element.innerHTML = user.data.birth;
                break;
            case 2:
                element.innerHTML = user.data.email;
                break;
            case 3:
                element.innerHTML = user.data.place;
                break;
            case 4:
                element.innerHTML = user.data.isic;
                break;
            case 5:
                element.innerHTML = user.data.phone;
                break;

        }
    }
}


let Timeout = setTimeout(add, 1000);