import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DigitalAssetApiService } from 'src/app/digital-asset-api.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  providers: [DatePipe]
})
export class ReceiptComponent implements OnInit {
  public food ;
  Receiptform: FormGroup;
  submitted = false;
  public bindtranjection: any[];
  public bindtranjection1: any[];
  public BindUserRoles: any[];
 public bindfunddata: any[];
  public loading = false;isDataEmpty = true;
  fundlistdata: FormArray;
  orderForm: any;
  rows:any;
  english_fund_namearry:any;
  public bind_receipt_no: any;
  public bindtranjection_master: any;
  
  public bindprintvalue: any[];
  english_fund_name: any;
  funddata1: any; funddata2: any; funddata3: any;funddata4: any; funddata5: any;funddata6: any;funddata7: any; funddata8: any;
  funddata9: any;funddata10: any;funddata11: any;funddata12: any;funddata13: any;funddata14: any;funddata15: any;funddata16: any;
  funddata_gujarati_1: any;  funddata_gujarati_2: any;  funddata_gujarati_3: any;  funddata_gujarati_4: any;  funddata_gujarati_5: any;  funddata_gujarati_6: any;
  funddata_gujarati_7: any;  funddata_gujarati_8: any;  funddata_gujarati_9: any;  funddata_gujarati_10: any;  funddata_gujarati_11: any;
  funddata_gujarati_12: any;  funddata_gujarati_13: any;  funddata_gujarati_14: any;  funddata_gujarati_15: any;  funddata_gujarati_16: any;
  funddata_id_1: any;funddata_id_2: any;funddata_id_3: any;funddata_id_4: any;funddata_id_5: any;funddata_id_6: any;
  funddata_id_7: any;funddata_id_8: any;funddata_id_9: any;funddata_id_10: any;funddata_id_11: any;funddata_id_12: any;
  funddata_id_13: any;funddata_id_14: any;funddata_id_15: any;funddata_id_16: any;
  myDate = new Date();
  constructor(private http: HttpClient, private datePipe: DatePipe,private formBuilder: FormBuilder,private digitalAssetApiService:DigitalAssetApiService,private _route : ActivatedRoute)
   {

    }

    getFoods() {
         this.digitalAssetApiService.getFoods().subscribe(
           (data) => { this.food = data
            console.log(this.food );},
     
            // err => console.error(err),
            // () => console.log('done loading foods')
          );
         
        }
     

         
  ngOnInit(){
    this.getFoods();
    this.Bindmemberdata();
   this.bind_receipt_nodata();

   this.bindtype()
   this.bindtranjection_data();
 
   this.bind_transaction_master_data();
    this._route.paramMap.subscribe(params => {
       var receipt_no = params.get("id");
      var amount = params.get("amount")

      if (receipt_no == '0')
      {
        this.ClearFields()
      }
      else{
         this.Edit(receipt_no);
       
      }
    })
    
    this.loading = true;
     this.Receiptform = this.formBuilder.group({
      receipt_id: ['0'],
       Receipt_date: ['',[Validators.required]],
    
      Doner_id:['0'],
      Doner_Name:['',[Validators.required]],
      Member_id:[''],
      // member_name:[''],
     
     receipt_number: ['0'],
      
     tithi_date: ['',[Validators.required]],

     Yearly_membership_fee_text: [''],
     Yearly_membership_fee_id: [''],
    Yearly_membership_fee_amount: ['0'],

    Lifelong_membership_fee_text: [''],
    Lifelong_membership_fee_id: [''],
    Lifelong_membership_fee_amount: ['0'],
    
    General_fund_text: [''],
    General_fund_id: [''],
    General_fund_amount: ['0'],

    Aayambil_fund_text: [''],
    Aayambil_fund_id: [''],
    Aayambil_fund_amount: ['0'],

    Jivdaya_fund_text: [''],
    Jivdaya_fund_id: [''],
    Jivdaya_fund_amount: ['0'],

    Prabhavna_fund_text: [''],
    Prabhavna_fund_id: [''],
    Prabhavna_fund_amount: ['0'],

    Sadhamik_bhakti_khatu_text: [''],
    Sadhamik_bhakti_khatu_id: [''],
    Sadhamik_bhakti_khatu_amount: ['0'],

    Aaradhna_fund_text: [''],
    Aaradhna_fund_id: [''],
    Aaradhna_fund_amount: ['0'],

    Sadhusadhvi_vayavachh_Fund_text: [''],
    Sadhusadhvi_vayavachh_Fund_id: [''],
    Sadhusadhvi_vayavachh_Fund_amount: ['0'],

    Chaturmas_kaymi_aayambill_Fund_text: [''],
     Chaturmas_kaymi_aayambill_Fund_id: [''],
    Chaturmas_kaymi_aayambill_Fund_amount: ['0'],

    Chaturmas_prathna_inami_dro_Fund_text:[''],
    Chaturmas_prathna_inami_dro_Fund_id :[''],
    Chaturmas_prathna_inami_dro_Fund_amount :['0'],
    
        Chaturmas_poshadhvrat_kaymi_tithi_Fund_text:[''],
          Chaturmas_poshadhvrat_kaymi_tithi_Fund_id:[''],
          Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount:['0'],

          Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text:[''],
          Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id:[''],
          Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount:['0'],

          Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text:[''],
          Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id:[''],
          Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount:['0'],

          Samarkam_Fund_text:[''],
          Samarkam_Fund_id:[''],
          Samarkam_Fund_amount:['0'],

          Building_Fund_text:[''],
          Building_Fund_id:[''],
          Building_Fund_amount:['0'],
     

 
  
    
   });
 

    this.loading = false;


   
   
  }

