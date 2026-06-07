# alt-city-population-mod

const cities = [
  {
   rank: 1,
   city: New York City,
   state: New York,
   region: Northeast,
   alt_population: 17640000
  },
   {
   rank: 2,
   city: Chicago,
   state: Illinois,
   region: Midwest,
   alt_population: 7315000 
  },
   {
   rank: 3,
   city: Los Angeles,
   state: California,
   region: West,
   alt_population: 5432000  
  },
   {
   rank: 4,
   city: Detroit,
   state: Michigan,
   region: Midwest,
   alt_population: 4025000 
  },
   {
   rank: 5,
   city: Philadelphia,
   state: Pennsylvania,
   region: Northeast,
   alt_population: 3451000
  },
   {
   rank: 6,
   city: Houston,
   state: Texas,
   region: Southwest,
   alt_population: 3255000  
  },
   {
   rank: 7, 
   city: Phoenix,
   state: Arizona,
   region: Southwest,
   alt_population: 2380000
  },
   {
   rank: 8,
   city: San Antonio,
   state: Texas,
   region: Southwest,
   alt_population: 2100000
  },
   {
   rank: 9,
   city: Cleveland,
   state: Ohio,
   region: Midwest,
   alt_population: 2055000
  },
   {
   rank: 10, 
   city: San Diego,
   state: California,
   region: West,
   alt_population: 1890000  
  },
   {
   rank: 11, 
   city: Dallas,
   state: Texas,
   region: Southwest,
   alt_population: 1876000
  },
   {
   rank: 12,
   city: St. Louis, 
   state: Missouri,
   region: Midwest,
   alt_population: 1788000 
  },
   {
   rank: 13,
   city: Jacksonville,
   state: Florida,
   region: Southeast,
   alt_population: 1722000
   },
   {
   rank: 14,
   city: Baltimore,
   state: Maryland,
   region: Northeast,
   alt_population: 1584000
  },
   {
   rank: 15,
   city: Washington DC,
   state: District of Columbia,
   region: Northeast
   alt_population: 1561000
  },
   {
   rank: 16,
   city: Miami,
   state: Florida,
   region: Southeast,
   alt_population: 1540000
  },
   {
   rank: 17,
   city: Boston,
   state: Massachusetts,
   region: Northeast,
   alt_population: 1435000
  },
   {
   rank: 18, 
   city: Charlotte,
   state: North Carolina,
   region: Southeast
   alt_population: 1407000
  },
   {
   rank: 19, 
   city: San Francisco, 
   state: California,
   region: West,
   alt_population: 1310000  
  },
   {
   rank: 20,
   city: Seattle,
   state: Washington
   region: West,
   alt_population: 1302000  
  },
   {
   rank: 21,
   city: Fort Worth,
   state: Texas,
   region: Southwest
   alt_population: 1260000
  },
   {
   rank: 22, 
   city: Pittsburgh,
   state: Pennsylvania, 
   region: Northeast,
   alt_population: 1241000
  },
   {
   rank: 23,
   city: Memphis,
   state: Tennessee,
   region: Southeast,
   alt_population: 1240000
  },
   {
   rank: 24,
   city: San Jose,
   state: California,
   region: West,
   alt_population: 1225000  
  },
   {
   rank: 25, 
   city: Austin,
   state: Texas,
   region: Southwest,
   alt_population: 1204000
  },
   {
   rank: 26, 
   city: New Orleans,
   state: Louisiana,
   region: Southeast,
   alt_population: 1162000
  },
   {
   rank: 27, 
   city: Indianapolis,
   state: Indiana,
   region: Midwest,
   alt_population: 1158000 
  },
   {
   rank: 28, 
   city: Columbus,
   state: Ohio,
   region: Midwest,
   alt_population: 1155000 
  },
   {
   rank: 29, 
   city: Milwaukee,
   state: Wisconsin,
   region: Midwest,
   alt_population: 1152000 
  },
   {
   rank: 30, 
   city: Las Vegas,
   state: Nevada,
   region: West,
   alt_population: 1120000  
  },
   {
   rank: 31,
   city: Atlanta,
   state: Georgia,
   region: Southeast,
   alt_population: 1090000
  },
   {
   rank: 32, 
   city: Nashville,
   state: Tennessee,
   region: Southeast,
   alt_population: 1086000
  },
   {
   rank: 33, 
   city: Denver,
   state: Colorado,
   region: West,
   alt_population: 1081000 
  },
   {
   rank: 34, 
   city: Kansas City,
   state: Missouri,
   region: Midwest,
   alt_population: 1060000 
  },
   {
   rank: 35, 
   city: Louisville,
   state: Kentucky,
   region: Southeast,
   alt_population: 1040000
  },
   {
   rank: 36,
   city: Minneapolis,
   state: Minnesota,
   region: Midwest,
   alt_population: 1030000 
  },
   {
   rank: 37,
   city: Newark,
   state: New Jersey,
   region: Northeast,
   alt_population: 1022000
  },
   {
   rank: 38, 
   city: Portland,
   state: Oregon,
   region: West,
   alt_population: 1022000  
  },
   {
   rank: 39, 
   city: Buffalo,
   state: New York,
   region: Northeast,
   alt_population: 1014000
  },
   {
   rank: 40, 
   city: Tampa,
   state: Florida,
   region: Southeast,
   alt_population: 1008000
  },
   {
   rank: 41,
   city: Oklahoma City,
   state: Oklahoma,
   region: Southwest,
   alt_population: 1002000
   },
   {
   rank 42,
   city: Honolulu,
   state: Hawaii,
   region: West,
   alt_population: 966000
   },
   {
   rank 43,
   city: Des Moines,
   state: Iowa,
   region: Midwest,
   alt_population: 965,000
   },
   {
   rank 44,
   city: Long Beach,
   state: California,
   region: West,
   alt_population: 960000
   },
   {
   rank 45,
   city: Cincinnati,
   state: Ohio,
   region: Midwest,
   alt_population: 952000
   },
   {
   rank 46,
   city: El Paso,
   state: Texas,
   region: Southwest,
   alt_population: 910000
   },
   {
   rank 47,
   city: Tulsa,
   state: Oklahoma,
   region: Southwest,
   alt_population: 905000
   },
   {
   rank 48,
   city: Oakland,
   state: California,
   region: West,
   alt_population: 902000
   },
   {
   rank 49,
   city: Wichita,
   state: Kansas,
   region: Midwest,
   alt_population: 851000
   },
   {
   rank 50,
   city: Albuquerque,
   state: New Mexico,
   region: Southwest,
   alt_population: 850000
   },
   
];

