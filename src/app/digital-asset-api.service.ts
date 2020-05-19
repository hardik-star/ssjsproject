import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class DigitalAssetApiService {
 
header: any;
  Url: string;

  constructor(private http: HttpClient) {
     this.Url = 'http://localhost:56890/api/ssjs_api/';
    //  this.Url = 'http://192.168.1.119:1010/api/ssjs/';

    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
   }
   
   getFoods() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
}

   bind_receipt_no1() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.Url + 'bind_receipt_no', httpOptions);
  }
   bindentity() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post(this.Url + 'bind_entitydata', httpOptions);
  }
  GetUsers() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post(this.Url + 'BindUsers', httpOptions);
  }

  bindrecept() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post(this.Url + 'Bindreceptdata', httpOptions);
  }
  bindtranjection_data() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post(this.Url +'bindtransaction_data', httpOptions);
  }

  bind_transaction_master_data() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post(this.Url + 'bind_transaction_master_data', httpOptions);
  }
  DeleteUser(sl: any) {
    console.log(sl)
    const formData: FormData = new FormData();
    formData.append('id', sl.id);
    return this.http.post<any>(this.Url + 'removeuser', formData);
  
  }
  remove_transaction(sl: any) {
   
    const formData: FormData = new FormData();
    formData.append('id', sl.id);
    return this.http.post<any>(this.Url + 'remove_transaction', formData);
  
  }
  Deleteentity(sl: any) {
    console.log(sl)
    const formData: FormData = new FormData();
    formData.append('id', sl.id);
    return this.http.post<any>(this.Url + 'remove_entity_data', formData);
  
  }


  CreateReceiptform(Receiptdata:any){
 console.log(Receiptdata)
     const formData: FormData = new FormData();
     formData.append('receipt_id', Receiptdata.receipt_id);
     formData.append('receipt_number', Receiptdata.receipt_number);
     formData.append('Receipt_date', Receiptdata.Receipt_date);
     formData.append('Member_id', Receiptdata.Member_id);
     formData.append('Member_Name', Receiptdata.Member_Name);
     formData.append('Doner_id', Receiptdata.Doner_id);
     formData.append('Doner_Name', Receiptdata.Doner_Name);
     formData.append('amount_paid', Receiptdata.amount_paid);

     formData.append('sessionuser', Receiptdata.sessionuser);
  
     
     formData.append('Istithi', Receiptdata.Istithi);
     formData.append('tithi_date', Receiptdata.tithi_date);

     formData.append('Yearly_membership_fee_text', Receiptdata.Yearly_membership_fee_text);
     formData.append('Yearly_membership_fee_id', Receiptdata.Yearly_membership_fee_id);
     formData.append('Yearly_membership_fee_amount', Receiptdata.Yearly_membership_fee_amount);

     formData.append('Lifelong_membership_fee_text', Receiptdata.Lifelong_membership_fee_text);
     formData.append('Lifelong_membership_fee_id', Receiptdata.Lifelong_membership_fee_id);
     formData.append('Lifelong_membership_fee_amount', Receiptdata.Lifelong_membership_fee_amount);

     formData.append('General_fund_text', Receiptdata.General_fund_text);
     formData.append('General_fund_id', Receiptdata.General_fund_id);
     formData.append('General_fund_amount', Receiptdata.General_fund_amount);

     formData.append('Aayambil_fund_text', Receiptdata.Aayambil_fund_text);
     formData.append('Aayambil_fund_id', Receiptdata.Aayambil_fund_id);
     formData.append('Aayambil_fund_amount', Receiptdata.Aayambil_fund_amount);

     formData.append('Jivdaya_fund_text', Receiptdata.Jivdaya_fund_text);
     formData.append('Jivdaya_fund_id', Receiptdata.Jivdaya_fund_id);
     formData.append('Jivdaya_fund_amount', Receiptdata.Jivdaya_fund_amount);

     
     formData.append('Prabhavna_fund_text', Receiptdata.Prabhavna_fund_text);
     formData.append('Prabhavna_fund_id', Receiptdata.Prabhavna_fund_id);
     formData.append('Prabhavna_fund_amount', Receiptdata.Prabhavna_fund_amount);

     
     formData.append('Sadhamik_bhakti_khatu_text', Receiptdata.Sadhamik_bhakti_khatu_text);
     formData.append('Sadhamik_bhakti_khatu_id', Receiptdata.Sadhamik_bhakti_khatu_id);
     formData.append('Sadhamik_bhakti_khatu_amount', Receiptdata.Sadhamik_bhakti_khatu_amount);

     formData.append('Aaradhna_fund_text', Receiptdata.Aaradhna_fund_text);
     formData.append('Aaradhna_fund_id', Receiptdata.Aaradhna_fund_id);
     formData.append('Aaradhna_fund_amount', Receiptdata.Aaradhna_fund_amount);

     formData.append('Sadhusadhvi_vayavachh_Fund_text', Receiptdata.Sadhusadhvi_vayavachh_Fund_text);
     formData.append('Sadhusadhvi_vayavachh_Fund_id', Receiptdata.Sadhusadhvi_vayavachh_Fund_id);
     formData.append('Sadhusadhvi_vayavachh_Fund_amount', Receiptdata.Sadhusadhvi_vayavachh_Fund_amount);

     formData.append('Chaturmas_kaymi_aayambill_Fund_text', Receiptdata.Chaturmas_kaymi_aayambill_Fund_text);
     formData.append('Chaturmas_kaymi_aayambill_Fund_id', Receiptdata.Chaturmas_kaymi_aayambill_Fund_id);
     formData.append('Chaturmas_kaymi_aayambill_Fund_amount', Receiptdata.Chaturmas_kaymi_aayambill_Fund_amount);

     
     formData.append('Chaturmas_prathna_inami_dro_Fund_text', Receiptdata.Chaturmas_prathna_inami_dro_Fund_text);
     formData.append('Chaturmas_prathna_inami_dro_Fund_id', Receiptdata.Chaturmas_prathna_inami_dro_Fund_id);
     formData.append('Chaturmas_prathna_inami_dro_Fund_amount', Receiptdata.Chaturmas_prathna_inami_dro_Fund_amount);

     formData.append('Chaturmas_poshadhvrat_kaymi_tithi_Fund_text', Receiptdata.Chaturmas_poshadhvrat_kaymi_tithi_Fund_text);
     formData.append('Chaturmas_poshadhvrat_kaymi_tithi_Fund_id', Receiptdata.Chaturmas_poshadhvrat_kaymi_tithi_Fund_id);
     formData.append('Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount', Receiptdata.Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount);
     
     formData.append('Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text', Receiptdata.Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text);
     formData.append('Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id', Receiptdata.Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id);
     formData.append('Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount', Receiptdata.Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount);

          
     formData.append('Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text', Receiptdata.Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text);
     formData.append('Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id', Receiptdata.Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id);
     formData.append('Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount', Receiptdata.Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount);

        
     formData.append('Samarkam_Fund_text', Receiptdata.Samarkam_Fund_text);
     formData.append('Samarkam_Fund_id', Receiptdata.Samarkam_Fund_id);
     formData.append('Samarkam_Fund_amount', Receiptdata.Samarkam_Fund_amount);

     formData.append('Building_Fund_text', Receiptdata.Building_Fund_text);
     formData.append('Building_Fund_id', Receiptdata.Building_Fund_id);
     formData.append('Building_Fund_amount', Receiptdata.Building_Fund_amount);
     
    
     formData.append('entry_type', Receiptdata.entry_type);
  
     return this.http.post<any>(this.Url + 'stp_save_transaction_data', formData);



   
  }


