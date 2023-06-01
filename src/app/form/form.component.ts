import { Component } from '@angular/core';
import { ResponseService } from '../service/response.service';
import { Router } from '@angular/router';
import { Response } from '../model/response.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  response: Response = {
    lastName: '',
    firstName: '',
    contactNumber: '',
    age: 0,
    surveyDate: new Date(),
    pizza: 'No',
    pasta: 'No',
    papAndWors: 'No',
    chickenStirFry: 'No',
    beefStirFry: 'No',
    other: '',
    eatOut: 0,
    watchMovie: 0,
    watchTv: 0,
    listenToRadio: 0
  }

  checkboxes = [
    { label: 'Pizza', isChecked: false, variableValue: '' },
    { label: 'Pasta', isChecked: false, variableValue: '' },
    { label: 'Pap and Wors', isChecked: false, variableValue: '' },
    { label: 'Chicken stir fry', isChecked: false, variableValue: '' },
    { label: 'Beef stir fry', isChecked: false, variableValue: '' },
    { label: 'Other', isChecked: false, variableValue: '' }
  ];

  //form: FormGroup;

  constructor(private responseService : ResponseService, private router: Router, private formBuilder: FormBuilder) {
    // this.form = formBuilder.group({
    //   lastName: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   contactNumber: ['', Validators.required],
    //   age: ['', Validators.required],
    //   surveyDate: ['', Validators.required]
    // })
  }

  updateFoodVariableValue(checkbox: any) {
    checkbox.variableValue = checkbox.isChecked ? 'Yes' : 'No';

    if (checkbox.label === 'Pizza') {
      this.response.pizza = checkbox.variableValue;
    } else if (checkbox.label === 'Pasta') {
      this.response.pasta = checkbox.variableValue;
    } else if (checkbox.label === 'Pap and Wors') {
      this.response.papAndWors = checkbox.variableValue;
    } else if (checkbox.label === 'Chicken stir fry') {
      this.response.chickenStirFry = checkbox.variableValue;
    } else if (checkbox.label === 'Beef stir fry') {
      this.response.beefStirFry = checkbox.variableValue;
    } else if (checkbox.label === 'Other') {
      this.response.other = checkbox.variableValue;
    }
  }


  saveResponse() {

    this.responseService.saveResponse(this.response).subscribe({
      next : (response) => {
        this.router.navigate(['survey']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  //   if (this.form.valid) {

  //   } else {
  //     // Form is invalid, display error or prevent submission
  //     console.log('Form is invalid');
  //   }
  }

}
