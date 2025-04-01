function generateQRCode() {
    let website = document.getElementById("website").value;
    let qr_data = document.getElementById("qr_data").value;
    if (website) {
        let qrcodeContainer = document.getElementById("qrcode");
        let print_data = document.getElementById("print_data");
        let watermark = document.getElementById("watermark");

        watermark.style.display = "block";
        qrcodeContainer.innerHTML = "";
        print_data.innerHTML = qr_data;
        new QRCode(qrcodeContainer, website);

        watermark.style.display = "none";
        document.getElementById("qrcode-container").style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
}

function resetForm() {
    document.getElementById("qrForm").reset();
    let qrcodeContainer = document.getElementById("qrcode");
    let print_data = document.getElementById("print_data");

    qrcodeContainer.innerHTML = '<div class="sampleQr">Your QR will visible here</div>';
    print_data.innerHTML = 'QR CODE';

    document.getElementById("qrcode-container").style.display = "block";
}

function downloadQRCode() {
    let qrcodeContainer = document.getElementById("print_area");
    let print_data = document.getElementById("print_data").innerText;
    let watermark = document.getElementById("watermark");

    watermark.style.display = "block";

    html2canvas(qrcodeContainer).then(function (canvas) {
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = print_data + '.png';
        a.click();

        watermark.style.display = "none";
    });
}