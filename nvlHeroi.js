var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var xp = 4680

if (xp < 1000) {
    nvl = "Ferro"
} else if (xp > 1001 && xp <= 2000) {
    nvl = "Bronze"
} else if (xp > 2001 && xp <= 5000) {
    nvl = "Prata"
} else if (xp > 6001 && xp <= 7000) {
    nvl = "Ouro"
} else if (xp > 7001 && xp <= 8000) {
    nvl = "Platina"
} else if (xp > 8001 && xp <= 9000) {
    nvl = "Ascendente"
} else if (xp > 9001 && xp <= 10000) {
    nvl = "Imortal"
} else {
    nvl = "Radiante"
}

leitor.question("Qual o nome do herói? ", function(answer) {
    var nome = answer;
    console.log(`O Herói de nome ${nome} está no nível: ${nvl}`);
    leitor.close();
});