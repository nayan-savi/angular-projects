import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input('name') labelName: string;
  
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.name = this.labelName; 
  }

}
