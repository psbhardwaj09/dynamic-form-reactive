import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray , FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.css'],
  template: `
   <form
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="submitted.emit(form.value)">
       <div *ngFor="let group of config; let i = index" [formArrayName]='group.name'>
       {{groupName | json}}
          <div>  &nbsp;</div>
          <div>{{group.groupName}}</div>
          <hr/>
        <div >
            <ng-container *ngFor="let filter of getfiltersFormArray(group.name).controls; let j = index;" 
              dynamicField
              [config]="group.controls[j]"
              [group]="form">
          </ng-container> 
        </div>
      </div>
      <button [disabled]="!form.valid" type="submit"> Save User Profile </button>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  getfiltersFormArray(arrayname) {
    return (<FormArray>this.form.get(arrayname));
  }

  ngOnInit() {
    this.form = this.createForm();
    console.log('Form Created: ', this.form);
    this.getfiltersFormArray('group2').get('1').valueChanges.subscribe((val) =>{
      console.log('Val : '+ val);
        if(val == 'HR'){
          const control = {
              type: 'input',
              label: 'Pin Code',
              name: 'pin',
              placeholder: 'Enter pin code',
            };
          this.getfiltersFormArray('group2').insert(2, this.createControl('group2', 2, control));
          this.config[1].controls.splice(2, 0, control);
          console.log('this.form : ', this.form,  this.config[1].controls);
        }
        else if(!val  || val == ''){
          const index =  this.config[1].controls.findIndex((item) => item.name == 'pin');
          console.log('Index : '+ index, this.config[1].controls);
          if(index > -1){
            this.config[1].controls.splice(index, 1);
            this.getfiltersFormArray('group2').removeAt(index); 
          }
        }
    });
  }

  createForm() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.createFormArray(control.name, control.controls)));
    return group;
  }

  createFormArray(formArrayName, controls) {
    const group = this.fb.array([]);
    controls.forEach((control, index) => group.push(this.createControl(formArrayName,index, control)));
    return group;
  }

  createControl(arrayName, controlName, field){
    field['controlName'] = controlName;
    field['formArrayName'] = arrayName;
   return this.fb.control({value:  '', disabled: false }, Validators.required);
  // return this.fb.group({[field.name]: control});
    
  }
}