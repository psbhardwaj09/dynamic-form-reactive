import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  formOutput;

   formData = [
     {
      groupName: 'Personal',
      name: 'group1',
      controls: [
            {
              type: 'input',
              label: 'First Name',
              name: 'fname',
              placeholder: 'Enter your first name',
            },
      ]
     },
     {
      groupName: 'Address',
      name: 'group2',
      controls: [
            {
              type: 'input',
              label: 'Address 1',
              name: 'addr1',
              placeholder: 'Enter addr 1',
            },
            {
              type: 'select',
              label: 'State',
              name: 'addr2',
              options: ['HR', 'DL', 'KA', 'TN'],
              placeholder: 'Select an State',
            },
             {
              type: 'input',
              label: 'Address 3',
              name: 'addr13',
              placeholder: 'Enter addr2',
            }
      ]
     },
     {
      groupName: 'Education',
      name: 'educations',
      controls: [
            {
              type: 'input',
              label: 'Education Name',
              name: 'eduName',
              placeholder: 'Enter your education name'
            },
            {
              type: 'input',
              label: 'Passing Year',
              name: 'pyear',
              placeholder: 'Enter passing year',
            }
      ]
     },
   ];

  formSubmitted(value) {
    console.log(value);

    this.formOutput = {}
    this.formData.forEach((group, groupIdx) =>{
      group.controls.forEach((field, fieldIdx) =>  this.formOutput[field.name] = value[group.name][fieldIdx]);
    });
  console.log('Output: ',  this.formOutput);
  }
}