Createrequest(request: any) {
   console.log(request.Entity);
  console.log(request.LOB);
  console.log(request.sublob);
  console.log(request.InventoryType);
  console.log(request.DigitalInventory);
  console.log(request.IPdetails);
  console.log(request.Purpose);
  console.log(request.Vendor);
  console.log(request.FromDate);
  console.log(request.ToDate);
  console.log(request.Consumer);
  console.log(request.Dependency);
  console.log(request.Impactoffailure);
  console.log(request.OwnerName);
  console.log(request.contact_no);
  console.log(request.email_id);
  console.log(request.ReasonForValidity);
   }

  Login(user: any) {
    const formData: FormData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);
    return this.http.post<any>(this.Url + 'loginuser', formData);
  }

  CreateUser(register: any) {
    console.log(register)
    const formData: FormData = new FormData();
    formData.append('id', register.id);
    formData.append('username',register.username);
    formData.append('password', register.password);
    formData.append('memberId', register.memberId);
    formData.append('role',register.role);
    formData.append('groups',register.groups);
      formData.append('sessionuser', register.sessionuser);
     formData.append('entry_type', register.entry_type);
    return this.http.post<any>(this.Url + 'saveupdateuser', formData);
   }
  create_update_entitydata(entity:any){
    console.log(entity);
    const formData:FormData= new FormData();
    formData.append('id',entity.id);
    formData.append('code',entity.code);
    formData.append('name',entity.name);
    formData.append('address',entity.address);
    formData.append('registration_no',entity.registration_no);
    formData.append('phone_no',entity.phone_no);
    formData.append('alt_phone_no',entity.alt_phone_no);
    formData.append('entry_type',entity.entry_type);
    formData.append('sessionuser',entity.sessionuser);
    return this.http.post<any>(this.Url + 'saveupdate_entity_data', formData);
    }

  Deleterecepit(sl:any){
     const formData: FormData = new FormData();
    formData.append('receptid', sl.receipt_id);
    return this.http.post<any>(this.Url + 'removerecept', formData);
     }
  printdata(sl:any){
      const formData: FormData = new FormData();
    formData.append('receptid', sl.receipt_id);
    return this.http.post<any>(this.Url + 'printdata', formData);
    }
  Getmember(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.Url + 'bind_memberdata', httpOptions);
   }
  Deletemember(sl:any){
    console.log(sl.id)
    const formData: FormData = new FormData();
    formData.append('id', sl.id);
    return this.http.post<any>(this.Url + 'remove_member_data', formData);
 }
  Createmember(member:any){
    console.log(member)
    const formData: FormData = new FormData();
    formData.append('id', member.id);
    formData.append('code', member.code);
    formData.append('f_name', member.f_name);
    formData.append('m_name', member.m_name);
    formData.append('l_name', member.l_name);
    formData.append('dob', member.dob);
    formData.append('blood_group', member.blood_group);
    formData.append('pancard_no', member.pancard_no);
    formData.append('votingcard_no', member.votingcard_no);
    formData.append('aadharcard_no', member.aadharcard_no);
    formData.append('is_head_of_fimily', member.is_head_of_fimily);
    formData.append('HOF_id', member.HOF_id);
    formData.append('HOF_name', member.HOF_name);
    formData.append('HOF_relation', member.HOF_relation);
    formData.append('isalive', member.isalive);
    formData.append('sessionuser', member.sessionuser);
    formData.append('entry_type', member.entry_type);
    return this.http.post<any>(this.Url + 'saveupdate_member_data', formData);
   }


   binduserdata_for_update(id){
    
     const formData : FormData = new FormData();
     formData.append('id',id);
     return this.http.post<any>(this.Url + 'binduser_for_update', formData);
   }
  
 
  
   bindmemberdata_for_update(id){
    
    const formData : FormData = new FormData();
    formData.append('id',id);
    return this.http.post<any>(this.Url + 'bindmember_for_update', formData);
  }
  bindentitydata_for_update(id){
    const formData : FormData = new FormData();
    formData.append('id',id);
    return this.http.post<any>(this.Url + 'bindentity_for_update', formData);
  }
  bind_fundtype(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.Url + 'bind_fundtype', httpOptions);
 
    
  }
  
}
