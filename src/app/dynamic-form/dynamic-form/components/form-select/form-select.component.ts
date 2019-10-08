import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.css'],
  template: `
    <div [formGroup]="group">
    <div class="dynamic-field form-input"  [formArrayName]='config.formArrayName'>
      <label style="width: 150px; display: inline-block;">{{ config.label }}</label>
      <select formControlName="{{config.controlName}}">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
    </div>
  `,
})
export class FormSelectComponent {
  config;
  group: FormGroup;
  controlName;
  fromarray;
}