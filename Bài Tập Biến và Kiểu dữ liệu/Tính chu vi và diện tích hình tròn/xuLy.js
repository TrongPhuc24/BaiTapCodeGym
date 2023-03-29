const PI = 3.14159;

function xuLyChuVi()
{
    let banKinh = parseInt(document.getElementById("banKinh1").value);
    let chuVi = 2 * banKinh * PI;
    document.getElementById("chuVi").innerHTML=chuVi.toFixed(2);
}
function xuLyDienTich(){
    let banKinh2 = parseInt(document.getElementById("banKinh2").value);
    // const PI = 3.14159;
    let dienTich= banKinh2*banKinh2 * PI;
    document.getElementById("dienTich").innerHTML=dienTich.toFixed(2);
}