  code = 'f_name';
 editMember_Name : any;

  selectEvent(item) {
    this.membervalidation = false;
    this.editMember_id=item.id
    this.editMember_Name =item.f_name
  }
 


  getfundlist(){
    return this.Receiptform.get('fundlistdata') as FormArray
  }
  ClearFields(){

    this.BtnText = 'Save';
    this.submitted = false;
    // this.Receiptform.reset();
    this.editid= 0;
    this.edit_Yearly_membership_fee_amount=0;
    this.edit_Aaradhna_fund_amount=0;
    this.edit_Lifelong_membership_fee_amount=0;
    this.edit_General_fund_amount=0;
    this.edit_Aayambil_fund_amount=0;
    this.edit_Jivdaya_fund_amount=0;
    this.edit_Prabhavna_fund_amount=0;
    this.edit_Sadhamik_bhakti_khatu_amount=0;
    this.edit_Sadhusadhvi_vayavachh_Fund_amount=0;
    this.edit_Chaturmas_kaymi_aayambill_Fund_amount=0;
    this.edit_Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount=0;
    this.edit_Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount=0;
    this.edit_Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount=0;
    this.edit_Samarkam_Fund_amount=0;
    this.edit_Building_Fund_amount=0;
    this.edit_Chaturmas_prathna_inami_dro_Fund_amount=0;
    this.edit_Chaturmas_prathna_inami_dro_Fund_amount=0;

    this.editReceipt_date= this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.editDoner_id='';
    this.editDoner_Name='';
    this.editamount_paid='';
    this.edittithi_date='';
      this.editMember_id='';
      this.editMember_Name='';
      this.editIstithi='';
 



    this.bind_receipt_nodata()

  }


  public tithidata: boolean = true;
  
  public amount_paid: boolean = true;

  tithi() {
    this.tithidata = !this.tithidata;
  }
  amount_paid1(){

    this.amount_paid =!this.amount_paid
  }
  
  get f() { return this.Receiptform.controls; }
  




