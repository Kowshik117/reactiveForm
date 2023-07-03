import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private fb: FormBuilder){

   }
  // registrationForm = new FormGroup({
  //   userName: new FormControl('kowshik'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl(''),
  //       })
  // });
  // loadApiData(){
  //   this.registrationForm.patchValue({
  //     userName :'kowshik',
  //     password : '1234',
  //     confirmPassword:'1234'
  //   });

  // }
  registrationForm = this.fb.group({
    userName: ["kowshik", Validators.required],
    password:[""],
    confirmPassword:[""],
    address: this.fb.group({
      city: [''],
    state:[""],
    postalCode:['']
    })  })

}
