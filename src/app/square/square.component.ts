import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-square',
  template: `    
    <button style="width: 100%;
                   height: 100%;
                   font-size: 6rem;
                   background-color: 'blue';
                   color: 'white' "
            #btn
            *ngIf="value == 'X'">
                   {{value}}</button>   
    <button style="width: 100%;
                   height: 100%;
                   font-size: 6rem;
                   background-color: 'red';
                   color: 'white' "
            #btn
            *ngIf="value == 'O'">
                   {{value}}</button>   
  `,
  styles: [
      
  ]
})
export class SquareComponent{

  @Input() value: 'X' | 'O' ;

  // setColor(value){
  //   alert(value)
  //   if(value == 'X'){
  //     alert('x');
  //     document.getElementById('btn').style.backgroundColor="#0000FF"
  //   }
  //   else if(value == 'O'){
  //     alert('o');
  //     document.getElementById('btn').style.backgroundColor="#00008B"
  //   }
  // }


 

}
