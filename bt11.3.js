// Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
let styles = ["Jazz", "Blues"];

// a.Thêm phần tử “Rock - n - Roll” vào cuối mảng
styles.push("Rock - n - Roll");
console.log(styles);

// b.Thay thế phần tử nằm chính giữa mảng bằng “Classics”
// nếu mảng có tổng số phần tử là lẻ
if (styles.length % 2 !== 0) {
    styles[Math.floor(styles.length / 2)] = "Classics";
}

// c.Xóa phần tử đầu tiên của mảng và hiển thị mảng
styles.shift();
console.log(styles);

// d.Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
styles.unshift("Rap");
styles.unshift("Reggae");
console.log(styles);