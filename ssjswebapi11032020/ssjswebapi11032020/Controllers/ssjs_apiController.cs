using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Data;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Web.Hosting;
using System.IO;


namespace ssjswebapi11032020.Controllers
{
    public class ssjs_apiController : ApiController
    {
                    [HttpPost]
                    public Object saveupdateuser()
                        {
                                                try
                                                {

                                                    var httprequest = HttpContext.Current.Request;
                                                     string id = httprequest.Form["id"].ToString();
                                                    string username = httprequest.Form["username"].ToString();
                                                    string password = httprequest.Form["password"].ToString();
                                                    string memberId = httprequest.Form["memberId"].ToString();
                                                    string groups = httprequest.Form["groups"].ToString();
                                                    string role = httprequest.Form["role"].ToString();
                                                    string sessionuser = httprequest.Form["sessionuser"].ToString(); 
                                                    string entry_type = httprequest.Form["entry_type"].ToString();
                                                     Models.ssjsdataEntities DB = new Models.ssjsdataEntities();
                                                    var obj = DB.stp_saveUpdateUser(Convert.ToInt32(id), username, password, Convert.ToInt32(memberId), groups, role, sessionuser, entry_type);
                                                      return obj;
                                                 }

 
                                                catch (Exception ex)
                                                  {

                                                    return ex;
                                                    }

                           }
                        [HttpPost]

                        public Object loginuser()
                                {
                                      try
                                          {

                                           var httprequest = HttpContext.Current.Request;
                                           string username = httprequest.Form["username"].ToString();
                                           string password = httprequest.Form["password"].ToString();
                                             Models.ssjsdataEntities DB = new Models.ssjsdataEntities();
                                            var obj=   DB.stp_login(username, password);
                                              return obj;

                                           }


                                           catch (Exception ex)
                                                 {

                                                 return ex;

                                                  }

                                }
        public Object BindUsers()
        {
            try
            {


                Models.ssjsdataEntities DB = new Models.ssjsdataEntities();
                var obj = DB.bindalluser();
                return obj;

            }


            catch (Exception ex)
            {

                return ex;

            }

        }

        [HttpPost]
        public Object removeuser()
        {
            try
            {
                var httprequest = HttpContext.Current.Request;
                var id = httprequest.Form["id"].ToString();
                Models.ssjsdataEntities DB = new Models.ssjsdataEntities();
                var obj = DB.stp_removeuser(Convert.ToInt32(id));
                return obj;

            }
            catch(Exception ex)
            {
                return ex;
            }
        }


        public Object bind_entitydata()
        {
            try
            {

                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.stp_bind_entity_data();
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }
        }


        public Object remove_entity_data()
        {
            try
            {

                var HttpRequest = HttpContext.Current.Request;
                var id = HttpRequest.Form["id"].ToString();
                Models.ssjsdataEntities DB = new Models.ssjsdataEntities();

                var obj = DB.stp_remove_entity_data(Convert.ToInt32(id));


                return obj;
                   


            }
            catch (Exception ex)
            {
                return ex;

            }
        }

        public Object saveupdate_entity_data()
        {
            try
            {

                var HttpRequest = HttpContext.Current.Request;
                var id = HttpRequest.Form["id"].ToString();
                var code = HttpRequest.Form["code"].ToString(); 
                var name = HttpRequest.Form["name"].ToString();
                var address = HttpRequest.Form["address"].ToString();
                var registration_no = HttpRequest.Form["registration_no"].ToString();
                var phone_no = HttpRequest.Form["phone_no"].ToString();
                var alt_phone_no = HttpRequest.Form["alt_phone_no"].ToString();
                var entry_type = HttpRequest.Form["entry_type"].ToString();
                var sessionuser = HttpRequest.Form["sessionuser"].ToString();

                Models.ssjsdataEntities DB = new Models.ssjsdataEntities();

                var obj = DB.saveupdateentitydata(Convert.ToInt32(id), code, name, address, registration_no, phone_no, alt_phone_no, entry_type, sessionuser);


                return obj;



            }
            catch (Exception ex)
            {
                return ex;

            }
        }




