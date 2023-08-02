// 5. Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b
// Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và b

let arrIteger = [];
let a = +prompt("Nhap vao so a:");
let b = +prompt("Nhap vao so b:");
for (i = a; i <= b; i++) {
    arrIteger.push(i);
}
console.log(`So nguyen  dau tien la ${a}`);
console.log(`So nguyen  cuoi cung la ${b}`);
console.log(arrIteger);