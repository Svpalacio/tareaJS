function piramide(num) {
    let texto = "";
    for (i = 1; i <= num; i = i + 1) {
        for (j = 1; j <= i; j = j + 1) {
            texto = texto + String(j);
        }
        console.log(texto);
        texto = "";
    }
}

let num=6;
piramide(num);

//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
//para valor 6
//1
//12
//123
//1234
//12356

//para valor 3
//1
//12
//123
