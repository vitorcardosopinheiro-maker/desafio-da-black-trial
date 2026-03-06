let Heroi = ["Grimm", 20000] 
let xp = (Heroi[1])
let Nivel = ("")

if (xp < 1000){
 Nivel = ("Ferro")
}else if (xp > 1001 && xp < 2000){
    Nivel = ("Bronze")
}else if (xp > 2001 && xp < 5000){
    Nivel = ("Prata")
}else if (xp > 5001 && xp < 7000){
    Nivel = ("Ouro")
}else if (xp > 7001 && xp < 8000){
    Nivel = ("Platina")
}else if (xp > 8001 && xp < 9000){
    Nivel = ("Ascendente")
}else if (xp > 9001 && xp < 10000){
    Nivel = ("Imortal")
}else if (xp => 10001){
    Nivel = ("Radiante")
}

console.log("O nome do Herói é " + Heroi[0] + " e ele é de nível " + Nivel)