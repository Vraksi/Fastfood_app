using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FastFoodAppServer.Models.Non_Generated
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TelephoneNumber { get; set; }
        public string Address { get; set; }
        public string LoginId { get; set; }
        public AspNetUserLogins login { get; set; }

        public Customer()
        {
           
        }
    }
}
