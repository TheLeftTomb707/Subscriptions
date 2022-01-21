function Plan(name,price,space,transfer,pages,discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual=function(percentIfDisc) {
        var bestPrice = this.price;
        console.log("Price" + bestPrice);
        var currDate = new Date();
        console.log("Current Date " +currDate);
        var thisMo = currDate.getMonth();
        console.log("This Month " +thisMo);
        for (var i = 0; i < this.discountMonths.length; i++) {
        console.log(this.discountMonths.length);
        if (this.discountMonths[i] === thisMo) {
            bestPrice = this.price * percentIfDisc;
            console.log("Price after discount" +bestPrice);
            break;
            };       
        };
        return (bestPrice * 12).toFixed(2);
                   
    };
};

var p1 = new Plan("basic", 3.99, 100, 1000, 10, [0, 7]);
var p2 = new Plan("professional", 5.99, 500, 5000, 50, [0, 7, 11]);
var p3 = new Plan("ultimate", 9.99, 2000, 20000, 500, [0, 7]);
var annualPrice1 = p1.calcAnnual(.80);
var annualPrice2 = p2.calcAnnual(.80);
var annualPrice3 = p3.calcAnnual(.80);
console.log(annualPrice1, annualPrice2, annualPrice3);
function plan1() {
    if (document.getElementById('name1').innerHTML == "") {
        document.getElementById('p1after').style.display = "grid";
        document.getElementById('plan1').style.border = "black solid 2px";
        document.getElementById('plan1').style.backgroundColor = "rgba(165, 4, 4, 0.685)";
        document.getElementById("name1").innerHTML = p1.name;
        document.getElementById("price1").innerHTML = p1.price;
        document.getElementById("space1").innerHTML = p1.space;
        document.getElementById("transfer1").innerHTML = p1.transfer;
        document.getElementById("pages1").innerHTML = p1.pages;
        document.getElementById("discount1").innerHTML = p1.discountMonths;
    }
    else if (document.getElementById('name1').innerHTML == p1.name) {
        document.getElementById('p1after').style.display = "none";
        document.getElementById('plan1').style.border = "";
        document.getElementById('plan1').style.backgroundColor = "";
        document.getElementById("name1").innerHTML = "";
        document.getElementById("price1").innerHTML = "";
        document.getElementById("space1").innerHTML = "";
        document.getElementById("transfer1").innerHTML = "";
        document.getElementById("pages1").innerHTML = "";
        document.getElementById("discount1").innerHTML = "";
    }
    else {
        alert("error")
    }
}
function plan2() {
    if (document.getElementById('name2').innerHTML == "") {
        document.getElementById('p2after').style.display = "grid";
        document.getElementById('plan2').style.border = "black solid 2px";
        document.getElementById('plan2').style.backgroundColor = "rgba(179, 119, 10, 0.705)";
        document.getElementById("name2").innerHTML = p2.name;
        document.getElementById("price2").innerHTML = p2.price;
        document.getElementById("space2").innerHTML = p2.space;
        document.getElementById("transfer2").innerHTML = p2.transfer;
        document.getElementById("pages2").innerHTML = p2.pages;
        document.getElementById("discount2").innerHTML = p2.discountMonths;
    }
    else if (document.getElementById('name2').innerHTML == p2.name) {
        document.getElementById('p2after').style.display = "none";
        document.getElementById('plan2').style.border = "";
        document.getElementById('plan2').style.backgroundColor = "";
        document.getElementById("name2").innerHTML = "";
        document.getElementById("price2").innerHTML = "";
        document.getElementById("space2").innerHTML = "";
        document.getElementById("transfer2").innerHTML = "";
        document.getElementById("pages2").innerHTML ="";
        document.getElementById("discount2").innerHTML = "";
    }
}
function plan3() {
    if (document.getElementById('name3').innerHTML == "") {
        document.getElementById('p3after').style.display = "grid";
        document.getElementById('plan3').style.border = "black solid 2px";
        document.getElementById('plan3').style.backgroundColor = "rgba(182, 12, 182, 0.623)";
        document.getElementById("name3").innerHTML = p3.name;
        document.getElementById("price3").innerHTML = p3.price;
        document.getElementById("space3").innerHTML = p3.space;
        document.getElementById("transfer3").innerHTML = p3.transfer;
        document.getElementById("pages3").innerHTML = p3.pages;
        document.getElementById("discount3").innerHTML = p3.discountMonths;
    }
    else if (document.getElementById('name3').innerHTML == p3.name) {
        document.getElementById('p3after').style.display = "none";
        document.getElementById('plan3').style.border = "";
        document.getElementById('plan3').style.backgroundColor = "";
        document.getElementById("name3").innerHTML = "";
        document.getElementById("price3").innerHTML = "";
        document.getElementById("space3").innerHTML = "";
        document.getElementById("transfer3").innerHTML = "";
        document.getElementById("pages3").innerHTML = "";
        document.getElementById("discount3").innerHTML = "";
    }
}
function signup(a) {
    document.getElementById('signupform').style.display = "block";
    choose = document.getElementById('choose');
    console.log(choose);
    if (a == 0) {
        choose.value = 'basic';
    }
    if (a == 1) {
        choose.value = 'pro';
    }
    if (a == 2) {
        choose.value = 'ulti';
    }
}
function submit_form() {
    if (choose.value == 'basic') {
        document.getElementById('bestvalue').innerHTML = 'Your best price is $' + annualPrice1 + '.';
    }
    if (choose.value == 'pro') {
        document.getElementById('bestvalue').innerHTML = 'Your best price is $' + annualPrice2 + '.';
    }
    if (choose.value == 'ulti') {
        document.getElementById('bestvalue').innerHTML = 'Your best price is $' + annualPrice3 + '.';
    }
}
function closeform() {
    document.getElementById('signupform').style.display = 'none';
}
/*class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first, 
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    greetings() {
        console.log(`Hi, I'm ${this.name.first}`);
    }
    farwell() {
        console.log(`${this.name.first} has left the building. bye`);
    }
}
let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
han.greetings();
let leia = new Person("Leia", "Organa", 19, "female", ["Government official"]);
leia.farwell();
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests)
        this.subject = subject;
        this.grade = grade;
    }
}
let snape = new Teacher('severus', 'snape', 58, 'male', ['potions'], 'Dark arts', 5);
snape.greetings();
snape.farwell();
snape.age;
snape.subject;
console.log(snape.subject);

snape.subject = "Balloon animals";

console.log(snape.subject);

class Members {
    constructor(name, age, phone, salary) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.salary = salary;
    }
    printSalary() {
        console.log(this.salary)
    }
}
class Employee extends Members {
    constructor(name, age, phone, salary, specialization, department) {
        super(name, age, phone, salary);
        this.specialization = specialization;
        this.department = department;
    }
    displayEmployee() {
        console.log(`${this.specialization}`);
        console.log(`${this.department}`);
    }
}
let john = new Members('john', 23, "707-231-4829", "$100,000");
console.log(john.name);
john.printSalary();

let lia = new Employee('lia', 26, '707-643-2691', '$90,000', 'coding', 'web development');
console.log(lia.phone);
lia.displayEmployee();*/