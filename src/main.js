let ans;
ans = prompt("Введите ваше имя");
alert("Привет - " + ans );

const age = 2024
let x;
x = prompt("Введите свой год рождения:");
x = Number(x);
alert("Ваш возраст" + (age - x))

let x;
x = prompt("Введите длину стороны квадрата:");
x = Number(x);
let P;
P = 4 * x;
alert("Периметр квадрата: " + P);

const P = 3.14
let r;
r = prompt("Введите значения радиуса")
r = Number(r)
let S;
S = P * (r **2)
alert("Радиус равен" + S)

let s;
s = prompt("Введите расстояние между городами");
s = Number(s);
let t;
t = prompt("Введите время, за которое вы хотите доехать");
t = Number(t);
let V;
V = s / t;
alert("Ваше время составит" + V)

const E = 0.9
let S;
S = prompt("Введите количество долларов")
S = Number(S) 
let V;
V = S * E
alert("В евро" + V)

let x;
x = prompt("Укажите объем флешкарты в ГБ");
x = Number(x);
let N;
N = (x * 1024) / 820;
alert("Количество файлов в размере 820мб" + N)


let x = Number(prompt("Сколько денег у вас есть"));
let y = Number(prompt("Сколько стоит одна шоколадка"));
let A = (x /y) - (x/y)%1;
let B = x - (A * y)
alert("Количесво шоколадок вы купите" + A);
alert("Сколько останется у вас денег" + B);

let x = Number(prompt("Введите трехзначное число:"));
let a = Number(x % 10);
let b = Number((x - a) / 10 % 10);
let c = Number((x - a - b * 10) / 100);
alert("Число наоборот:" + (a * 100 + b * 10 + c));

let x = Number(prompt("Введите любое целое число:"));
alert((parseInt(x) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ")




