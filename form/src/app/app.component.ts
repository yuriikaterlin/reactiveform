import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  newForm : FormGroup | any;

  ngOnInit(): void {  
    
   this.newForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),   
    email : new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('')
    }) 

  

  }

  get firstName(): any {
    return this.newForm.get('firstName');
  }
  
  get lastName(): any {
    return this.newForm.get('lastName');
  }

  get email(): any {
    return this.newForm.get('email')
  }

  get gender(): any {
    return this.newForm.get('gender').value
  }

  getErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'You must enter email';
    }

    return this.firstName.hasError('email') ? 'Not a valid email' : '';
  }
  
  submit() {
    console.log(this.newForm.value)
  }
}
