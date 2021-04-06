let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted() {
    return arr.slice().sort(); // slice полностью копирует массив, sort сортирует
}

let sorted = copySorted(arr);
console.log(sorted);