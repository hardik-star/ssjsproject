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
    
    public partial class tbl_transaction_details
    {
        public int id { get; set; }
        public string TM_id { get; set; }
        public string Fund_id { get; set; }
        public string fund_text { get; set; }
        public Nullable<int> amount { get; set; }
        public string istithi { get; set; }
        public string thithidate { get; set; }
        public Nullable<bool> isactive { get; set; }
        public Nullable<System.DateTime> createddate { get; set; }
        public string createdby { get; set; }
        public string updatedby { get; set; }
        public Nullable<System.DateTime> updatedate { get; set; }
    }
}