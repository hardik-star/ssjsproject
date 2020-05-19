import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import{DigitalAssetApiService} from "../../digital-asset-api.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  model: any = {};
  public loginDetails: any[];
  public tokenDetails: string;
  errorMessage: string;
  UserLogin: any;
  public loading = false;isUserInvalid = false;lbl_error:string;

  constructor(public router: Router,private formBuilder: FormBuilder,private digitalAssetApiService:DigitalAssetApiService) {}

  ngOnInit() {
    //sessionStorage.removeItem('ADM_username');
    sessionStorage.clear();
    this.UserLogin = this.formBuilder.group({
     username: ['', [Validators.required]],
     password: ['', [Validators.required]],
 });
}
onLoggedin() {
  this.loading = true;
  
  const user = this.UserLogin.value;
  this.digitalAssetApiService.Login(user).subscribe(
  data => {
  this.loginDetails = data;
  console.log(data);
  // var username = this.loginDetails.find(x => x.username).username;
  const Status = this.loginDetails.find(x => x.Status).Status;
  if (Status === '100') {
    this.loading = false;
     const username = this.loginDetails.find(x => x.username).username;
     const id = this.loginDetails.find(x => x.id).id;
    const role = this.loginDetails.find(x => x.role).role;
     localStorage.setItem('ssjs_username', username);
     localStorage.setItem('ssjs_userid', id);
    localStorage.setItem('ssjs_role_id', role);
    this.router.navigate(['Receipt',0,0]);
  } else if (Status === '101') {
    this.loading = false;
    this.isUserInvalid=true;
  }else{
    this.loading = false;
    this.isUserInvalid=true;

  }
  });
}

ngOnDestroy() {
}

}

