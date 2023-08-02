// 4. Khai báo mảng một chiều 
// a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt
// và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”
let arrInt = [];
while (true) {
    let n = Number(prompt("Nhap mot so"));
    if (n || n == 0) {
        arrInt.push(n);
    } else {
        break
    }
}
// b. Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min (không và có sử dụng hàm Math.max và Math.min)
let sum = 0;
let max = min = arrInt[0];
for (const value of arrInt) {
    if (value > max) {
        max = value
    }
    if (value < min) {
        min = value
    }
    sum += value
}
console.log(`Mang da nhap: ${arrInt}`);
console.log(`Min: ${min}; Max: ${max}; Sum: ${sum}`);