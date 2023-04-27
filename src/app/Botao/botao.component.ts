import { Component} from "@angular/core";

@Component({
    selector: 'botao-root',
    templateUrl: './botao.component.html',
    styleUrls: ['./botao.component.css']
})

export class BotaoComponent {
    aaa:boolean= false;
inserir(num)
{
    
    if (this.aaa==true){
        if(num=="-" || num=="*" || num=="/" || num=="+" || num=="C" || num=="⌫"){
            this.aaa=false
        }
        else{
            this.limpar()
            this.aaa=false
        }
        
    }

    var numero = document.getElementById('resultado').innerHTML;
    
    
    document.getElementById('resultado').innerHTML +=  num;

    if(numero.length>=12){
        document.getElementById('resultado').innerHTML=numero;
    }
    
}
limpar()
{
    document.getElementById('resultado').innerHTML = "";
}
apagarUm()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado)
    {
        var calculo:number = eval(resultado);

        if(Number.isInteger(calculo)){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }else{
            document.getElementById('resultado').innerHTML = eval(resultado).toFixed(10);
        }
        
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
    
    this.aaa = true

    

}

}