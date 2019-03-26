import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportService } from '../report.service';



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
  print:any;
  constructor(private fb: FormBuilder, private http: HttpClient,
    private reportService: ReportService) {
    this.actions = [">", "<", "="];
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
    const control = <FormArray>this.form.controls.ruleColumns;
    control.push(this.initColums());
  }

  removeColumn(index: number): void {
    const control = <FormArray>this.form.controls.ruleColumns;
    control.removeAt(index);
  }

  generateReport(value: any): void {
    this.reportService.getReportService(value)
      .subscribe(res => {
        this.print = JSON.stringify(res);
        console.log(`RESULT: ===> ${res}`);
      }, err => {
        console.log(`ERROR: ===> ${err}`);
      })
  }

}
