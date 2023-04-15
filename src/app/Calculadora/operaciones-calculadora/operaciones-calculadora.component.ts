import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones-calculadora',
  templateUrl: './operaciones-calculadora.component.html',
  styleUrls: ['./operaciones-calculadora.component.css']
})
export class OperacionesCalculadoraComponent {

 operacion = 'Operaciones Matematicas';


 // declaraciones de variables
    numero1:           number = 0;
    numero2:           number = 0;
    resultado:         number = 0;
    habilitarNumeros = 'false'

  
/* // declaracion de propiedad Binding
   habilitarNumeros = "false";   */



// metodo para habilitar propiedad Binding
   habilitarCuadroNumeros(){

    this.habilitarNumeros = "false";  
     
   }   



   sumaNumeros():number{

   this.resultado = this.numero1 + this.numero2;

   return this.resultado

   }



  restaNumeros():number{
   
    this.resultado = this.numero1 - this.numero2;

    return this.resultado
    
  } 



  multiplicacionNumeros():number{

    this.resultado = this.numero1 * this.numero2;

    return this.resultado

  }




  datoNumero1(event:Event){



  }


  datoNumero2(){



  }




  llamarNumero1(value:number){



  }



  llamarNumero2(value:number){



  }
  


  


    



}
