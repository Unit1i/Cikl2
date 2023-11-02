let a;
let b;
let c;
let d;
let result;
let arr;
let test;
let res;


//25.1
a = 13;
b = 5;

console.log(a%b);

//18.4
a = 10;
b = 5;
c = a-b;
d = 7;
result = c+d;
console.log(result);

//29.3
a = 'hello';
b = 'world';
console.log(a+ " "+ b);

//52.3
a = 'abcde';
let num = 2;
console.log(a[num]);

//54.3
a = 'dfhdjfhdjkfh';
console.log(a[a.length-2]);

//56.1
a = 12345;
b = String(a);
console.log(Number(b[0]) + Number(b[1]) + Number(b[2]) + Number(b[3]) + Number(b[4]));

//70.2
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr[arr.length-1]);

//71.1
arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

//74.2
arr = [1, 2, 3];
arr[3] = 4;
arr[4] = 5;
console.log(arr);

//76.1

arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

//78.1
arr = ['a', 'b', 'c', 'd', 'e'];
delete arr [2];
delete arr [4];
console.log(arr);
console.log(arr.length);

//82.1  
let user = {'name': 'Raz', 'surname' : 'Grigoryan', 'patronymic' : 'RazGrig'}
console.log(user['name'] + " " + user['surname'] + " " + user['patronymic']);
//95.1
let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj); //false
//124.1
test = 10;
if ( test ==10){
    console.log('yes');
};

//127.1
let day = 25;
if (day >0 & day<11) {
    console.log("В первой Декаде");
}else if(day>11 & day<21){
    console.log("Во второй Декаде");
}else if(day>21 & day <=31){
    console.log("В третем Декаде");
}

//137.1
arr = [1,2,3];
if(arr.length == 3){
    console.log(Number(arr[0]) + Number(arr[1]) + Number(arr[2]));
}else{
    console.log("Nothing");
}
//148.1
arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
//149.1
arr = [2, 5, 9, 15, 1, 4];
for(let elem of arr){
    if(elem > 3 && elem<10)
    console.log(elem);
}
//150.2
res = 0;

for (let i = 1; i <= 99; i++) {
	if(i%2){
        res =+ i;
    }
}
console.log(res);
//151.2
arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (let elem of arr) {
	if(elem%2 == 0 ){
        res += elem;
    }
}
console.log(res);
