function comparador(num1, num2) {
    if (!num1 || !num2) return "Insira dois números!";

    const conferir = checkout(num1, num2);
    const comparar = compare (num1, num2);

    console.log(`Os números ${num1} e ${num2} ${conferir} iguais. ${comparar}`); 
}

function checkout(num1, num2) {
    if (num1 === num2) {
        return "são"
    } else {
        return "não são"
    }
}

function compare(num1, num2) {
    let result = num1 + num2;
    let checkout10 = "menor";
    let checkout20 = "menor";

    (result > 10) ? checkout10 = "maior" : "";

    (result > 20) ? checkout20 = "maior" : "";

    return `Sua soma é ${result}, que é ${checkout10} que 10 e ${checkout20} que 20.`;
}

console.log(comparador(10,10))

