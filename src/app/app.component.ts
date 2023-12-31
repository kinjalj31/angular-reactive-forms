import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup; // this is properies we setting so that we can hold our forms
  forbiddenUsernames = ['chrish', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([ new FormControl('Chrish'), new FormControl('Anna')])
    });
  }
  onSubmit(){
    console.log(this.signupForm);
   
  }
  onAddHobby(){
    const control = new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }


  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) != -1){
      return {'nameIsForbidden': true};
    }
    
    }
}