  onSubmit() {
    this.loading = true;
    this.submitted = true;

    
    if (this.Receiptform.invalid) {
      this.loading = false;
      if(this.editMember_Name.f_name == null){
        this.membervalidation = true;
        debugger;
      }
      return;
    }
    const Receiptdata = this.Receiptform.value;


     
    if(this.editMember_Name.f_name == null)
    
    {         this.membervalidation = true;
      return;

      Receiptdata.Member_Name = this.editMember_Name;
   
      
    }
    else{ 
      Receiptdata.Member_Name = this.editMember_Name.f_name;
     
      this.membervalidation = false
      
    }

    Receiptdata.sessionuser = localStorage.getItem('ssjs_role_id');
    if(this.BtnText=="Save")
    {
      Receiptdata.entry_type = 'add';
    }else{
      Receiptdata.entry_type = 'update';
    }
  
    
    
    Receiptdata.Member_id =   this.editMember_id;
      if(this.tithidata == true){
        Receiptdata.Istithi = 'YES';
      }
      else{
        Receiptdata.Istithi = 'NO';
      }
  


      if(this.amount_paid == true){
        Receiptdata.amount_paid = 'YES';
      }
      else{
        Receiptdata.amount_paid = 'NO';
      }



    

      this.receiptdataform(Receiptdata);

  }
  public membervalidation: boolean = false;
 public receptstatus1 :any[];
  receiptdataform(Receiptdata: any) {
  
    this.digitalAssetApiService.CreateReceiptform(Receiptdata).subscribe(
      (data: []) => {
        this.receptstatus1 = data;

        const msg= this.receptstatus1.find(x =>x.msg).msg
          alert(msg)
        console.log(this.receptstatus1);

        
      this.bind_transaction_master_data();
             this.ClearFields();
         this.loading = false;
 
     }, error => {
   
       console.log(error);
      this.loading = false;
  
    });
   }



   
  deleteuser(sl: any) {
    this.loading = true;
    const ans = confirm('Do you want to delete details?');
    // sl.sessionuser = localStorage.getItem('WZ_userid');
    if (ans) {
    this.digitalAssetApiService.remove_transaction(sl).subscribe(
    (data) => {
      this.bind_transaction_master_data();
    this.bindtranjection_data();
    this.loading = false;
    alert('details deleted Successfully');
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }
  }
  // editMember_Name: any; 

  editid: any;   BtnText = 'Update'; editReceipt_date: any; editamount_paid: any; editDoner_id: any; editDoner_Name: any; editMember_id: any; editreceipt_number: any; editIstithi: any;
  edit_Aaradhna_fund_amount:any; edit_Sadhusadhvi_vayavachh_Fund_amount:any;edittithi_date: any;
  edit_Yearly_membership_fee_amount: any;  edit_Lifelong_membership_fee_amount: any;   edit_General_fund_amount: any;   edit_Aayambil_fund_amount: any;
  edit_Jivdaya_fund_amount: any;  edit_Prabhavna_fund_amount: any;   edit_Sadhamik_bhakti_khatu_amount: any;   edit_Chaturmas_kaymi_aayambill_Fund_amount: any;
  edit_Chaturmas_prathna_inami_dro_Fund_amount: any;  edit_Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount: any;   edit_poshadhvrat_kaymi_tithi_Fund_amount: any;   edit_Samarkam_Fund_amount: any;
  edit_Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount: any;  edit_Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount: any;   edit_Building_Fund_amount: any;   


  Edit(receipt_no:any) {
  this.digitalAssetApiService.bindtranjection_data().subscribe(
      (data: []) => {
        this.bindtranjection1 = data;
     const UDE = this.bindtranjection1.filter(x => x.receipt_no == receipt_no);

 

     this.editid = UDE[0].id;
     this.editReceipt_date =  this.datePipe.transform(UDE[0].receptdate, "yyyy/MM/dd");

      this. editReceipt_date= UDE[0].receptdate;
      this.editamount_paid = UDE[0].amount_paid;
     this.editDoner_id = UDE[0].donor_id;
     this.editDoner_Name = UDE[0].donor_name;
     this.editMember_id = UDE[0].member_id;
      this.editMember_Name = UDE[0].member_name;
     this.editreceipt_number = UDE[0].receipt_no;
   
     this.editIstithi = UDE[0].istithi;

     if(this.editIstithi=='YES'){
     this.tithidata = true;

     }
     else{      
       this.tithidata = false;
    }

    if(this.editamount_paid =='YES'){
      this.amount_paid = true;
 
      }
      else{      
        this.amount_paid = false;
     }
     
    //  this.edittithi_date =  this.datePipe.transform(UDE[0].tithi_date, "yyyy/MM/dd");
     this.edittithi_date = UDE[0].thithidate;

     this.edit_Yearly_membership_fee_amount = UDE[0].amount;
     this.edit_Lifelong_membership_fee_amount = UDE[1].amount;
     this.edit_General_fund_amount = UDE[2].amount;
     this.edit_Aayambil_fund_amount = UDE[3].amount;
     this.edit_Jivdaya_fund_amount = UDE[4].amount;
     this.edit_Prabhavna_fund_amount = UDE[5].amount;
     this.edit_Sadhamik_bhakti_khatu_amount = UDE[6].amount;
   
     this.edit_Aaradhna_fund_amount = UDE[7].amount;
     this.edit_Sadhusadhvi_vayavachh_Fund_amount = UDE[8].amount;

     this.edit_Chaturmas_kaymi_aayambill_Fund_amount = UDE[7].amount;
     this.edit_Chaturmas_prathna_inami_dro_Fund_amount = UDE[8].amount;
     this.edit_Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount = UDE[9].amount;
     this.edit_poshadhvrat_kaymi_tithi_Fund_amount = UDE[10].amount;
     this.edit_Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount = UDE[11].amount;
     this.edit_Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount = UDE[12].amount;
     this.edit_Samarkam_Fund_amount = UDE[13].amount;
     this.edit_Building_Fund_amount = UDE[14].amount;
  

   
  
  })
};
  
   bindtranjection_data() {
    this.digitalAssetApiService.bindtranjection_data().subscribe(
    (data: []) => {
    this.bindtranjection = data;
 
    console.log( this.bindtranjection)
if(this.bindtranjection.length > 0){
      this.isDataEmpty = false;
    }else{
      this.isDataEmpty = true;
    }
    });
  }

  
  bind_transaction_master_data() {
    this.digitalAssetApiService.bind_transaction_master_data().subscribe(
    (data: []) => {
    this.bindtranjection_master = data;



  

    });
  }

  bind_receipt_nodata() {

    this.digitalAssetApiService.bind_receipt_no1().subscribe(
    (data) => {
    this.bind_receipt_no = data;
   this.editreceipt_number =     this.bind_receipt_no[0]

  });}



  bindtype(){
   
    this.digitalAssetApiService.bind_fundtype().subscribe(
      (data: []) => {
      this.bindfunddata = data;
    


      // this is data for english name bind based on id
      this.funddata1 =   this.bindfunddata.find(x => x.id == 8).english_fund_name;
      this.funddata2 =   this.bindfunddata.find(x => x.id == 10).english_fund_name;
      this.funddata3 =   this.bindfunddata.find(x => x.id == 11).english_fund_name;
      this.funddata4 =   this.bindfunddata.find(x => x.id == 12).english_fund_name;
      this.funddata5 =   this.bindfunddata.find(x => x.id == 13).english_fund_name;
      this.funddata6 =   this.bindfunddata.find(x => x.id == 14).english_fund_name;
      this.funddata7 =   this.bindfunddata.find(x => x.id == 15).english_fund_name;
      this.funddata8 =   this.bindfunddata.find(x => x.id == 16).english_fund_name;
      this.funddata9 =   this.bindfunddata.find(x => x.id == 17).english_fund_name;
      this.funddata10 =   this.bindfunddata.find(x => x.id == 18).english_fund_name;
      this.funddata11 =   this.bindfunddata.find(x => x.id == 19).english_fund_name;
      this.funddata12 =   this.bindfunddata.find(x => x.id == 20).english_fund_name;
      this.funddata13 =   this.bindfunddata.find(x => x.id == 21).english_fund_name;
      this.funddata14 =   this.bindfunddata.find(x => x.id == 22).english_fund_name;
      this.funddata15 =   this.bindfunddata.find(x => x.id == 23).english_fund_name;
      this.funddata16 =   this.bindfunddata.find(x => x.id == 24).english_fund_name;




      
      // this is data for gujju name bind based on id
      this.funddata_gujarati_1 =   this.bindfunddata.find(x => x.id == 8).gujarati_fund_name;
      this.funddata_gujarati_2 =   this.bindfunddata.find(x => x.id == 10).gujarati_fund_name;
      this.funddata_gujarati_3 =   this.bindfunddata.find(x => x.id == 11).gujarati_fund_name;
      this.funddata_gujarati_4 =   this.bindfunddata.find(x => x.id == 12).gujarati_fund_name;
      this.funddata_gujarati_5 =   this.bindfunddata.find(x => x.id == 13).gujarati_fund_name;
      this.funddata_gujarati_6 =   this.bindfunddata.find(x => x.id == 14).gujarati_fund_name;
      this.funddata_gujarati_7 =   this.bindfunddata.find(x => x.id == 15).gujarati_fund_name;
      this.funddata_gujarati_8 =   this.bindfunddata.find(x => x.id == 16).gujarati_fund_name;
      this.funddata_gujarati_9 =   this.bindfunddata.find(x => x.id == 17).gujarati_fund_name;
      this.funddata_gujarati_10 =   this.bindfunddata.find(x => x.id == 18).gujarati_fund_name;
      this.funddata_gujarati_11 =   this.bindfunddata.find(x => x.id == 19).gujarati_fund_name;
      this.funddata_gujarati_12 =   this.bindfunddata.find(x => x.id == 20).gujarati_fund_name;
      this.funddata_gujarati_13 =   this.bindfunddata.find(x => x.id == 21).gujarati_fund_name;
      this.funddata_gujarati_14 =   this.bindfunddata.find(x => x.id == 22).gujarati_fund_name;
      this.funddata_gujarati_15 =   this.bindfunddata.find(x => x.id == 23).gujarati_fund_name;
      this.funddata_gujarati_16 =   this.bindfunddata.find(x => x.id == 24).gujarati_fund_name;



       
      // this is data for id name bind based on id
      this.funddata_id_1 =   this.bindfunddata.find(x => x.id == 8).id;
      this.funddata_id_2 =   this.bindfunddata.find(x => x.id == 10).id;
      this.funddata_id_3 =   this.bindfunddata.find(x => x.id == 11).id;
      this.funddata_id_4 =   this.bindfunddata.find(x => x.id == 12).id;
      this.funddata_id_5 =   this.bindfunddata.find(x => x.id == 13).id;
      this.funddata_id_6 =   this.bindfunddata.find(x => x.id == 14).id;
      this.funddata_id_7 =   this.bindfunddata.find(x => x.id == 15).id;
      this.funddata_id_8 =   this.bindfunddata.find(x => x.id == 16).id;
      this.funddata_id_9 =   this.bindfunddata.find(x => x.id == 17).id;
      this.funddata_id_10 =   this.bindfunddata.find(x => x.id == 18).id;
      this.funddata_id_11 =   this.bindfunddata.find(x => x.id == 19).id;
      this.funddata_id_12 =   this.bindfunddata.find(x => x.id == 20).id;
      this.funddata_id_13 =   this.bindfunddata.find(x => x.id == 21).id;
      this.funddata_id_14 =   this.bindfunddata.find(x => x.id == 22).id;
      this.funddata_id_15 =   this.bindfunddata.find(x => x.id == 23).id;
      this.funddata_id_16 =   this.bindfunddata.find(x => x.id == 24).id;

      

      });

  }









 public Bindmember :any[];
    
  Bindmemberdata() {
    this.digitalAssetApiService.Getmember().subscribe(
    (data: []) => {
    this.Bindmember = data;
  

 
    });
  }


  printtotal:any;
  edit_Yearly_membership_fee_amount1:any;edit_Lifelong_membership_fee_amount1:any;edit_General_fund_amount1:any;edit_Aayambil_fund_amount1;any;
  edit_Jivdaya_fund_amount1:any;edit_Prabhavna_fund_amount1:any;edit_Sadhamik_bhakti_khatu_amount1:any;edit_Aaradhna_fund_amount1:any;edit_Sadhusadhvi_vayavachh_Fund_amount1:any;
  edit_Chaturmas_kaymi_aayambill_Fund_amount1:any;edit_Chaturmas_prathna_inami_dro_Fund_amount1:any;edit_Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount1:any;edit_poshadhvrat_kaymi_tithi_Fund_amount1:any;edit_Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount1:any;
  edit_Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount1:any;edit_Samarkam_Fund_amount1:any;edit_Building_Fund_amount1:any;
  editReceipt_date1:any;editamount_paid1:any;editDoner_id1:any;
  editDoner_Name1:any;editMember_id1:any;editMember_Name1:any;
  editreceipt_number1:any;editIstithi1:any;edittithi_date1:any;
 

  
  printdata(sl:any){
    this.printtotal=  sl.tranjection_amount
   
    const UDE = this.bindtranjection.filter(x => x.receipt_no == sl.receipt_no);

    console.log(UDE);
  

   console.log(UDE[0].amount);
   this.editid = UDE[0].id;
   this.editReceipt_date1 = UDE[0].receptdate;
   this.editamount_paid1 = UDE[0].amount_paid;
   this.editDoner_id1 = UDE[0].donor_id;
   this.editDoner_Name1 = UDE[0].donor_name;
   this.editMember_id1 = UDE[0].member_id;
   this.editMember_Name1 = UDE[0].member_name;
   this.editreceipt_number1 = UDE[0].receipt_no;
   this.editIstithi1 = UDE[0].istithi;
   this.edittithi_date1 = UDE[0].tithi_date;
 
   
   this.edit_Yearly_membership_fee_amount1 = UDE[0].amount;
   this.edit_Lifelong_membership_fee_amount1 = UDE[1].amount;
   this.edit_General_fund_amount1 = UDE[2].amount;
   this.edit_Aayambil_fund_amount1 = UDE[3].amount;
   this.edit_Jivdaya_fund_amount1 = UDE[4].amount;
   this.edit_Prabhavna_fund_amount1 = UDE[5].amount;
   this.edit_Sadhamik_bhakti_khatu_amount1 = UDE[6].amount;
 
   this.edit_Aaradhna_fund_amount1 = UDE[7].amount;
   this.edit_Sadhusadhvi_vayavachh_Fund_amount1 = UDE[8].amount;

   this.edit_Chaturmas_kaymi_aayambill_Fund_amount1 = UDE[7].amount;
   this.edit_Chaturmas_prathna_inami_dro_Fund_amount1 = UDE[8].amount;
   this.edit_Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount1 = UDE[9].amount;
   this.edit_poshadhvrat_kaymi_tithi_Fund_amount1 = UDE[10].amount;
   this.edit_Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount1 = UDE[11].amount;
   this.edit_Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount1 = UDE[12].amount;
   this.edit_Samarkam_Fund_amount1 = UDE[13].amount;
   this.edit_Building_Fund_amount1= UDE[14].amount;


  }
  onChange(newValue) {
    this.digitalAssetApiService.Getmember().subscribe(
      (data: []) => {
        this.Bindmember = data;
    this.editMember_id =   this.Bindmember.find(x => x.f_name == newValue).id;
      console.log(this.editMember_id );
    });
}
  printDiv() {
    // tslint:disable-next-line:one-variable-per-declaration
    let printContents, popupWin;
    printContents = document.getElementById('div_Print').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          .invoice-box{
            max-width:800px;
            margin:auto;
            padding:30px;
            border:1px solid #eee;
            box-shadow:0 0 10px rgba(0, 0, 0, .15);
            font-size:16px;
            line-height:24px;
            font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color:#555;
        }

        .invoice-box table{
            width:100%;
            line-height:inherit;
            text-align:left;
        }

        .invoice-box table td{
            padding:5px;
            vertical-align:top;
        }

        .invoice-box table tr td:nth-child(2){
            text-align:right;
        }

        .invoice-box table tr.top table td{
            padding-bottom:20px;
        }

        .invoice-box table tr.top table td.title{
            font-size:45px;
            line-height:45px;
            color:#333;
        }

        .invoice-box table tr.information table td{
            padding-bottom:40px;
        }

        .invoice-box table tr.heading td{
            background:#eee;
            border-bottom:1px solid #ddd;
            font-weight:bold;
        }

        .invoice-box table tr.details td{
            padding-bottom:20px;
        }

        .invoice-box table tr.item td{
            border-bottom:1px solid #eee;
        }

        .invoice-box table tr.item.last td{
            border-bottom:none;
        }

        .invoice-box table tr.total td:nth-child(2){
            border-top:2px solid #eee;
            font-weight:bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td{
                width:100%;
                display:block;
                text-align:center;
            }

            .invoice-box table tr.information table td{
                width:100%;
                display:block;
                text-align:center;
            }
        }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
 //   popupWin.document.close();

    //  localStorage.setItem('IM_TransactionID', 0);
}

  




}
