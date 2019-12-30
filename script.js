// Завдання 1.
// Реалізуйте клас Worker(Працівник), який буде мати
// такі властивості: firstName(ім'я),
// secondName (прізвище),rate(ставка за день роботи),
//days(кількість відпрацьованих днів). Також клас 
//повинен метод getSalary(), 
// який буде виводити зарплату працівника. 
//Зарплата - це множення ставки rate на кількість 
//відпрацьованих днів days.
// Ось так повинен працювати наш клас:
// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 10
// console.log(worker.days); //виведе 31
// console.log(worker.getSalary()); //виведе 310 - тобто 10*31
// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат.



// class Worker {
//     constructor(name,sname, rate,days) {
//         this.firstName = name;
//         this.secondName = sname;
//         this.rate = rate;
//         this.days = days;
//     };
//     getSalary(){
//        return this.rate*this.days;
//     }
// };
// const worker1 = new Worker('Taras','Tarasiv','20', '30');
// const worker2 = new Worker('Stepan','Stepankiv','25', '25');
// console.log(worker1.firstName);
// console.log(worker1.secondName);
// console.log(worker1.rate);
// console.log(worker1.days);
// console.log(worker1.getSalary());

// console.log(worker2.firstName);
// console.log(worker2.secondName);
// console.log(worker2.rate);
// console.log(worker2.days);
// console.log(worker2.getSalary());




// Завдання 2.
// Реалізуйте клас MyString, який матиме наступні методи:
//  метод reverse(), який параметром приймає рядок,
//   а повертає її в перевернутому вигляді,
//    метод ucFirst(), який параметром приймає рядок,
//     а повертає цю ж рядок, зробивши її першу букву
//      заголовної та метод ucWords(), який приймає рядок 
//      і робить капіталізації першої літери кожного 
//      слова цього рядка.
// Наш клас повинен працювати так:
// const str = new MyString();
// console.log(str.reverse('IVAN')); //виведе 'NAVI'
// console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
// console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'




class MyString {
    constructor() {};
    reverse(text) {
        let reverseString = text.split('').reverse().join('');
        return reverseString;

    };
    ucFirst(text) {
        let ucFirstWord = text.charAt(0).toUpperCase() + text.slice(1);
        return ucFirstWord;
    };

    ucWords(text) {
        let ucFirstWords = text.split(' ');
        let whole;
        let item = '';
        ucFirstWords.forEach(function (element) {
            whole = element.charAt(0).toUpperCase() + element.slice(1);
            item += whole + ' ';
        });
        return item;
    }
}
const str = new MyString();

console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));