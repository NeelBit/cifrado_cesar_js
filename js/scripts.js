(function() {
    'use strict';

    // esperar que todo el codigo html primero termine de cargarse
    document.addEventListener('DOMContentLoaded', function() {

        const btnLimpiarCifrar = document.querySelector(".izquierda__btn-limpiar-cifrar");
        const btnLimpiarDescifrar = document.querySelector(".izquierda__btn-limpiar-descifrar");
        const btnCifrar = document.querySelector(".izquierda__btn-cifrar")
        const btnDescifrar = document.querySelector(".izquierda__btn-descifrar");
        const textoaCifrar = document.querySelector(".texto-para-cifrar");
        const textoaDescifrar = document.querySelector(".texto-para-descifrar");
        const clave = document.querySelector(".derecha__clave");

        /* const btnPegarCifrar = document.querySelector(".izquierda__btn-pegar-cifrar");
        const btnPegarDescifrar = document.querySelector(".izquierda__btn-pegar-descifrar"); */


        /* botones cifrado / descifrado */
        btnCifrar.addEventListener("click", () => {
            //console.log(textoaCifrar.value);
            //const textoPuro = textoaCifrar.value.toLowerCase();
            //console.log(textoPuro);

            //const key = clave.value;

            textoaDescifrar.innerHTML = cesar(textoaCifrar.value, true);
            textoaDescifrar.value = cesar(textoaCifrar.value, true);
        });

        btnDescifrar.addEventListener("click", () => {
            textoaCifrar.innerHTML = cesar(textoaDescifrar.value, false);
            textoaCifrar.value = cesar(textoaDescifrar.value, false);
        });

        /* botones limpiar */
        btnLimpiarCifrar.addEventListener("click", () => {
            textoaCifrar.value = "";
            textoaCifrar.innerHTML = "";
        })

        btnLimpiarDescifrar.addEventListener("click", () => {
            textoaDescifrar.value = "";
            textoaDescifrar.innerHTML = "";
        })

        /* funcion principal */
        function cesar(str, cifrar) {

            let key = +clave.value;
            //console.log("key vale: " + key);

            str = str.toLowerCase();

            let signo = "";

            // booleano que indica si se va a cifrar o descifrar
            if (cifrar) {
                signo = "+";
            } else {
                signo = "-";
            }

            const abc = [' ', ',', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                ' ', ',', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
            ];

            const textCifrado = [];

            // recorro string
            for (let i = 0; i < str.length; i++) {

                let nuevoIndex = +abc.indexOf(str[i]) + key;

                if (signo == "+") {
                    +signo;
                    nuevoIndex = +abc.indexOf(str[i]) + key;
                    //console.log("+");
                }

                if (signo == "-") {
                    +signo;
                    nuevoIndex = +abc.lastIndexOf(str[i]) - key;
                    //console.log("-");
                }
                //console.log("nuevo index: " + nuevoIndex);
                const nuevoValor = abc[nuevoIndex];
                //console.log("nuevo valor: " + nuevoValor);

                textCifrado.push(nuevoValor);
            }

            //console.log(`textCifrado desde su metodo: ${textCifrado.join("")}`);
            return textCifrado.join("");
        }

        /* window.addEventListener("load", () => {

        }); */

    });


})();