import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  constructor(private fb : FormBuilder,private authService : AuthService, private router : Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      organizationUrl: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.value.email !== "hiren@prishusoft.com" && this.loginForm.value.password !== "Hello@123$") {
      alert('given crediantial is wrong!');
      return;
    }

    const { email, password, organizationUrl } = this.loginForm.value;

    this.authService.login(email, password, organizationUrl).subscribe(
      (response) => {
      //  if(response.success){
        console.log(response.token);
        this.authService.saveToken(response.token);
        this.router.navigate(['/organization-list']);
      //  }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }


  getloginFormControls(){
    return this.loginForm.controls;
  }

}
