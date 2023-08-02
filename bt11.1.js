// a.Nhập 5 giá trị số nguyên cho mảng từ bàn phím
let arr1 = prompt("Nhập các số nguyên cho mảng đầu tiên cách nhau bởi dấu ','");
arr1 = arr1.split(",");
let arr = [];
for (let i = 0; i < arr.length; i++) {
    arr[0].push(arr[i]);
}

// b.Hiển thị giá trị các phần tử của mảng
console.log(arr);

// c.In các phần tử có giá trị chẵn và tính tổng
let totalsum = arr.reduce((sum, value) => {
    return value % 2 == 0 ? sum + value : sum;
}, 0)
console.log(totalsum);

// d.In các phần tử có chỉ số lẻ và tính tổng
let totalsub = arr.reduce((sub, value) => {
    return value % 2 !== 0 ? sub + value : sub;
}, 0)
console.log(totalsub);

// e.In giá trị các phần tử trong mảng là số nguyên tố
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(arr.filter(isPrime));

// f.In các phần tử có giá trị là max hoặc min
function isMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function isMin() {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(isMax(arr));
console.log(isMin(arr));

// g.Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp
// xếp(có sử dụng hàm sort)
console.log(arr.sort((a, b) => b - a));



// h.Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá
// trị như vậy

let n = +prompt("Nhập vào 1 số nguyên bất kỳ");
function checkExistCharacter(arr, char) {
    let count = 0;
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == char) {
            check = true;
            count++;
        }
    }
    return (check) ? count : "không có số này";
}
console.log(checkExistCharacter(arr, n));