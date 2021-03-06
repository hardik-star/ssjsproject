﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ssjswebapi11032020.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class ssjsdataEntities : DbContext
    {
        public ssjsdataEntities()
            : base("name=ssjsdataEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<tbl_Access_Master> tbl_Access_Master { get; set; }
        public virtual DbSet<tbl_Entity_Master> tbl_Entity_Master { get; set; }
        public virtual DbSet<tbl_Member_Master> tbl_Member_Master { get; set; }
        public virtual DbSet<tbl_fund_type> tbl_fund_type { get; set; }
        public virtual DbSet<tbl_transaction_Master> tbl_transaction_Master { get; set; }
        public virtual DbSet<tbl_transaction_details> tbl_transaction_details { get; set; }
    
        public virtual ObjectResult<stp_saveUpdateUser_Result> stp_saveUpdateUser(Nullable<int> id, string username, string password, Nullable<int> memberId, string groups, string role, string sessionuser, string entry_type)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var usernameParameter = username != null ?
                new ObjectParameter("username", username) :
                new ObjectParameter("username", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            var memberIdParameter = memberId.HasValue ?
                new ObjectParameter("memberId", memberId) :
                new ObjectParameter("memberId", typeof(int));
    
            var groupsParameter = groups != null ?
                new ObjectParameter("groups", groups) :
                new ObjectParameter("groups", typeof(string));
    
            var roleParameter = role != null ?
                new ObjectParameter("role", role) :
                new ObjectParameter("role", typeof(string));
    
            var sessionuserParameter = sessionuser != null ?
                new ObjectParameter("sessionuser", sessionuser) :
                new ObjectParameter("sessionuser", typeof(string));
    
            var entry_typeParameter = entry_type != null ?
                new ObjectParameter("entry_type", entry_type) :
                new ObjectParameter("entry_type", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<stp_saveUpdateUser_Result>("stp_saveUpdateUser", idParameter, usernameParameter, passwordParameter, memberIdParameter, groupsParameter, roleParameter, sessionuserParameter, entry_typeParameter);
        }
    
        public virtual ObjectResult<stp_login_Result> stp_login(string username, string password)
        {
            var usernameParameter = username != null ?
                new ObjectParameter("username", username) :
                new ObjectParameter("username", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<stp_login_Result>("stp_login", usernameParameter, passwordParameter);
        }
    
        public virtual ObjectResult<bindalluser_Result> bindalluser()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bindalluser_Result>("bindalluser");
        }
    
        public virtual int stp_removeuser(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("stp_removeuser", idParameter);
        }
    
        public virtual ObjectResult<saveupdateentitydata_Result> saveupdateentitydata(Nullable<int> id, string code, string name, string address, string registration_no, string phone_no, string alt_phone_no, string entry_type, string sessionuser)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var codeParameter = code != null ?
                new ObjectParameter("code", code) :
                new ObjectParameter("code", typeof(string));
    
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            var addressParameter = address != null ?
                new ObjectParameter("address", address) :
                new ObjectParameter("address", typeof(string));
    
            var registration_noParameter = registration_no != null ?
                new ObjectParameter("registration_no", registration_no) :
                new ObjectParameter("registration_no", typeof(string));
    
            var phone_noParameter = phone_no != null ?
                new ObjectParameter("phone_no", phone_no) :
                new ObjectParameter("phone_no", typeof(string));
    
            var alt_phone_noParameter = alt_phone_no != null ?
                new ObjectParameter("alt_phone_no", alt_phone_no) :
                new ObjectParameter("alt_phone_no", typeof(string));
    
            var entry_typeParameter = entry_type != null ?
                new ObjectParameter("entry_type", entry_type) :
                new ObjectParameter("entry_type", typeof(string));
    
            var sessionuserParameter = sessionuser != null ?
                new ObjectParameter("sessionuser", sessionuser) :
                new ObjectParameter("sessionuser", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<saveupdateentitydata_Result>("saveupdateentitydata", idParameter, codeParameter, nameParameter, addressParameter, registration_noParameter, phone_noParameter, alt_phone_noParameter, entry_typeParameter, sessionuserParameter);
        }
    
        public virtual ObjectResult<stp_bind_entity_data_Result> stp_bind_entity_data()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<stp_bind_entity_data_Result>("stp_bind_entity_data");
        }
    
        public virtual int stp_remove_entity_data(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("stp_remove_entity_data", idParameter);
        }
    
        public virtual ObjectResult<saveupdatemember_Result> saveupdatemember(Nullable<int> id, string code, string f_name, string m_name, string l_name, string dob, string blood_group, string pancard_no, string votingcard_no, string aadharcard_no, string is_head_of_fimily, string hOF_id, string hOF_name, string hOF_relation, string isalive, string entry_type, string sessionuser)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var codeParameter = code != null ?
                new ObjectParameter("code", code) :
                new ObjectParameter("code", typeof(string));
    
            var f_nameParameter = f_name != null ?
                new ObjectParameter("f_name", f_name) :
                new ObjectParameter("f_name", typeof(string));
    
            var m_nameParameter = m_name != null ?
                new ObjectParameter("m_name", m_name) :
                new ObjectParameter("m_name", typeof(string));
    
            var l_nameParameter = l_name != null ?
                new ObjectParameter("l_name", l_name) :
                new ObjectParameter("l_name", typeof(string));
    
            var dobParameter = dob != null ?
                new ObjectParameter("dob", dob) :
                new ObjectParameter("dob", typeof(string));
    
            var blood_groupParameter = blood_group != null ?
                new ObjectParameter("blood_group", blood_group) :
                new ObjectParameter("blood_group", typeof(string));
    
            var pancard_noParameter = pancard_no != null ?
                new ObjectParameter("pancard_no", pancard_no) :
                new ObjectParameter("pancard_no", typeof(string));
    
            var votingcard_noParameter = votingcard_no != null ?
                new ObjectParameter("votingcard_no", votingcard_no) :
                new ObjectParameter("votingcard_no", typeof(string));
    
            var aadharcard_noParameter = aadharcard_no != null ?
                new ObjectParameter("aadharcard_no", aadharcard_no) :
                new ObjectParameter("aadharcard_no", typeof(string));
    
            var is_head_of_fimilyParameter = is_head_of_fimily != null ?
                new ObjectParameter("is_head_of_fimily", is_head_of_fimily) :
                new ObjectParameter("is_head_of_fimily", typeof(string));
    
            var hOF_idParameter = hOF_id != null ?
                new ObjectParameter("HOF_id", hOF_id) :
                new ObjectParameter("HOF_id", typeof(string));
    
            var hOF_nameParameter = hOF_name != null ?
                new ObjectParameter("HOF_name", hOF_name) :
                new ObjectParameter("HOF_name", typeof(string));
    
            var hOF_relationParameter = hOF_relation != null ?
                new ObjectParameter("HOF_relation", hOF_relation) :
                new ObjectParameter("HOF_relation", typeof(string));
    
            var isaliveParameter = isalive != null ?
                new ObjectParameter("isalive", isalive) :
                new ObjectParameter("isalive", typeof(string));
    
            var entry_typeParameter = entry_type != null ?
                new ObjectParameter("entry_type", entry_type) :
                new ObjectParameter("entry_type", typeof(string));
    
            var sessionuserParameter = sessionuser != null ?
                new ObjectParameter("sessionuser", sessionuser) :
                new ObjectParameter("sessionuser", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<saveupdatemember_Result>("saveupdatemember", idParameter, codeParameter, f_nameParameter, m_nameParameter, l_nameParameter, dobParameter, blood_groupParameter, pancard_noParameter, votingcard_noParameter, aadharcard_noParameter, is_head_of_fimilyParameter, hOF_idParameter, hOF_nameParameter, hOF_relationParameter, isaliveParameter, entry_typeParameter, sessionuserParameter);
        }
    
        public virtual ObjectResult<stp_bind_memberdata_Result> stp_bind_memberdata()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<stp_bind_memberdata_Result>("stp_bind_memberdata");
        }
    
        public virtual int stp_removemember(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("stp_removemember", idParameter);
        }
    
        public virtual ObjectResult<binduser_for_updatedata_Result> binduser_for_updatedata(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<binduser_for_updatedata_Result>("binduser_for_updatedata", idParameter);
        }
    
        public virtual ObjectResult<binduser_for_Entitydata_Result> binduser_for_Entitydata(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<binduser_for_Entitydata_Result>("binduser_for_Entitydata", idParameter);
        }
    
        public virtual ObjectResult<binduser_for_memberdata_Result> binduser_for_memberdata(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<binduser_for_memberdata_Result>("binduser_for_memberdata", idParameter);
        }
    
        public virtual ObjectResult<bind_fundtype_Result> bind_fundtype()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bind_fundtype_Result>("bind_fundtype");
        }
    
        public virtual ObjectResult<stp_save_transaction_data_Result> stp_save_transaction_data(Nullable<int> receipt_id, string receipt_number, string receipt_date, Nullable<int> member_id, string member_Name, Nullable<int> doner_id, string doner_Name, string amount_paid, string sessionuser, string istithi, string tithi_date, string yearly_membership_fee_id, Nullable<int> yearly_membership_fee_amount, string yearly_membership_fee_text, string lifelong_membership_fee_id, Nullable<int> lifelong_membership_fee_amount, string lifelong_membership_fee_text, string general_fund_id, Nullable<int> general_fund_amount, string general_fund_text, string aayambil_fund_id, Nullable<int> aayambi_fund_amount, string aayambi_fund_text, string jivdaya_fund_id, Nullable<int> jivdaya_fund_amount, string jivdaya_fund_text, string prabhavna_fund_id, Nullable<int> prabhavna_fund_amount, string prabhavna_fund_text, string sadhamik_bhakti_khatu_id, Nullable<int> sadhamik_bhakti_khatu_amount, string sadhamik_bhakti_khatu_text, string aaradhna_fund_id, Nullable<int> aaradhna_fund_amount, string aaradhna_fund_text, string sadhusadhvi_vayavachh_Fund_id, Nullable<int> sadhusadhvi_vayavachh_Fund_amount, string sadhusadhvi_vayavachh_Fund_text, string chaturmas_kaymi_aayambill_Fund_id, Nullable<int> chaturmas_kaymi_aayambill_Fund_amount, string chaturmas_kaymi_aayambill_Fund_text, string chaturmas_prathna_inami_dro_Fund_id, Nullable<int> chaturmas_prathna_inami_dro_Fund_amount, string chaturmas_prathna_inami_dro_Fund_text, string chaturmas_poshadhvrat_kaymi_tithi_Fund_id, Nullable<int> chaturmas_poshadhvrat_kaymi_tithi_Fund_amount, string chaturmas_poshadhvrat_kaymi_tithi_Fund_text, string chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id, Nullable<int> chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount, string chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text, string chaturmas_kadukadiyatu_kaymi_tithi_Fund_id, Nullable<int> chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount, string chaturmas_kadukadiyatu_kaymi_tithi_Fund_text, string samarkam_Fund_id, Nullable<int> samarkam_Fund_amount, string samarkam_Fund_text, string building_Fund_id, Nullable<int> building_Fund_amount, string building_Fund_text, string entry_type)
        {
            var receipt_idParameter = receipt_id.HasValue ?
                new ObjectParameter("receipt_id", receipt_id) :
                new ObjectParameter("receipt_id", typeof(int));
    
            var receipt_numberParameter = receipt_number != null ?
                new ObjectParameter("receipt_number", receipt_number) :
                new ObjectParameter("receipt_number", typeof(string));
    
            var receipt_dateParameter = receipt_date != null ?
                new ObjectParameter("receipt_date", receipt_date) :
                new ObjectParameter("receipt_date", typeof(string));
    
            var member_idParameter = member_id.HasValue ?
                new ObjectParameter("Member_id", member_id) :
                new ObjectParameter("Member_id", typeof(int));
    
            var member_NameParameter = member_Name != null ?
                new ObjectParameter("Member_Name", member_Name) :
                new ObjectParameter("Member_Name", typeof(string));
    
            var doner_idParameter = doner_id.HasValue ?
                new ObjectParameter("Doner_id", doner_id) :
                new ObjectParameter("Doner_id", typeof(int));
    
            var doner_NameParameter = doner_Name != null ?
                new ObjectParameter("Doner_Name", doner_Name) :
                new ObjectParameter("Doner_Name", typeof(string));
    
            var amount_paidParameter = amount_paid != null ?
                new ObjectParameter("amount_paid", amount_paid) :
                new ObjectParameter("amount_paid", typeof(string));
    
            var sessionuserParameter = sessionuser != null ?
                new ObjectParameter("sessionuser", sessionuser) :
                new ObjectParameter("sessionuser", typeof(string));
    
            var istithiParameter = istithi != null ?
                new ObjectParameter("Istithi", istithi) :
                new ObjectParameter("Istithi", typeof(string));
    
            var tithi_dateParameter = tithi_date != null ?
                new ObjectParameter("tithi_date", tithi_date) :
                new ObjectParameter("tithi_date", typeof(string));
    
            var yearly_membership_fee_idParameter = yearly_membership_fee_id != null ?
                new ObjectParameter("Yearly_membership_fee_id", yearly_membership_fee_id) :
                new ObjectParameter("Yearly_membership_fee_id", typeof(string));
    
            var yearly_membership_fee_amountParameter = yearly_membership_fee_amount.HasValue ?
                new ObjectParameter("Yearly_membership_fee_amount", yearly_membership_fee_amount) :
                new ObjectParameter("Yearly_membership_fee_amount", typeof(int));
    
            var yearly_membership_fee_textParameter = yearly_membership_fee_text != null ?
                new ObjectParameter("Yearly_membership_fee_text", yearly_membership_fee_text) :
                new ObjectParameter("Yearly_membership_fee_text", typeof(string));
    
            var lifelong_membership_fee_idParameter = lifelong_membership_fee_id != null ?
                new ObjectParameter("Lifelong_membership_fee_id", lifelong_membership_fee_id) :
                new ObjectParameter("Lifelong_membership_fee_id", typeof(string));
    
            var lifelong_membership_fee_amountParameter = lifelong_membership_fee_amount.HasValue ?
                new ObjectParameter("Lifelong_membership_fee_amount", lifelong_membership_fee_amount) :
                new ObjectParameter("Lifelong_membership_fee_amount", typeof(int));
    
            var lifelong_membership_fee_textParameter = lifelong_membership_fee_text != null ?
                new ObjectParameter("Lifelong_membership_fee_text", lifelong_membership_fee_text) :
                new ObjectParameter("Lifelong_membership_fee_text", typeof(string));
    
            var general_fund_idParameter = general_fund_id != null ?
                new ObjectParameter("General_fund_id", general_fund_id) :
                new ObjectParameter("General_fund_id", typeof(string));
    
            var general_fund_amountParameter = general_fund_amount.HasValue ?
                new ObjectParameter("General_fund_amount", general_fund_amount) :
                new ObjectParameter("General_fund_amount", typeof(int));
    
            var general_fund_textParameter = general_fund_text != null ?
                new ObjectParameter("General_fund_text", general_fund_text) :
                new ObjectParameter("General_fund_text", typeof(string));
    
            var aayambil_fund_idParameter = aayambil_fund_id != null ?
                new ObjectParameter("Aayambil_fund_id", aayambil_fund_id) :
                new ObjectParameter("Aayambil_fund_id", typeof(string));
    
            var aayambi_fund_amountParameter = aayambi_fund_amount.HasValue ?
                new ObjectParameter("Aayambi_fund_amount", aayambi_fund_amount) :
                new ObjectParameter("Aayambi_fund_amount", typeof(int));
    
            var aayambi_fund_textParameter = aayambi_fund_text != null ?
                new ObjectParameter("Aayambi_fund_text", aayambi_fund_text) :
                new ObjectParameter("Aayambi_fund_text", typeof(string));
    
            var jivdaya_fund_idParameter = jivdaya_fund_id != null ?
                new ObjectParameter("Jivdaya_fund_id", jivdaya_fund_id) :
                new ObjectParameter("Jivdaya_fund_id", typeof(string));
    
            var jivdaya_fund_amountParameter = jivdaya_fund_amount.HasValue ?
                new ObjectParameter("Jivdaya_fund_amount", jivdaya_fund_amount) :
                new ObjectParameter("Jivdaya_fund_amount", typeof(int));
    
            var jivdaya_fund_textParameter = jivdaya_fund_text != null ?
                new ObjectParameter("Jivdaya_fund_text", jivdaya_fund_text) :
                new ObjectParameter("Jivdaya_fund_text", typeof(string));
    
            var prabhavna_fund_idParameter = prabhavna_fund_id != null ?
                new ObjectParameter("Prabhavna_fund_id", prabhavna_fund_id) :
                new ObjectParameter("Prabhavna_fund_id", typeof(string));
    
            var prabhavna_fund_amountParameter = prabhavna_fund_amount.HasValue ?
                new ObjectParameter("Prabhavna_fund_amount", prabhavna_fund_amount) :
                new ObjectParameter("Prabhavna_fund_amount", typeof(int));
    
            var prabhavna_fund_textParameter = prabhavna_fund_text != null ?
                new ObjectParameter("Prabhavna_fund_text", prabhavna_fund_text) :
                new ObjectParameter("Prabhavna_fund_text", typeof(string));
    
            var sadhamik_bhakti_khatu_idParameter = sadhamik_bhakti_khatu_id != null ?
                new ObjectParameter("Sadhamik_bhakti_khatu_id", sadhamik_bhakti_khatu_id) :
                new ObjectParameter("Sadhamik_bhakti_khatu_id", typeof(string));
    
            var sadhamik_bhakti_khatu_amountParameter = sadhamik_bhakti_khatu_amount.HasValue ?
                new ObjectParameter("Sadhamik_bhakti_khatu_amount", sadhamik_bhakti_khatu_amount) :
                new ObjectParameter("Sadhamik_bhakti_khatu_amount", typeof(int));
    
            var sadhamik_bhakti_khatu_textParameter = sadhamik_bhakti_khatu_text != null ?
                new ObjectParameter("Sadhamik_bhakti_khatu_text", sadhamik_bhakti_khatu_text) :
                new ObjectParameter("Sadhamik_bhakti_khatu_text", typeof(string));
    
            var aaradhna_fund_idParameter = aaradhna_fund_id != null ?
                new ObjectParameter("Aaradhna_fund_id", aaradhna_fund_id) :
                new ObjectParameter("Aaradhna_fund_id", typeof(string));
    
            var aaradhna_fund_amountParameter = aaradhna_fund_amount.HasValue ?
                new ObjectParameter("Aaradhna_fund_amount", aaradhna_fund_amount) :
                new ObjectParameter("Aaradhna_fund_amount", typeof(int));
    
            var aaradhna_fund_textParameter = aaradhna_fund_text != null ?
                new ObjectParameter("Aaradhna_fund_text", aaradhna_fund_text) :
                new ObjectParameter("Aaradhna_fund_text", typeof(string));
    
            var sadhusadhvi_vayavachh_Fund_idParameter = sadhusadhvi_vayavachh_Fund_id != null ?
                new ObjectParameter("Sadhusadhvi_vayavachh_Fund_id", sadhusadhvi_vayavachh_Fund_id) :
                new ObjectParameter("Sadhusadhvi_vayavachh_Fund_id", typeof(string));
    
            var sadhusadhvi_vayavachh_Fund_amountParameter = sadhusadhvi_vayavachh_Fund_amount.HasValue ?
                new ObjectParameter("Sadhusadhvi_vayavachh_Fund_amount", sadhusadhvi_vayavachh_Fund_amount) :
                new ObjectParameter("Sadhusadhvi_vayavachh_Fund_amount", typeof(int));
    
            var sadhusadhvi_vayavachh_Fund_textParameter = sadhusadhvi_vayavachh_Fund_text != null ?
                new ObjectParameter("Sadhusadhvi_vayavachh_Fund_text", sadhusadhvi_vayavachh_Fund_text) :
                new ObjectParameter("Sadhusadhvi_vayavachh_Fund_text", typeof(string));
    
            var chaturmas_kaymi_aayambill_Fund_idParameter = chaturmas_kaymi_aayambill_Fund_id != null ?
                new ObjectParameter("Chaturmas_kaymi_aayambill_Fund_id", chaturmas_kaymi_aayambill_Fund_id) :
                new ObjectParameter("Chaturmas_kaymi_aayambill_Fund_id", typeof(string));
    
            var chaturmas_kaymi_aayambill_Fund_amountParameter = chaturmas_kaymi_aayambill_Fund_amount.HasValue ?
                new ObjectParameter("Chaturmas_kaymi_aayambill_Fund_amount", chaturmas_kaymi_aayambill_Fund_amount) :
                new ObjectParameter("Chaturmas_kaymi_aayambill_Fund_amount", typeof(int));
    
            var chaturmas_kaymi_aayambill_Fund_textParameter = chaturmas_kaymi_aayambill_Fund_text != null ?
                new ObjectParameter("Chaturmas_kaymi_aayambill_Fund_text", chaturmas_kaymi_aayambill_Fund_text) :
                new ObjectParameter("Chaturmas_kaymi_aayambill_Fund_text", typeof(string));
    
            var chaturmas_prathna_inami_dro_Fund_idParameter = chaturmas_prathna_inami_dro_Fund_id != null ?
                new ObjectParameter("Chaturmas_prathna_inami_dro_Fund_id", chaturmas_prathna_inami_dro_Fund_id) :
                new ObjectParameter("Chaturmas_prathna_inami_dro_Fund_id", typeof(string));
    
            var chaturmas_prathna_inami_dro_Fund_amountParameter = chaturmas_prathna_inami_dro_Fund_amount.HasValue ?
                new ObjectParameter("Chaturmas_prathna_inami_dro_Fund_amount", chaturmas_prathna_inami_dro_Fund_amount) :
                new ObjectParameter("Chaturmas_prathna_inami_dro_Fund_amount", typeof(int));
    
            var chaturmas_prathna_inami_dro_Fund_textParameter = chaturmas_prathna_inami_dro_Fund_text != null ?
                new ObjectParameter("Chaturmas_prathna_inami_dro_Fund_text", chaturmas_prathna_inami_dro_Fund_text) :
                new ObjectParameter("Chaturmas_prathna_inami_dro_Fund_text", typeof(string));
    
            var chaturmas_poshadhvrat_kaymi_tithi_Fund_idParameter = chaturmas_poshadhvrat_kaymi_tithi_Fund_id != null ?
                new ObjectParameter("Chaturmas_poshadhvrat_kaymi_tithi_Fund_id", chaturmas_poshadhvrat_kaymi_tithi_Fund_id) :
                new ObjectParameter("Chaturmas_poshadhvrat_kaymi_tithi_Fund_id", typeof(string));
    
            var chaturmas_poshadhvrat_kaymi_tithi_Fund_amountParameter = chaturmas_poshadhvrat_kaymi_tithi_Fund_amount.HasValue ?
                new ObjectParameter("Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount", chaturmas_poshadhvrat_kaymi_tithi_Fund_amount) :
                new ObjectParameter("Chaturmas_poshadhvrat_kaymi_tithi_Fund_amount", typeof(int));
    
            var chaturmas_poshadhvrat_kaymi_tithi_Fund_textParameter = chaturmas_poshadhvrat_kaymi_tithi_Fund_text != null ?
                new ObjectParameter("Chaturmas_poshadhvrat_kaymi_tithi_Fund_text", chaturmas_poshadhvrat_kaymi_tithi_Fund_text) :
                new ObjectParameter("Chaturmas_poshadhvrat_kaymi_tithi_Fund_text", typeof(string));
    
            var chaturmas_sadharmik_bhaktikaymi_tithi_Fund_idParameter = chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id != null ?
                new ObjectParameter("Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id", chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id) :
                new ObjectParameter("Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_id", typeof(string));
    
            var chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amountParameter = chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount.HasValue ?
                new ObjectParameter("Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount", chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount) :
                new ObjectParameter("Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amount", typeof(int));
    
            var chaturmas_sadharmik_bhaktikaymi_tithi_Fund_textParameter = chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text != null ?
                new ObjectParameter("Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text", chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text) :
                new ObjectParameter("Chaturmas_sadharmik_bhaktikaymi_tithi_Fund_text", typeof(string));
    
            var chaturmas_kadukadiyatu_kaymi_tithi_Fund_idParameter = chaturmas_kadukadiyatu_kaymi_tithi_Fund_id != null ?
                new ObjectParameter("Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id", chaturmas_kadukadiyatu_kaymi_tithi_Fund_id) :
                new ObjectParameter("Chaturmas_kadukadiyatu_kaymi_tithi_Fund_id", typeof(string));
    
            var chaturmas_kadukadiyatu_kaymi_tithi_Fund_amountParameter = chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount.HasValue ?
                new ObjectParameter("Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount", chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount) :
                new ObjectParameter("Chaturmas_kadukadiyatu_kaymi_tithi_Fund_amount", typeof(int));
    
            var chaturmas_kadukadiyatu_kaymi_tithi_Fund_textParameter = chaturmas_kadukadiyatu_kaymi_tithi_Fund_text != null ?
                new ObjectParameter("Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text", chaturmas_kadukadiyatu_kaymi_tithi_Fund_text) :
                new ObjectParameter("Chaturmas_kadukadiyatu_kaymi_tithi_Fund_text", typeof(string));
    
            var samarkam_Fund_idParameter = samarkam_Fund_id != null ?
                new ObjectParameter("Samarkam_Fund_id", samarkam_Fund_id) :
                new ObjectParameter("Samarkam_Fund_id", typeof(string));
    
            var samarkam_Fund_amountParameter = samarkam_Fund_amount.HasValue ?
                new ObjectParameter("Samarkam_Fund_amount", samarkam_Fund_amount) :
                new ObjectParameter("Samarkam_Fund_amount", typeof(int));
    
            var samarkam_Fund_textParameter = samarkam_Fund_text != null ?
                new ObjectParameter("Samarkam_Fund_text", samarkam_Fund_text) :
                new ObjectParameter("Samarkam_Fund_text", typeof(string));
    
            var building_Fund_idParameter = building_Fund_id != null ?
                new ObjectParameter("Building_Fund_id", building_Fund_id) :
                new ObjectParameter("Building_Fund_id", typeof(string));
    
            var building_Fund_amountParameter = building_Fund_amount.HasValue ?
                new ObjectParameter("Building_Fund_amount", building_Fund_amount) :
                new ObjectParameter("Building_Fund_amount", typeof(int));
    
            var building_Fund_textParameter = building_Fund_text != null ?
                new ObjectParameter("Building_Fund_text", building_Fund_text) :
                new ObjectParameter("Building_Fund_text", typeof(string));
    
            var entry_typeParameter = entry_type != null ?
                new ObjectParameter("entry_type", entry_type) :
                new ObjectParameter("entry_type", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<stp_save_transaction_data_Result>("stp_save_transaction_data", receipt_idParameter, receipt_numberParameter, receipt_dateParameter, member_idParameter, member_NameParameter, doner_idParameter, doner_NameParameter, amount_paidParameter, sessionuserParameter, istithiParameter, tithi_dateParameter, yearly_membership_fee_idParameter, yearly_membership_fee_amountParameter, yearly_membership_fee_textParameter, lifelong_membership_fee_idParameter, lifelong_membership_fee_amountParameter, lifelong_membership_fee_textParameter, general_fund_idParameter, general_fund_amountParameter, general_fund_textParameter, aayambil_fund_idParameter, aayambi_fund_amountParameter, aayambi_fund_textParameter, jivdaya_fund_idParameter, jivdaya_fund_amountParameter, jivdaya_fund_textParameter, prabhavna_fund_idParameter, prabhavna_fund_amountParameter, prabhavna_fund_textParameter, sadhamik_bhakti_khatu_idParameter, sadhamik_bhakti_khatu_amountParameter, sadhamik_bhakti_khatu_textParameter, aaradhna_fund_idParameter, aaradhna_fund_amountParameter, aaradhna_fund_textParameter, sadhusadhvi_vayavachh_Fund_idParameter, sadhusadhvi_vayavachh_Fund_amountParameter, sadhusadhvi_vayavachh_Fund_textParameter, chaturmas_kaymi_aayambill_Fund_idParameter, chaturmas_kaymi_aayambill_Fund_amountParameter, chaturmas_kaymi_aayambill_Fund_textParameter, chaturmas_prathna_inami_dro_Fund_idParameter, chaturmas_prathna_inami_dro_Fund_amountParameter, chaturmas_prathna_inami_dro_Fund_textParameter, chaturmas_poshadhvrat_kaymi_tithi_Fund_idParameter, chaturmas_poshadhvrat_kaymi_tithi_Fund_amountParameter, chaturmas_poshadhvrat_kaymi_tithi_Fund_textParameter, chaturmas_sadharmik_bhaktikaymi_tithi_Fund_idParameter, chaturmas_sadharmik_bhaktikaymi_tithi_Fund_amountParameter, chaturmas_sadharmik_bhaktikaymi_tithi_Fund_textParameter, chaturmas_kadukadiyatu_kaymi_tithi_Fund_idParameter, chaturmas_kadukadiyatu_kaymi_tithi_Fund_amountParameter, chaturmas_kadukadiyatu_kaymi_tithi_Fund_textParameter, samarkam_Fund_idParameter, samarkam_Fund_amountParameter, samarkam_Fund_textParameter, building_Fund_idParameter, building_Fund_amountParameter, building_Fund_textParameter, entry_typeParameter);
        }
    
        public virtual ObjectResult<bind_tranjection_data_Result> bind_tranjection_data()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bind_tranjection_data_Result>("bind_tranjection_data");
        }
    
        public virtual ObjectResult<Nullable<int>> stp_bind_receipt_no()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("stp_bind_receipt_no");
        }
    
        public virtual ObjectResult<bind_transaction_master_data_Result> bind_transaction_master_data()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bind_transaction_master_data_Result>("bind_transaction_master_data");
        }
    
        public virtual int remove_transaction(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("remove_transaction", idParameter);
        }
    
        public virtual int bind_transaction_data()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("bind_transaction_data");
        }
    
        public virtual ObjectResult<bind_transaction_details_data_Result> bind_transaction_details_data()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bind_transaction_details_data_Result>("bind_transaction_details_data");
        }
    }
}
