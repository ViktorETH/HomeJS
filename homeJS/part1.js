//1.
function hypotenuse(a, b) {
    if (isNaN(a || b) || (a && b) <= 0)
    {
        console.log("Некоректные данные");
    } else {
        var c = Math.sqrt(a*a + b*b);
        console.log(c);
    }
}
hypotenuse("3", '4');

//2.
function evenNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            continue;
        }
        console.log(i);
    }
}
evenNumbers(10);

//3.
function allSimple(n) {
    simple:
        for (var i = 2; i <= n; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) continue simple;
            }
            console.log( i ); // простое
        }
}
allSimple(10);

//4.
function oneSimple(n) {
    if ((n % 2 == 0) && (n != 2))                  console.log('false');
    else if (n == 2)
        console.log('true');
    else {
        var k = Math.round(Math.sqrt(n));
        console.log(k);
        var prime = false;
        for(var i = 2; i < k+1; i++)
            if(n % i == 0)
            {
                console.log('false');
                prime = true;
                break;
            }
        if (prime == false)
            console.log('true');
    }
}
oneSimple(15);

//5.
var user = {
    isAdmin: false,
    grant: function() {
        this.age >= 18 ? this.isAdmin = true : this.isAdmin = false;
    }
}
user.age = 18;
user.grant();
console.log(user.isAdmin);

user.age = 12;
user.grant();
console.log(user.isAdmin);

//6.
var str = "Some time ago I was here";
var result = str
    .replace("Some time ago", "Yesterday")
    .concat(" and there");
console.log(result);

var num = "10, 20, 30, 40";
var newNum = num
    .replace(",", ";");
console.log(newNum);

//7.
var nums, nums2;
nums = [6, 4, 9, 3, 5, 2];
nums2 = nums.slice(0);
function foo(a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
}
nums2.sort(foo);
console.log(nums);
console.log(nums2);

//8.
var str2 = "list-style-image";
function toCamelCase(str2) {
    var arr = str2.split('-');
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
console.log(toCamelCase(str2));

//9.
var str = "menu top green";
function addClass(str, param1)
{
    arguments.slice = [].slice;
    var joined = arguments.slice(1);
    var arr = str.split(' ').concat(joined);
    str = arr.join(' ');
    return str;
}
var newStr = addClass(str, "new", "hello");
console.log(newStr);

//10.
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandom(100, 90));

//11.
var color = "#ff00FF";
function toRGB(str) {
    var a = str
        .slice(1, 7)
        .match(/.{2}/gi)
        .map(function (value) {
            return parseInt(value, 16)
        });
    return a;
}
console.log(toRGB(color));

//12.
var names = [];
var total = 0;
var sorted = [];
var users = [
    { name: "Alex", cash: 43 },
    { name: "John", cash: 274 },
    { name: "Carl", cash: 82 },
    { name: "Bill", cash: 14 }
];

function getNames(users) {
    for(var i = 0; i < users.length; i++){
        names.push(users[i]['name']);
    }
    console.log(names);
}
getNames(users);

function getTotal(users) {
    for(var i = 0; i < users.length; i++){
        total += Number(users[i]['cash']);
    }
    console.log(total)
}
getTotal(users);

function sortedByCash(users) {
    function foo(obj1, obj2) {
        return obj1.cash - obj2.cash;
    }
    for(var i = 0; i < users.length; i++){
        sorted.push(users[i]);
    }
    sorted.sort(foo);
    console.log(sorted);
}
sortedByCash(users);

function sortedByName(users) {
    function foo(obj1, obj2) {
        if (obj1.name < obj2.name) return -1;
        if (obj1.name > obj2.name) return 1;
    }
    users.sort(foo);
    console.log(users);
}
sortedByName(users);

