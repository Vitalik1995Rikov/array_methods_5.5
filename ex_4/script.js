let arr = [5, 2, 1, -10, 8];

arr.sort(function(a, b) {
    return b - a;
});

alert( arr ); // 8, 5, 2, 1, -10


// также был и такой вариант
let arr = [5, 2, 1, -10, 8];

let a = arr.sort();
let b = a.reverse();

alert(b);
