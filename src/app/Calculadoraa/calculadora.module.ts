import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalculadoraComponent } from "./calculadora.component"

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        CalculadoraComponent
    ],
    exports:[
        CalculadoraComponent
    ]
})

export class CalculadoraModule{

}