        public Object saveupdate_member_data()
        {
            try
            {

                var HttpRequest = HttpContext.Current.Request;
                var id = HttpRequest.Form["id"].ToString();
                var code = HttpRequest.Form["code"].ToString();
                var f_name = HttpRequest.Form["f_name"].ToString();
                var m_name = HttpRequest.Form["m_name"].ToString();
                 var l_name = HttpRequest.Form["l_name"].ToString();
                var dob = HttpRequest.Form["dob"].ToString();
                var blood_group = HttpRequest.Form["blood_group"].ToString();
                var pancard_no = HttpRequest.Form["pancard_no"].ToString();
                var votingcard_no = HttpRequest.Form["votingcard_no"].ToString();
                var aadharcard_no = HttpRequest.Form["aadharcard_no"].ToString();
                var is_head_of_fimily = HttpRequest.Form["is_head_of_fimily"].ToString();
                var HOF_id = HttpRequest.Form["HOF_id"].ToString();
                var HOF_name = HttpRequest.Form["HOF_name"].ToString();
                var HOF_relation = HttpRequest.Form["HOF_relation"].ToString();
                var isalive = HttpRequest.Form["isalive"].ToString();
                var sessionuser = HttpRequest.Form["sessionuser"].ToString();
               var entry_type = HttpRequest.Form["entry_type"].ToString();
                Models.ssjsdataEntities DB = new Models.ssjsdataEntities();

                var obj = DB.saveupdatemember(Convert.ToInt32(id), code, f_name,m_name,l_name,dob,blood_group,pancard_no,votingcard_no,aadharcard_no,is_head_of_fimily,HOF_id,HOF_name,HOF_relation,isalive, entry_type, sessionuser);


                return obj;



            }
            catch (Exception ex)
            {
                return ex;

            }
        }

