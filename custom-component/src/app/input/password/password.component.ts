import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  @Input('name') labelName: string;
  
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.name = this.labelName; 
  }


}
