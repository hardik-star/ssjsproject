import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import{DigitalAssetApiService} from "../../digital-asset-api.service"
import { AuthLayoutRoutes } from 'src/app/layouts/auth-layout/auth-layout.routing';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})

export class UserRegistrationComponent implements OnInit {
BtnText = 'Update';
searchText;
registerForm: FormGroup;
submitted = false;
public Binduserar: any[];
public userstatus: any[];
public BindUserRoles: any[];
public binduserdataforupdate: any[]
public loading = false;isDataEmpty = true;

constructor( private formBuilder: FormBuilder,private digitalAssetApiService:DigitalAssetApiService,private _route : ActivatedRoute) { }

ngOnInit(){


  this.loading = true;
   this.registerForm = this.formBuilder.group({

    id: ['0'],    

    username: ['',[Validators.required]],
    password: ['',[Validators.required]],
    memberId: ['',[Validators.required]],
    groups: ['',[Validators.required] ],
    role: ['',[Validators.required] ],
});
 this.Binduser();
  this.setDefaultValue();
  this.loading = false;


this._route.paramMap.subscribe(params => {
  var id = params.get("id")
  if (id == '0')
  {
    this.ClearFields()
  }
  else{
    this.Edit(id);
  }
})

  
}


ClearFields(){
  this.BtnText = 'Save';
  this.registerForm.reset();
  this.setDefaultValue();
  this.submitted = false;
  this.registerForm.controls.id.setValue('0');
}

setDefaultValue(){
  this.registerForm.controls.role.setValue('');
}

get f() { return this.registerForm.controls; }

onSubmit() {
   this.loading = true;
   this.submitted = true;
//  // stop here if form is invalid
  if (this.registerForm.invalid) {
    this.loading = false;
    return;
  }
  const register = this.registerForm.value;

  register.sessionuser = localStorage.getItem('ssjs_username');
  if(this.BtnText=="Save")
  {
   register.entry_type = 'add';
  }else{
   register.entry_type = 'update';
  }


    this.userdata(register);
}

  userdata(register: any) {

      this.digitalAssetApiService.CreateUser(register).subscribe(
      (data: []) => {

this.userstatus = data;
const msg = this.userstatus.find(x => x.msg).msg;


alert(msg);
    
   this.ClearFields();
   this.Binduser();
   this.loading = false;

  }, error => {
     console.log(error);
    this.loading = false;

  });
 }
    
deleteuser(sl: any) {
  this.loading = true;
  const ans = confirm('Do you want to delete User?');
  // sl.sessionuser = localStorage.getItem('WZ_userid');
  if (ans) {
  this.digitalAssetApiService.DeleteUser(sl).subscribe(
  (data) => {
  this.Binduser();
  this.loading = false;
  alert('User deleted Successfully');
  }, error => {
    console.log(error);
    this.loading = false;
  });
}
}

 Edit(id:any) {
this.digitalAssetApiService.binduserdata_for_update(id).subscribe( (data:[]) => { 
    this.binduserdataforupdate = data;
const UDE = this.binduserdataforupdate.find(x => x.id == id);
    this.registerForm.setValue(UDE);
  });

 }


Binduser() {
  this.digitalAssetApiService.GetUsers().subscribe(
  (data: []) => {
  this.Binduserar = data;

  console.log(this.Binduserar);
  if(this.Binduserar.length > 0){
    this.isDataEmpty = false;
  }else{
    this.isDataEmpty = true;
  }
  });
}

}