        public Object remove_member_data()
        {
            try
            {

                var HttpRequest = HttpContext.Current.Request;
                var id = HttpRequest.Form["id"].ToString();
                Models.ssjsdataEntities DB = new Models.ssjsdataEntities();

                var obj = DB.stp_removemember(Convert.ToInt32(id));


                return obj;



            }
            catch (Exception ex)
            {
                return ex;

            }
        }
        public Object bind_memberdata()
        {
            try
            {

                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.stp_bind_memberdata();
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }
        }
        public Object binduser_for_update()
        {
            try
            {

                var httprequest = HttpContext.Current.Request;
                string id = httprequest.Form["id"].ToString();

                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.binduser_for_updatedata(Convert.ToInt32(id));
                return obj;
            

            }
            catch (Exception  ex)
            {
                return ex;

            }


        }
        public Object bindmember_for_update()
        {
            try
            {

                var httprequest = HttpContext.Current.Request;
                string id = httprequest.Form["id"].ToString();

                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.binduser_for_memberdata(Convert.ToInt32(id));
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }
        public Object bindentity_for_update()
        {
            try
            {

                var httprequest = HttpContext.Current.Request;
                string id = httprequest.Form["id"].ToString();

                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.binduser_for_Entitydata(Convert.ToInt32(id));
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }
        public Object remove_transaction()
        {
            try
            {

                var httprequest = HttpContext.Current.Request;
                string id = httprequest.Form["id"].ToString();

                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.remove_transaction(Convert.ToInt32(id));
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }
        public Object bind_fundtype()
        {
            try
            {


                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.bind_fundtype();
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }
        public Object bindtransaction_data()
        {
            try
            {


                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.bind_transaction_details_data();
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }
        public Object bind_receipt_no()
        {
            try
            {


                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.stp_bind_receipt_no();
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }
        public Object bind_transaction_master_data()
        {
            try
            {


                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                var obj = db.bind_transaction_master_data();
                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }



        public Object stp_save_transaction_data()
        {
            try
            {

                var httprequest = HttpContext.Current.Request;


                Models.ssjsdataEntities db = new Models.ssjsdataEntities();
                string receipt_id = httprequest.Form["receipt_id"].ToString();
                string receipt_number = httprequest.Form["receipt_number"].ToString();
                string receipt_date = httprequest.Form["receipt_date"].ToString();
                string Member_id = httprequest.Form["Member_id"].ToString();
                string Member_Name = httprequest.Form["Member_Name"].ToString();
                string Doner_id = httprequest.Form["Doner_id"].ToString();
                string Doner_Name = httprequest.Form["Doner_Name"].ToString();
                string amount_paid = httprequest.Form["amount_paid"].ToString();
                string sessionuser = httprequest.Form["sessionuser"].ToString();
                string Istithi = httprequest.Form["Istithi"].ToString();
                string tithi_date = httprequest.Form["tithi_date"].ToString();

                string Yearly_membership_fee_id = httprequest.Form["Yearly_membership_fee_id"].ToString();
                string Yearly_membership_fee_amount = httprequest.Form["Yearly_membership_fee_amount"].ToString();
                string Yearly_membership_fee_text = httprequest.Form["Yearly_membership_fee_text"].ToString();



                string Lifelong_membership_fee_id = httprequest.Form["Lifelong_membership_fee_id"].ToString();
                string Lifelong_membership_fee_amount = httprequest.Form["Lifelong_membership_fee_amount"].ToString();
                string Lifelong_membership_fee_text = httprequest.Form["Lifelong_membership_fee_text"].ToString();


                string General_fund_id = httprequest.Form["General_fund_id"].ToString();
                string General_fund_amount = httprequest.Form["General_fund_amount"].ToString();
                string General_fund_text = httprequest.Form["General_fund_text"].ToString();


                string Aayambil_fund_id = httprequest.Form["Aayambil_fund_id"].ToString();
                string Aayambil_fund_amount = httprequest.Form["Aayambil_fund_amount"].ToString();
                string Aayambil_fund_text = httprequest.Form["Aayambil_fund_text"].ToString();


                string Jivdaya_fund_id = httprequest.Form["Jivdaya_fund_id"].ToString();
                string Jivdaya_fund_amount = httprequest.Form["Jivdaya_fund_amount"].ToString();
                string Jivdaya_fund_text = httprequest.Form["Jivdaya_fund_text"].ToString();

                string Prabhavna_fund_id = httprequest.Form["Prabhavna_fund_id"].ToString();
                string Prabhavna_fund_amount = httprequest.Form["Prabhavna_fund_amount"].ToString();
                string Prabhavna_fund_text = httprequest.Form["Prabhavna_fund_text"].ToString();


                string Sadhamik_bhakti_khatu_id = httprequest.Form["Sadhamik_bhakti_khatu_id"].ToString();
                string Sadhamik_bhakti_khatu_amount = httprequest.Form["Sadhamik_bhakti_khatu_amount"].ToString();
                string Sadhamik_bhakti_khatu_text = httprequest.Form["Sadhamik_bhakti_khatu_text"].ToString();

                string Aaradhna_fund_id = httprequest.Form["Aaradhna_fund_id"].ToString();
                string Aaradhna_fund_amount = httprequest.Form["Aaradhna_fund_amount"].ToString();
                string Aaradhna_fund_text = httprequest.Form["Aaradhna_fund_text"].ToString();

                string Sadhusadhvi_vayavachh_Fund_id = httprequest.Form["Sadhusadhvi_vayavachh_Fund_id"].ToString();
                string Sadhusadhvi_vayavachh_Fund_amount = httprequest.Form["Sadhusadhvi_vayavachh_Fund_amount"].ToString();
                string Sadhusadhvi_vayavachh_Fund_text = httprequest.Form["Sadhusadhvi_vayavachh_Fund_text"].ToString();


                string Chaturmas_kaymi_aayambill_Fund_id = httprequest.Form["Chaturmas_kaymi_aayambill_Fund_id"].ToString();
                string Chaturmas_kaymi_aayambill_Fund_amount = httprequest.Form["Chaturmas_kaymi_aayambill_Fund_amount"].ToString();
                string Chaturmas_kaymi_aayambill_Fund_text = httprequest.Form["Chaturmas_kaymi_aayambill_Fund_text"].ToString();

                string Chaturmas_prathna_inami_dro_Fund_id = httprequest.Form["Chaturmas_prathna_inami_dro_Fund_id"].ToString();
                string Chaturmas_prathna_inami_dro_Fund_amount = httprequest.Form["Chaturmas_prathna_inami_dro_Fund_amount"].ToString();
                string Chaturmas_prathna_inami_dro_Fund_text = httprequest.Form["Chaturmas_prathna_inami_dro_Fund_text"].ToString();

                string Chaturmas_poshadhvrat_kaymi_tithi_Fund_id = httprequest.Form["Chaturmas_poshadhvrat_kaymi_tithi_Fund_id"].ToString();
                string Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount = httprequest.Form["Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount"].ToString();
                string Chaturmas_poshadhvrat_kaymi_tithi_Fund_text = httprequest.Form["Chaturmas_poshadhvrat_kaymi_tithi_Fund_text"].ToString();

                string Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id = httprequest.Form["Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id"].ToString();
                string Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount = httprequest.Form["Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount"].ToString();
                string Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text = httprequest.Form["Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text"].ToString();


                string Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id = httprequest.Form["Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id"].ToString();
                string Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount = httprequest.Form["Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount"].ToString();
                string Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text = httprequest.Form["Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text"].ToString();



                string Samarkam_Fund_id = httprequest.Form["Samarkam_Fund_id"].ToString();
                string Samarkam_Fund_amount = httprequest.Form["Samarkam_Fund_amount"].ToString();
                string Samarkam_Fund_text = httprequest.Form["Samarkam_Fund_text"].ToString();

                string Building_Fund_id = httprequest.Form["Building_Fund_id"].ToString();
                string Building_Fund_amount = httprequest.Form["Building_Fund_amount"].ToString();
                string Building_Fund_text = httprequest.Form["Building_Fund_text"].ToString();

                string entry_type = httprequest.Form["entry_type"].ToString();

                var obj = db.stp_save_transaction_data(Convert.ToInt32(receipt_id), receipt_number, receipt_date, Convert.ToInt32(Member_id), Member_Name, Convert.ToInt32(Doner_id), Doner_Name, amount_paid, sessionuser,
                    Istithi, tithi_date,
                    Yearly_membership_fee_id, Convert.ToInt32(Yearly_membership_fee_amount), Yearly_membership_fee_text,
                    Lifelong_membership_fee_id, Convert.ToInt32(Lifelong_membership_fee_amount), Lifelong_membership_fee_text,
                    General_fund_id, Convert.ToInt32(General_fund_amount), General_fund_text,
                    Aayambil_fund_id, Convert.ToInt32(Aayambil_fund_amount), Aayambil_fund_text,
                    Jivdaya_fund_id, Convert.ToInt32(Jivdaya_fund_amount), Jivdaya_fund_text,
                    Prabhavna_fund_id, Convert.ToInt32(Prabhavna_fund_amount), Prabhavna_fund_text,
                    Sadhamik_bhakti_khatu_id, Convert.ToInt32(Sadhamik_bhakti_khatu_amount), Sadhamik_bhakti_khatu_text,
                    Aaradhna_fund_id, Convert.ToInt32(Aaradhna_fund_amount) , Aaradhna_fund_text,
                   Sadhusadhvi_vayavachh_Fund_id, Convert.ToInt32(Sadhusadhvi_vayavachh_Fund_amount) , Sadhusadhvi_vayavachh_Fund_text,
                   Chaturmas_kaymi_aayambill_Fund_id, Convert.ToInt32(Chaturmas_kaymi_aayambill_Fund_amount) , Chaturmas_kaymi_aayambill_Fund_text,
                   Chaturmas_prathna_inami_dro_Fund_id, Convert.ToInt32(Chaturmas_prathna_inami_dro_Fund_amount)  , Chaturmas_prathna_inami_dro_Fund_text,
                   Chaturmas_poshadhvrat_kaymi_tithi_Fund_id, Convert.ToInt32(Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount)  , Chaturmas_poshadhvrat_kaymi_tithi_Fund_text,
                   Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id, Convert.ToInt32(Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount)  , Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text
                   , Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id, Convert.ToInt32(Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount)   , Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text,
                   Samarkam_Fund_id, Convert.ToInt32(Samarkam_Fund_amount)  , Samarkam_Fund_text,
                   Building_Fund_id, Convert.ToInt32(Building_Fund_amount) , Building_Fund_text, entry_type
                   );

                return obj;


            }
            catch (Exception ex)
            {
                return ex;

            }


        }



    }
}
