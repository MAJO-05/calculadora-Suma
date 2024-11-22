function validarNumero(input, errorId) {
    const valor = input.value;
    const error = document.getElementById(errorId);

    if (/^[0-9]*$/.test(valor)) {
        error.innerText = ""; 
    } else {
        error.innerText = "Solo se aceptan números"; 
        input.value = valor.replace(/[^0-9]/g, ''); 
    }
}

function sumar() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("resultado").innerText = "Por favor, complete los campos.";
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa números válidos.";
        return;
    }

    const resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
