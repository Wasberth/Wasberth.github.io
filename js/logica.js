let abc = "abcdefghijklmnñopqrstuvwxyz";

let c = (function () {
    let cesar = (function (txt, desp, action) {
        let code = (function (car, desp, action) {
            if (action) {
                console.log(abc.indexOf(car) + desp)
                let i = (abc.indexOf(car) + desp) >= abc.length ?
                    abc.indexOf(car) + desp - abc.length :
                    abc.indexOf(car) + desp;
                return (abc.charAt(i));
            } else {
                let i = (abc.indexOf(car) - desp) < 0 ?
                    abc.length + abc.indexOf(car) - desp :
                    abc.indexOf(car) - desp;
                return abc.charAt(i);
            }
        });

        return (function (txt, desp, action) {
            console.log(txt);
            let codedtxt = "";
            for (let i = 0; i < txt.length; i++) {
                codedtxt = codedtxt + code(txt.charAt(i), desp, action);
            }
            return codedtxt;
        })(txt, desp, action);
    });

    return {
        encode: function (txt, desp) {
            desp = (desp % 27) - 1;
            console.log(desp)
            return cesar(txt, desp, true);
        },
        decode: function (txt, desp) {
            desp = (desp % 27) - 1;
            return cesar(txt, desp, false);
        }
    }

})();

function codificar() {
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = c.encode(
        String(document.getElementById("cadena").value).toLowerCase(), parseInt(document.getElementById("skip").value));

}

function decodificar() {
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = c.decode(
        String(document.getElementById("cadena").value).toLowerCase(), parseInt(document.getElementById("skip").value));

}
