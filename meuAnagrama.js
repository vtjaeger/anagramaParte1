function anagrama(palavra){
    
    function fatorial(quantidadeDeLetras) {
        let resultado = 1;

        for (let contador = 1; contador <= quantidadeDeLetras; contador++) {
            resultado = resultado * contador;
        }

        return resultado;
    }

    function contaLetrasRepetidas(palavra){
        let quantidadeDeLetrasRepetidas = palavra.length;
        
        for (atual = 0; atual < quantidadeDeLetrasRepetidas; atual++){
            let analise = atual

            while(palavra[analise] === palavra[analise]){
                console.log(quantidadeDeLetrasRepetidas);
                break
            }
        }

    }

    if(typeof palavra !== "string" && !(palavra instanceof String)){
        console.error(`Digite uma palavra.`);

        return

    } else{

        let quantidadeDeLetras = palavra.length;
        console.log("Quantidade de letras ", quantidadeDeLetras);
        console.log("Possiibilidades de escrever " + palavra + " diferente é ",fatorial(quantidadeDeLetras));

    }

}

anagrama("ovo")
// ovo
// oov
// voo