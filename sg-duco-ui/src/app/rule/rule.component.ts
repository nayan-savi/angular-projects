import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  form: FormGroup;

  @Input() srcheaders: string[];
  @Input() destheaders: string[];
  actions: string[];
  isHidden = false;
  constructor(private fb: FormBuilder) { 
    this.actions = [">","<","="];
  }

  ngOnInit() {
    this.form = this.fb.group({
      ruleColumns: this.fb.array([])
    });
  }

  initColums(): FormGroup {
    return this.fb.group({
      srcColumn: ['', Validators.required],
      destColumn: ['', Validators.required],
      action: ['', Validators.required]
    });
  }

  addNewColumn(): void {
    this.isHidden = true;
    const control = <FormArray>this.form.controls.ruleColumns;
    control.push(this.initColums());
  }

  removeColumn(index: number): void {
    const control = <FormArray>this.form.controls.ruleColumns;
    control.removeAt(index);
  }

  manage(val: any): void {
    console.dir(val);
  }

}
