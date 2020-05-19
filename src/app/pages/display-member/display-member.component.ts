


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import{DigitalAssetApiService} from "../../digital-asset-api.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-member',
  templateUrl: './display-member.component.html',
  styleUrls: ['./display-member.component.scss']
})
export class DisplayMemberComponent implements OnInit {


  BtnText = 'Save';
  memberForm: FormGroup;
  submitted = false;
  public Bindmember: any[];
  public memberstatus: any[];
  searchText;
  public BindUserRoles: any[];
  public loading = false;isDataEmpty = true;
  
  constructor( public router: Router,private formBuilder: FormBuilder,private digitalAssetApiService:DigitalAssetApiService) { }
  
  ngOnInit(){
    this.loading = true;
     this.memberForm = this.formBuilder.group({
  
      id: ['0'],    
      code: ['',[Validators.required]],
      f_name: ['',[Validators.required]],  
       m_name: ['',[Validators.required]], 
      l_name: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      blood_group: ['',[Validators.required]],
      pancard_no:['',[Validators.required,Validators.minLength(10)]],
      votingcard_no: ['',[Validators.required,Validators.minLength(12)]],
      aadharcard_no: ['',[Validators.required,Validators.minLength(12)]],
      is_head_of_fimily:['',[Validators.required]],
      HOF_id:['',[Validators.required]],
      HOF_name: ['',[Validators.required]],
      HOF_relation: ['',[Validators.required]],
      isalive: ['',[Validators.required]],
  
     
    
   });
   this.Bindmemberdata();
    this.setDefaultValue();
    this.loading = false;
  
  }
  
  
   checkLimit(min: number, max: number): ValidatorFn {
     return (c: AbstractControl): { [key: string]: boolean } | null => {
         if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
             return { 'range': true };
         }
         return null;
        }
      }
   
  
  ClearFields(){
    this.BtnText = 'Save';
    this.memberForm.reset();
    this.setDefaultValue();
    this.submitted = false;
    this.memberForm.controls.id.setValue('0');
  }
  
  setDefaultValue(){
    // this.memberForm.controls.role.setValue('');
  }
  
  get f() { return this.memberForm.controls; }
  
  onSubmit() {
    this.loading = true;
    this.submitted = true;
  //  // stop here if form is invalid
    if (this.memberForm.invalid) {
      this.loading = false;
      return;
    }
    const member = this.memberForm.value;
  
    member.sessionuser = localStorage.getItem('ssjs_username');
    if(this.BtnText=="Save")
    {
      member.entry_type = 'add';
    }else{
      member.entry_type = 'update';
    }
  
  
  
      this.createmember(member);
  }
  
  createmember(member: any) {
      
  
      this.digitalAssetApiService.Createmember(member).subscribe(
        (data: []) => {
          this.memberstatus = data;
  
          const msg= this.memberstatus.find(x =>x.msg).msg
          alert(msg)
     this.ClearFields();
     this.Bindmemberdata();
     this.loading = false;
  
    }, error => {
       console.log(error);
      this.loading = false;
  
    });
   }
      
  deleteuser(sl: any) {
    this.loading = true;
    const ans = confirm('Do you want to delete member?');
    // sl.sessionuser = localStorage.getItem('WZ_userid');
    if (ans) {
    this.digitalAssetApiService.Deletemember(sl).subscribe(
    (data) => {
    this.Bindmemberdata();
    this.loading = false;
    alert('User deleted Successfully');
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }
  }
  
  Edit(sl: any) {

    this.router.navigate(['member',sl.id]);

     const UDE = this.Bindmember.find(x => x.id == sl.id);

     this.memberForm.setValue(UDE);
    
   }
  //  BindUserRole() {
  //   this.digitalAssetApiService.BingndUserRoles().subscribe(
  //   (data: []) => {
  //   this.BindUserRoles = data;
  //   });
  // }
  
  Bindmemberdata() {
    this.digitalAssetApiService.Getmember().subscribe(
    (data: []) => {
    this.Bindmember = data;
  
    console.log(this.Bindmember);
    if(this.Bindmember.length > 0){
      this.isDataEmpty = false;
    }else{
      this.isDataEmpty = true;
    }
    });
  }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // this.memberForm.controls.role.setValue('');