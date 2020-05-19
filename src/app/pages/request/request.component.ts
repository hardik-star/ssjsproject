import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { DigitalAssetApiService } from 'src/app/digital-asset-api.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  BtnText = 'Save';
  request: FormGroup;
  submitted = false;
  public Binduserar: any[];
  public BindUserRoles: any[];
  public loading = false;isDataEmpty = true;
  
  constructor( private formBuilder: FormBuilder,private digitalAssetApiService:DigitalAssetApiService) { }

  ngOnInit() {
  
  this.loading = true;
  this.request = this.formBuilder.group({
  
   Entity: [null],
     LOB: [null],
   
   sublob: [null],
   InventoryType: [null],
   DigitalInventory: [null],
   IPdetails: [null],
   Purpose: [null],
   Vendor: [null],
 FromDate: [''],
   ToDate: [''],
   Consumer: ['', Validators.required],
   Dependency: ['', Validators.required],
   Impactoffailure: ['', Validators.required],
   OwnerName: ['', Validators.required],
    contact_no: ['', Validators.required],
   email_id: ['', [Validators.required, Validators.email]],
    ReasonForValidity: ['', Validators.required],
 

});

//  this.setDefaultValue();
 this.loading = false;
}

ClearFields(){
 this.BtnText = 'Save';
 this.request.reset();
//  this.setDefaultValue();
 this.submitted = false;
 this.request.controls.userid.setValue('0');
}

// setDefaultValue(){
//  this.request.controls.role_id.setValue(null);
// }

get f() { return this.request.controls; }

onSubmit() {
 this.loading = true;
 this.submitted = true;
// stop here if form is invalid
 if (this.request.invalid) {
   this.loading = false;
   return;
 }
 const request = this.request.value;
 request.sessionuser = localStorage.getItem('WZ_userid');
 if(this.BtnText=="Save")
 {
  request.entry_type = 'add';
 }else{
  request.entry_type = 'update';
 }
//  this.requestdata(request);
}

// requestdata(request: any) {
//   this.digitalAssetApiService.Createrequest(request).subscribe(
//  ()=>{  
//  //  this.ClearFields();
//  //  this.Binduser();
//  //  this.loading = false;
//  // alert("User added successfully");
//  // }, error => {
//  //    console.log(error);
//  //   this.loading = false;

//  });
// }
   
// deleteuser(sl: any) {
//   this.loading = true;
//   const ans = confirm('Do you want to delete User?');
//   sl.sessionuser = localStorage.getItem('WZ_userid');
//   if (ans) {
//   this.ADManagementApiService.DeleteUser(sl).subscribe(
//   (data) => {
//   this.Binduser();
//   this.loading = false;
//   alert('User deleted Successfully');
//   }, error => {
//     console.log(error);
//     this.loading = false;
//   });
// }
// }

// Edit(sl: any) {
//   this.BtnText = 'Update';
//   sl.password = '';
//   const type = this.Binduserar.find(x => x.type == sl.type).type;
//   const UDE = this.Binduserar.find(x => x.userid == sl.userid);
//   delete UDE.type;
//   this.registerForm.setValue(UDE);
//   UDE.type = type;
// }

// BindUserRole() {
//   this.ADManagementApiService.BindUserRoles().subscribe(
//   (data: []) => {
//   this.BindUserRoles = data;
//   });
// }

// Binduser() {
//   this.ADManagementApiService.GetUsers().subscribe(
//   (data: []) => {
//   this.Binduserar = data;
//   if(this.Binduserar.length > 0){
//     this.isDataEmpty = false;
//   }else{
//     this.isDataEmpty = true;
//   }
//   });
// }

}
