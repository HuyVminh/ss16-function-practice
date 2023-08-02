// Khai báo mảng 2 chiều số nguyên arrInt
let arrInt = new Array(3);
// a.Nhập giá trị các phần tử của mảng từ bàn phím
for (let i = 0; i < 3; i++) {
    arrInt[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        arrInt[i][j] = prompt(`Nhập phần tử cho mảng`);
    }
}

// b.In giá trị các phần tử của mảng
console.log(arrInt);

// c.In giá trị các phần tử nằm trên đường biên(Coi mảng 2 chiều là ma trận)
console.log(arrInt[0]);
console.log(arrInt[1][0]);
console.log(arrInt[1][2]);
console.log(arrInt[2]);

// d.In giá trị các phần tử nằm trên đường chéo chính và phụ
// e.Sắp xếp mảng tăng dần theo dòng(không và có sử dụng hàm sort)
