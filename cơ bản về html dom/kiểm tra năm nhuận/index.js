function check(){
    let nam = document.getElementById("year").value;
    if(nam %4 === 0 && nam %100 != 0){
        document.getElementById("ketQua").innerHTML= `${nam} là năm nhuận`;
    } else if(nam %100 === 0 && nam%400 !=0){
        document.getElementById("ketQua").innerHTML=`${nam} không phải là năm nhuận`;
    } else if(nam%100 === 0 && nam %400 === 0){
        document.getElementById("ketQua").innerHTML=`${nam} là năm nhuận`;
    } else{
        document.getElementById("ketQua").innerHTML=`${nam} không phải là năm nhuận`;
    }
}