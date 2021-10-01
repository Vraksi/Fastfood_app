using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FastFoodAppServer.Models.Non_Generated
{
    public class Accessory
    {
        public int Id { get; set; }
        public string OrderlinesId { get; set; }
        public int PriceOfItem { get; set; }
        public string Category { get; set; }
    }
}
