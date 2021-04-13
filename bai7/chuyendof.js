function chuyendof(){
    let a = prompt('Nhập vào độ C');
    a = Number(a);
    let f = (a*1.8) + 3;
    f = f.toFixed(2);
    alert('Độ F là: ' + f);
}