let inventoryData = "";
let isRunning = true;

do {
    console.log(`
========================================
   HỆ THỐNG QUẢN LÝ KHO THỂ HÌNH
========================================
1. Nhập chuỗi dữ liệu kiện hàng kho
2. Bóc tách và đếm tổng số lượng
3. Chuẩn hóa mã định danh
4. Xuất báo cáo kiểm kê
0. Thoát
========================================
`);

    let choice = prompt("Nhập lựa chọn:");

    switch (choice) {

        // CASE 1: NHẬP DỮ LIỆU
        case "1":
            inventoryData = prompt(
                "Nhập chuỗi kiểm kê:\nDUMBBELL:20#BARBELL:15#TREADMILL:05#MAT:40"
            );

            if (inventoryData === null || inventoryData.trim() === "") {
                inventoryData = "";
                console.log("Chuỗi dữ liệu không được để trống!");
            } else {
                console.log("Đã nhập dữ liệu thành công!");
            }
            break;

        // CASE 2: BÓC TÁCH + TÍNH TỔNG
        case "2":
            if (inventoryData === "") {
                console.log("Chưa có dữ liệu kiểm kê!");
                break;
            }

            let data = inventoryData;
            let totalQuantity = 0;
            let start = 0;

            console.log("\n--- DANH SÁCH THIẾT BỊ ---");

            while (start < data.length) {
                let end = data.indexOf("#", start);

                if (end === -1) {
                    end = data.length;
                }

                let item = data.slice(start, end);

                let colon = item.indexOf(":");

                if (colon !== -1) {
                    let equipmentName = item.slice(0, colon);
                    let quantity = Number(item.slice(colon + 1));

                    totalQuantity += quantity;

                    console.log(equipmentName + ": " + quantity);
                }

                start = end + 1;
            }

            console.log("---------------------------");
            console.log("Tổng số lượng: " + totalQuantity);
            break;

        // CASE 3: CHUẨN HÓA MÃ
        case "3":
            if (inventoryData === "") {
                console.log("Chưa có dữ liệu kiểm kê!");
                break;
            }

            inventoryData = inventoryData.replaceAll("DUMBBELL", "EQ-DB");

            console.log("Dữ liệu sau khi chuẩn hóa:");
            console.log(inventoryData);
            break;

        // CASE 4: XUẤT BÁO CÁO
        case "4":
            if (inventoryData === "") {
                console.log("Chưa có dữ liệu kiểm kê!");
                break;
            }

            let reportData = inventoryData;
            let reportStart = 0;

            console.log("\n" + "=".repeat(55));
            console.log("BÁO CÁO KIỂM KÊ KHO THỂ HÌNH");
            console.log("=".repeat(55));
            console.log("THIẾT BỊ".padEnd(20) + "SỐ LƯỢNG".padStart(10) + "  TRẠNG THÁI");
            console.log("-".repeat(55));

            while (reportStart < reportData.length) {
                let reportEnd = reportData.indexOf("#", reportStart);

                if (reportEnd === -1) {
                    reportEnd = reportData.length;
                }

                let item = reportData.slice(reportStart, reportEnd);
                let colon = item.indexOf(":");

                if (colon !== -1) {
                    let equipmentName = item.slice(0, colon);
                    let quantity = Number(item.slice(colon + 1));

                    let warning = "";

                    if (quantity < 10) {
                        warning = "[CẦN BẢO TRÌ/BỔ SUNG]";
                    } else {
                        warning = "Đủ hàng";
                    }

                    console.log(
                        equipmentName.padEnd(20) +
                        String(quantity).padStart(10) +
                        "  " +
                        warning
                    );
                }

                reportStart = reportEnd + 1;
            }

            console.log("=".repeat(55));
            break;

        // CASE 0: THOÁT
        case "0":
            isRunning = false;
            console.log("Đã thoát chương trình!");
            break;

        // LỰA CHỌN KHÔNG HỢP LỆ
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

} while (isRunning);