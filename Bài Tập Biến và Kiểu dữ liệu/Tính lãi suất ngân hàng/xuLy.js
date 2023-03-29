

function xuLyTinh(){
    let soTienVay= parseInt( document.getElementById("soTien").value)
    let soNamVay= parseInt( document.getElementById("soNam").value)
    let laiSuat = parseFloat( document.getElementById("laiSuat").value);
    let soTienTra = soTienVay + soTienVay * laiSuat / 100 * soNamVay;
    document.getElementById("ketQua").innerHTML =  ("Số tiền trả: " + soTienTra.toFixed(0));
}