// 1

function inXinChao() {
    console.log("Xin chao RA");
}
inXinChao()

// 2
function tinhBinhPhuong(number) {
    return Math.pow(number, 2)
}
console.log(tinhBinhPhuong(4));
console.log(tinhBinhPhuong(8));
console.log(tinhBinhPhuong(0));

// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ
// thứ nhất tính từ năm 1 đến 100

let nam = Number(prompt("Nhap nam"))

if (nam % 100 === 0) {
    console.log(`Nam ${nam} thuoc the ky ${nam / 100}`);
} else {
    console.log(`Nam ${nam} thuoc the ky ${Math.ceil(nam / 100)}`);
}

// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// tiên và thêm vào dấu “…” ở cuối chuỗi

let chuoi = prompt("Nhap chuoi")

function inChuoi(chuoi) {
    if (chuoi.length < 15) {
        console.log(chuoi);
    } else {
        // hàm slice áp dụng cho chuỗi, slice có chức năng cắt chuỗi từ vị trí nào và muốn cắt bao nhiêu
        // VD: let chuoi = "mot chuoi rat la dai"
        // VD: chuoi.slice(0, 15): cắt từ vị trí 0 và cắt 15 phần tử ==> "mot chuoi rat l"
        // VD: chuoi.slice(5, 2): cắt từ vị trí 5 và cắt 2 phần tử ==> "uo"
        chuoi = chuoi.slice(0, 15)
        console.log(chuoi + "...");
    }
}
inChuoi(chuoi)

// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. 
//Ví dụ:“rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// xin chao cac ban => Xin Chao Cac Ban

let chuoi = prompt("Nhap chuoi can chuan hoa")
function chuanHoa(chuoi) {
    let chuoiRong = ""
    for (i = 0; i < chuoi.length; i++) {
        if (i == 0) {
            chuoiRong += chuoi[i].toUpperCase()
        } else if (chuoi[i] == " " && chuoi[i + 1] != " ") {
            chuoiRong += " "
            chuoiRong += chuoi[++i].toUpperCase()
            i++;
        } else {
            chuoiRong += chuoi[i].toLowerCase()
        }
    }
    return chuoiRong
}
const value = chuanHoa(chuoi)
console.log(value);

// 6. Viết function trả ra giá trị lớn nhất trong một mảng số

let arr = [3, 6, 9, 34, 67, 45]
console.log(Math.max(...arr));