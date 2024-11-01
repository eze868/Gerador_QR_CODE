const container = document.querySelector(".container");
const qrCodeButton = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img")


/* Gerar Qr CODE */

function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeButton.innerText = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
            qrCodeButton.innerText = "Código criado!"
    })
}

/* Evento para quando clicar no botão rodar o programa */
qrCodeButton.addEventListener("click", () => {
    generateQrCode();
})

/* Evento para quando clicar enter rodar o programa */
qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter")
        generateQrCode();
})

/* Limpar Qr CODE */

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeButton.innerText = "Gerar QR Code"
    }
})

