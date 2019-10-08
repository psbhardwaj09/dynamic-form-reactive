import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';

import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field.directive';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFormComponent, 
    FormButtonComponent,
    DynamicFieldDirective,
    FormInputComponent,
    FormSelectComponent],
    
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ],

  exports:[DynamicFormComponent]
})
export class DynamicFormModule { }