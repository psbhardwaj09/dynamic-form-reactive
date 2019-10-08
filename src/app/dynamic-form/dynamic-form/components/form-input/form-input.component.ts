import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.css'],
  template: `
  <div [formGroup]="group">
    <div class="dynamic-field form-input" 
          [formArrayName]='config.formArrayName'>
      <label style="width: 150px; display: inline-block;">{{ config.label }}</label>
      <input
        type="text"
        value = 'Pardeep'
        [attr.placeholder]="config.placeholder"
        formControlName="{{config.controlName}}" /> 
    </div>
      </div>
  `,
})
export class FormInputComponent {
  config;
  group: FormGroup;
  controlName;
  fromarray;

  ngOnInit(){
    console.log('TextBox Config: ', this.config);
    // console.log(' Text Config: ', this.config);
    // console.log(' Text Group: ', this.group);
  }
}