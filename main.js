
class Person
{
    constructor(firstname,lastname,age,kms){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.kms = kms;
    }

    calcPrice(){
        let fullcost = 0.21 * this.kms;

        if (this.age < 18){
            let costMinor = fullcost /100 * 80;
            return costMinor;
        }
        else if (this.age > 65){
            let costSenior = fullcost /100 * 60;
            return costSenior;
        }
        else{
            return fullcost;
        }
    }
}

var isPlaying = true;
while (isPlaying){
    const firstname =  prompt("Plase insert your first name: ");
    const lastname =  prompt("Plase insert your last name: ");
    const age = parseInt(prompt("Please insert your age: "));
    const kms = parseFloat(prompt("How many kilometers do you want to travel?"));

    if (!isNaN(age) && !isNaN(kms)) 
    {
        const passenger1 = new Person (firstname,lastname,age,kms);
        const price = passenger1.calcPrice();
        console.log(`The price for ${firstname} ${lastname} is ${price}`);
        alert(`The price for ${firstname} ${lastname} is ${price}`);
        isPlaying = false;
    }
    else{
        alert("Please insert the correct type in input")
    }
}