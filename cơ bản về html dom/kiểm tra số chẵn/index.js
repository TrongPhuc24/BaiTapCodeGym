function check(){
    let number = document.getElementById(number);
    if(number %2 === 0){
        document.getElementById("ketQua").innerHTML = number + "là số chẵn";
    } else
    {
        document.getElementById("ketQua").innerHTML = `${number} là một số lẻ`;

    }
}