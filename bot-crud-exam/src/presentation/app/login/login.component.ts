import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/domain/models/user.model';
import { AppSettings } from 'src/base/app-settings';
import { UserImplementationRepository } from 'src/data/repositories/user/user-implementation.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel = {
    _id: '',
    name: '',
    lastname: '',
    username: '',
    password: '',
    status: false,
    role: [],
    email: ''
  };

  loginForm!: FormGroup;


  constructor(private loginService: UserImplementationRepository,
    private route: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  
  onSubmit() {
    if(this.loginForm.valid) {
      this.user.username = this.loginForm.value.username;
      this.user.password = this.loginForm.value.password;
      console.log(this._v());
      console.log(this.user);
      this.loginService.login(this.user).subscribe((userInfo: any)=>{
        console.log('response',userInfo);
        localStorage.setItem(AppSettings.TOKEN_KEY, userInfo.token);
        this.route.navigateByUrl('/botDetail')
      })
    }
  }


  _v() {
    return this.loginForm.value;
  }


  

 

}
