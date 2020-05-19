import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import{DigitalAssetApiService} from "../../digital-asset-api.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-entity',
  templateUrl: './display-entity.component.html',
  styleUrls: ['./display-entity.component.scss']
})
export class DisplayEntityComponent implements OnInit {
  searchText;
  BtnText = 'Save';
  entity: FormGroup;
  submitted = false;
  public bindentitydata: any[];
  public entitystatus: any[];

  public BindUserRoles: any[];
  public loading = false;isDataEmpty = true;
  
  constructor( public router: Router,private formBuilder: FormBuilder,private digitalAssetApiService:DigitalAssetApiService) { }
  
  ngOnInit(){
    this.loading = true;
     this.entity = this.formBuilder.group({
  
      id: ['0'],    
  
      code: ['',[Validators.required]],
      name: ['',[Validators.required]],
      address: ['',[Validators.required]],
      registration_no: ['',[Validators.required] ],
      phone_no: ['',[Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      alt_phone_no: ['',[Validators.required,Validators.pattern('[6-9]\\d{9}')] ], 
   });
   this.bindentity();
    this.setDefaultValue();
    this.loading = false;
   
  }
 
  
  ClearFields(){
    this.BtnText = 'Save';
    this.entity.reset();
    this.setDefaultValue();
    this.submitted = false;
    this.entity.controls.id.setValue('0');
  }
  
  setDefaultValue(){
   
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
  }
  _keyPress1(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
  }
  
  get f() { return this.entity.controls; }

  onSubmit() {
     this.loading = true;
    this.submitted = true;
  //  // stop here if form is invalid
    if (this.entity.invalid) {
      this.loading = false;
      return;
    }
    const entity = this.entity.value;
  
    entity.sessionuser = localStorage.getItem('ssjs_username');
    if(this.BtnText=="Save")
    {
      entity.entry_type = 'add';
    }else{
      entity.entry_type = 'update';
    }
  
  
      this.userdata(entity);
  }
  
    userdata(entity: any) {
      this.digitalAssetApiService.create_update_entitydata(entity).subscribe(
        (data: []) => {
      this.entitystatus = data
      const msg = this.entitystatus.find(x=>x.msg).msg
alert(msg)
     this.ClearFields();
     this.bindentity();
     this.loading = false;
   
    }, error => {
       console.log(error);
      this.loading = false;
  
    });
   }
      
  deleteentity(sl: any) {
    this.loading = true;
    const ans = confirm('Do you want to delete Entity?');
    // sl.sessionuser = localStorage.getItem('WZ_userid');
    if (ans) {
    this.digitalAssetApiService.Deleteentity(sl).subscribe(
    (data) => {
    this.bindentity();
    this.loading = false;
    alert('Entity deleted Successfully');
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }
  }
  
  Edit(sl: any) {

    this.router.navigate(['Entity',sl.id]);

     const UDE = this.bindentitydata.find(x => x.id == sl.id);

     this.entity.setValue(UDE);
    
   }
  
  
  
  bindentity() {
    this.digitalAssetApiService.bindentity().subscribe(
    (data: []) => {
    this.bindentitydata = data;
  
    console.log(this.bindentitydata);
    if(this.bindentitydata.length > 0){
      this.isDataEmpty = false;
    }else{
      this.isDataEmpty = true;
    }
    });
  }
  
}



