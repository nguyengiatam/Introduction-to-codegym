function diemtb(){
let a = prompt('Nhập điểm Vật lý của bạn');
let b = prompt('Nhập điểm Hóa học của bạn');
let c = prompt('Nhập điểm Sinh học của bạn');
a = Number(a);
b = Number(b);
c = Number(c);
let tong = a + b + c;
let tb = tong/3;
tb = tb.toFixed(2);
alert('Tổng điểm của bạn là:' + tong + '\nĐiểm trung bình của bạn là: ' + tb);
}