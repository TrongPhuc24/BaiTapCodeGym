function xuLyTinh() {
            let chieuCao = parseFloat(document.getElementById("chieuCao").value);
            let canNang = parseFloat(document.getElementById("canNang").value);

            let chuoi = "";
            if (!isNaN(chieuCao) && !isNaN(canNang) && (chieuCao > 0) && (canNang > 0)) {
                let bmi = canNang / (chieuCao * chieuCao);
                chuoi += `BMI = ${bmi.toFixed(2)}<br>`;

                let ketLuan = null;
                if (bmi >= 40) {
                    ketLuan = "Béo phì cấp độ III";
                } else if (bmi >= 35) {//35 <= BMI < 40
                    ketLuan = "Béo phì cấp độ II";
                } else if (bmi >= 30) {
                    ketLuan = "Béo phì cấp độ I";
                } else if (bmi >= 25) {
                    ketLuan = "Thừa cân";
                } else if (bmi >= 18.5) {
                    ketLuan = "Bình thường";
                } else if (bmi >= 17) {
                    ketLuan = "Gầy cấp độ I";
                } else if (bmi >= 16) {
                    ketLuan = "Gầy cấp độ II";
                } else {
                    ketLuan = "Gầy cấp độ III";
                }

                chuoi += ketLuan;
            } else {
                chuoi = "Nhập liệu không hợp lệ";
            }
            document.getElementById("ketQua").innerHTML = chuoi;
        }
