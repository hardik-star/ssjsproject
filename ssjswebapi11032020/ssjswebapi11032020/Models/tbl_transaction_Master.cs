//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class tbl_transaction_Master
    {
        public int id { get; set; }
        public string receipt_no { get; set; }
        public string receptdate { get; set; }
        public Nullable<int> member_id { get; set; }
        public string member_name { get; set; }
        public string donor_id { get; set; }
        public string donor_name { get; set; }
        public Nullable<int> total_transaction { get; set; }
        public string tranjection_amount { get; set; }
        public string amount_paid { get; set; }
        public Nullable<bool> isactive { get; set; }
        public Nullable<System.DateTime> createddate { get; set; }
        public string createdby { get; set; }
        public string updatedby { get; set; }
        public Nullable<System.DateTime> updatedate { get; set; }
    }
}