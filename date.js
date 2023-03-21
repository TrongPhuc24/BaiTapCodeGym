let year = prompt('nhap năm:');
let month = prompt('nhập tháng:');
if(month>12 || month==0){
    alert('nhập sai tháng vui lòng nhập lại!!!');
    month = prompt('nhập tháng:');
}

let days= prompt("nhập ngày:");
if(days>31 || month==0){
    alert('nhập sai ngày vui lòng nhập lại!!!');
    days= prompt("nhập ngày:");
}
alert(days + '-' + month + '-' +year);