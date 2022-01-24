import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  formLogin:FormGroup=new FormGroup({});
  errorSession:boolean=false;

  constructor(private _authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin=new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }

  sendLogin():void{  
    const {email, password}=this.formLogin.value;
    this._authSvc.sendCredentials(email, password).subscribe({
      next: ()=>{this.router.navigate(["/", "home"])},
      error: ()=>{this.errorSession=true}
    });
  }

} 
