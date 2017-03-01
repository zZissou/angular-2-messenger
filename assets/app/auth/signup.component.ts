import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component ({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
  }
  
  ngOnInit() {
    this.myForm = new Formgroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
}
