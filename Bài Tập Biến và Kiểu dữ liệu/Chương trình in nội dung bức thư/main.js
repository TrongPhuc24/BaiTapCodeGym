function xyLy(){
    let nguoiNhan = document.getElementById("nguoiNhan").value;
    let diaDiem = document.getElementById("address").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
   
    if(day >31 || day <1){
        alert('nhap sai ngay vui long nhap lai');
        day = prompt("nhap ngay:");
    }
    if(month >12 || month <1){
        alert('nhap sai thang vui long nhap lai');
        month = prompt("nhap thang:");
    }
    document.getElementById("ketQua").innerHTML = nguoiNhan + 'thương nhớ,<br> Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn. <br>' + 'Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào. <br>' + 'Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.<br>' + diaDiem + ', ngày' + day + 'tháng' + month + 'năm' + year +'.'
}