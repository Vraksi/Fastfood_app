using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FastFoodAppServer.Models.Non_Generated
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        // TODO: Skal laves om sådan den kan være null
        public string AccessoriesAdded { get; set; }
    }
}
