import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  form: FormGroup;

  countries = ['USA', 'Canada', 'Uk']
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      ruleColumns: this.fb.array([this.initColums()])
    });
  }

  initColums(): FormGroup {
    return this.fb.group({
      srcColumn: ['', Validators.required],
      destColumn: ['', Validators.required]
    });
  }

  addNewColumn(): void {
    const rules = <FormArray>this.form.controls.ruleColumns;
    rules.push(this.initColums());
  }

  removeColumn(index: number): void {
    const rules = <FormArray>this.form.controls.ruleColumns;
    rules.removeAt(index);
  }

  manage(val: any): void {
    console.dir(val);
  }

}
