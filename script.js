function sim(){
    alert("Agora você é oficialmente a Mary Jane, vai teia!")
}
function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10,90);
    btn.style.left = geraPosicao(10,90);
    console.log("Inimiga do amor?");
}
function geraPosicao(min, max){
    return (Math.random() * (max-min) + min) +"%";
}