function geraEquacoes(){
    if(document.querySelector("#a").value=="" || document.querySelector("#b").value=="" || document.querySelector("#r").value==""){
        geral = "Faltam valores.";
        reduzida = "Faltam valores.";
    }
    else{
        a = Number(document.querySelector("#a").value);
        b = Number(document.querySelector("#b").value);
        r = Number(document.querySelector("#r").value);
        geral = `x²+y²${(-2)*a > 0 ? "+" : ""}${(-2)*a}x${(-2)*b > 0 ? "+" : ""}${(-2)*b}y+${a**2}+${b**2}-${r**2}=0`;
        reduzida = `(x${(-1)*a > 0 ? "+" : ""}${(-1)*a})²+(y${(-1)*b > 0 ? "+" : ""}${(-1)*b})²=${r**2}`;
    }
    document.querySelector("#geral").innerHTML = geral;
    document.querySelector("#reduzida").innerHTML = reduzida;
}
function verificaPonto(){
    if(document.querySelector("#a").value=="" || document.querySelector("#b").value=="" || document.querySelector("#r").value=="" || document.querySelector("#x").value=="" || document.querySelector("#y").value==""){
        verificacao = "Faltam valores.";
    }
    else{
        a = Number(document.querySelector("#a").value);
        b = Number(document.querySelector("#b").value);
        r = Number(document.querySelector("#r").value);
        x = Number(document.querySelector("#x").value);
        y = Number(document.querySelector("#y").value);
        if(((x-a)**2)+((y-b)**2)>(r**2)){
            verificacao = "O ponto é externo a circunferência.";
        }
        else if(((x-a)**2)+((y-b)**2)==(r**2)){
            verificacao = "O ponto faz parte da circunferência.";
        }
        else{
            verificacao = "O ponto é interno a circunferencia.";
        }
    }
    document.querySelector("#verificacaoponto").innerHTML = verificacao;
}
function verificaReta(){
    if(document.querySelector("#a").value=="" || document.querySelector("#b").value=="" || document.querySelector("#r").value=="" || document.querySelector("#A").value=="" || document.querySelector("#B").value=="" || document.querySelector("#C").value==""){
        verificacao = "Faltam valores.";
    }
    else{
        a = Number(document.querySelector("#a").value);
        b = Number(document.querySelector("#b").value);
        r = Number(document.querySelector("#r").value);
        A = Number(document.querySelector("#A").value);
        B = Number(document.querySelector("#B").value);
        C = Number(document.querySelector("#C").value);
        if((Math.abs((A*a)+(B*b)+C)/Math.sqrt((A**2)+(B**2)))>r){
            verificacao = "A reta é externa a circunferência.";
        }
        else if((Math.abs((A*a)+(B*b)+C)/Math.sqrt((A**2)+(B**2)))==r){
            verificacao = "O ponto é tangente da circunferência.";
        }
        else{
            verificacao = "O ponto é secante a circunferencia.";
        }
    }
    document.querySelector("#verificacaoreta").innerHTML = verificacao;
}
