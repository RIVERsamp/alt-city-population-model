# alt-city-population-mod

const cities = [
  {
   rank: 1,
   city: New York City,
   state: New York,
   region: Northeast,
   alt_population: 17650000
   current_population: 8580000
   peak_population: 9520000
  },
   {
   rank: 2,
   city: Chicago,
   state: Illinois,
   region: Midwest,
   alt_population: 7315000 
   current_population: 2730000
   peak_population: 3626000
  },
   {
   rank: 3,
   city: Los Angeles,
   state: California,
   region: West,
   alt_population: 5432000 
   current_population: 3871000
   peak_population: 3920000
  },
   {
   rank: 4,
   city: Detroit,
   state: Michigan,
   region: Midwest,
   alt_population: 4025000 
   current_population: 651000
   peak_population: 1855000
  },
   {
   rank: 5,
   city: Philadelphia,
   state: Pennsylvania,
   region: Northeast,
   alt_population: 3451000
   current_population: 1574000
   peak_population: 2072000
  },
   {
   rank: 6,
   city: Houston,
   state: Texas,
   region: Southwest,
   alt_population: 3255000  
   current_population:
   peak_population:
  },
   {
   rank: 7, 
   city: Phoenix,
   state: Arizona,
   region: Southwest,
   alt_population: 2380000
   current_population:
   peak_population:
  },
   {
   rank: 8,
   city: San Antonio,
   state: Texas,
   region: Southwest,
   alt_population: 2100000
   current_population:
   peak_population:
  },
   {
   rank: 9,
   city: Cleveland,
   state: Ohio,
   region: Midwest,
   alt_population: 2055000
   current_population:
   peak_population:
  },
   {
   rank: 10, 
   city: San Diego,
   state: California,
   region: West,
   alt_population: 1890000  
   current_population:
   peak_population:
  },
   {
   rank: 11, 
   city: Dallas,
   state: Texas,
   region: Southwest,
   alt_population: 1876000
   current_population:
   peak_population:
  },
   {
   rank: 12,
   city: St. Louis, 
   state: Missouri,
   region: Midwest,
   alt_population: 1788000
   current_population:
   peak_population:
  },
   {
   rank: 13,
   city: Jacksonville,
   state: Florida,
   region: Southeast,
   alt_population: 1722000
   current_population:
   peak_population:
   },
   {
   rank: 14,
   city: Baltimore,
   state: Maryland,
   region: Northeast,
   alt_population: 1584000
   current_population:
   peak_population:
  },
   {
   rank: 15,
   city: Washington DC,
   state: District of Columbia,
   region: Northeast
   alt_population: 1561000
   current_population:
   peak_population:
  },
   {
   rank: 16,
   city: Miami,
   state: Florida,
   region: Southeast,
   alt_population: 1540000
   current_population:
   peak_population:
  },
   {
   rank: 17,
   city: Boston,
   state: Massachusetts,
   region: Northeast,
   alt_population: 1435000
   current_population:
   peak_population:
  },
   {
   rank: 18, 
   city: Charlotte,
   state: North Carolina,
   region: Southeast
   alt_population: 1407000
   current_population:
   peak_population:
  },
   {
   rank: 19, 
   city: San Francisco, 
   state: California,
   region: West,
   alt_population: 1310000
   current_population:
   peak_population:
  },
   {
   rank: 20,
   city: Seattle,
   state: Washington
   region: West,
   alt_population: 1302000
   current_population:
   peak_population:
  },
   {
   rank: 21,
   city: Fort Worth,
   state: Texas,
   region: Southwest
   alt_population: 1260000
   current_population:
   peak_population:
  },
   {
   rank: 22, 
   city: Pittsburgh,
   state: Pennsylvania, 
   region: Northeast,
   alt_population: 1241000
   current_population:
   peak_population:
  },
   {
   rank: 23,
   city: Memphis,
   state: Tennessee,
   region: Southeast,
   alt_population: 1240000
   current_population:
   peak_population:
  },
   {
   rank: 24,
   city: San Jose,
   state: California,
   region: West,
   alt_population: 1225000
   current_population:
   peak_population:
  },
   {
   rank: 25, 
   city: Austin,
   state: Texas,
   region: Southwest,
   alt_population: 1204000
   current_population:
   peak_population:
  },
   {
   rank: 26, 
   city: New Orleans,
   state: Louisiana,
   region: Southeast,
   alt_population: 1162000
   current_population:
   peak_population:
  },
   {
   rank: 27, 
   city: Indianapolis,
   state: Indiana,
   region: Midwest,
   alt_population: 1158000
   current_population:
   peak_population:
  },
   {
   rank: 28, 
   city: Columbus,
   state: Ohio,
   region: Midwest,
   alt_population: 1155000
   current_population:
   peak_population:
  },
   {
   rank: 29, 
   city: Milwaukee,
   state: Wisconsin,
   region: Midwest,
   alt_population: 1152000
   current_population:
   peak_population:
  },
   {
   rank: 30, 
   city: Las Vegas,
   state: Nevada,
   region: West,
   alt_population: 1120000
   current_population:
   peak_population:
  },
   {
   rank: 31,
   city: Atlanta,
   state: Georgia,
   region: Southeast,
   alt_population: 1090000
   current_population:
   peak_population:
  },
   {
   rank: 32, 
   city: Nashville,
   state: Tennessee,
   region: Southeast,
   alt_population: 1086000
   current_population:
   peak_population:
  },
   {
   rank: 33, 
   city: Denver,
   state: Colorado,
   region: West,
   alt_population: 1081000
   current_population:
   peak_population:
  },
   {
   rank: 34, 
   city: Kansas City,
   state: Missouri,
   region: Midwest,
   alt_population: 1060000
   current_population:
   peak_population:
  },
   {
   rank: 35, 
   city: Louisville,
   state: Kentucky,
   region: Southeast,
   alt_population: 1040000
   current_population:
   peak_population:
  },
   {
   rank: 36,
   city: Minneapolis,
   state: Minnesota,
   region: Midwest,
   alt_population: 1030000
   current_population:
   peak_population:
  },
   {
   rank: 37,
   city: Newark,
   state: New Jersey,
   region: Northeast,
   alt_population: 1022000
   current_population:
   peak_population:
  },
   {
   rank: 38, 
   city: Portland,
   state: Oregon,
   region: West,
   alt_population: 1022000
   current_population:
   peak_population:
  },
   {
   rank: 39, 
   city: Buffalo,
   state: New York,
   region: Northeast,
   alt_population: 1014000
   current_population:
   peak_population:
  },
   {
   rank: 40, 
   city: Tampa,
   state: Florida,
   region: Southeast,
   alt_population: 1008000
   current_population:
   peak_population:
  },
   {
   rank: 41,
   city: Oklahoma City,
   state: Oklahoma,
   region: Southwest,
   alt_population: 1002000
   current_population:
   peak_population:
   },
   {
   rank 42,
   city: Honolulu,
   state: Hawaii,
   region: West,
   alt_population: 966000
   current_population:
   peak_population:
   },
   {
   rank 43,
   city: Des Moines,
   state: Iowa,
   region: Midwest,
   alt_population: 965,000
   current_population:
   peak_population:
   },
   {
   rank 44,
   city: Long Beach,
   state: California,
   region: West,
   alt_population: 960000
   current_population:
   peak_population:
   },
   {
   rank 45,
   city: Cincinnati,
   state: Ohio,
   region: Midwest,
   alt_population: 952000
   current_population:
   peak_population:
   },
   {
   rank 46,
   city: El Paso,
   state: Texas,
   region: Southwest,
   alt_population: 910000
   current_population:
   peak_population:
   },
   {
   rank 47,
   city: Tulsa,
   state: Oklahoma,
   region: Southwest,
   alt_population: 905000
   current_population:
   peak_population:
   },
   {
   rank 48,
   city: Oakland,
   state: California,
   region: West,
   alt_population: 902000
   current_population:
   peak_population:
   },
   {
   rank 49,
   city: Wichita,
   state: Kansas,
   region: Midwest,
   alt_population: 851000
   current_population:
   peak_population:
   },
   {
   rank 50,
   city: Albuquerque,
   state: New Mexico,
   region: Southwest,
   alt_population: 850000
   current_population:
   peak_population:
   },
   {
   rank 51,
   city: New Haven, 
   state: Connecticut,
   region: Northeast,
   alt_population: 822000
   current_population:
   peak_population:
   },
   {
   rank 52,
   city: Birmingham,
   state: Alabama,
   region: Southeast,
   alt_population: 815000
   current_population:
   peak_population:
   },
   {
   rank 53,
   city: Fresno,
   state: California,
   region: West,
   alt_population: 814000
   current_population:
   peak_population:
   },
   {
   rank 54,
   city: Rochester,
   state: New York,
   region: Northeast,
   alt_population: 809000
   current_population:
   peak_population:
   },
   {
   rank 55,
   city: Omaha,
   state: Nebraska,
   region: Midwest,
   alt_population: 805000
   current_population:
   peak_population:
   },
   {
   rank 56,
   city: Jersey City,
   state: New Jersey,
   region: Northeast,
   alt_population: 791000
   current_population:
   peak_population:
   },
   {
   rank 57,
   city: Sacramento,
   state: California,
   region: West,
   alt_population: 786000
   current_population:
   peak_population:
   },
   {
   rank 58,
   city: Raleigh,
   state: North Carolina,
   region: Southeast,
   alt_population: 770000
   current_population:
   peak_population:
   },
   {
   rank 59,
   city: Tucson,
   state: Arizona,
   region: Southwest,
   alt_population: 769000
   current_population:
   peak_population:
   },
   {
   rank 60,
   city: Toledo,
   state: Ohio,
   region: Midwest,
   alt_population: 765000
   current_population:
   peak_population:
   },
   {
   rank 61,
   city: Providence,
   state: Rhode Island,
   region: Northeast,
   alt_population: 756000
   current_population:
   peak_population:
   },
   {
   rank 62,
   city: Virginia Beach,
   state: Virginia,
   region: Southeast,
   alt_population: 745000
   current_population:
   peak_population:
   },
   {
   rank 63,
   city: Norfolk,
   state: Virginia,
   region: Southeast,
   alt_population: 728000
   current_population:
   peak_population:
   },
   {
   rank 64,
   city: Colorado Springs,
   state: Colorado,
   region: West,
   alt_population: 714000
   current_population:
   peak_population:
   },
   {
   rank 65,
   city: St. Paul,
   state: Minnesota,
   region: Midwest,
   alt_population: 702000
   current_population:
   peak_population:
   },
   {
   rank 66,
   city: Hartford,
   state: Connecticut,
   region: Northeast,
   alt_population: 672000
   current_population:
   peak_population:
   },
   {
   rank 67,
   city: Anchorage,
   state: Alaska,
   region: West,
   alt_population: 665000
   current_population:
   peak_population:
   },
   {
   rank 68,
   city: Santa Ana,
   state: California,
   region: West,
   alt_population: 655000
   current_population:
   peak_population:
   },
   {
   rank 69,
   city: Syracuse,
   state: New York,
   region: Northeast,
   alt_population: 651000
   current_population:
   peak_population:
   },
   {
   rank 70,
   city: Little Rock,
   state: Arkansas,
   region: Southeast,
   alt_population: 640000
   current_population:
   peak_population:
   },
   {
   rank 71,
   city: Boise,
   state: Idaho,
   region: West,
   alt_population: 637000
   current_population:
   peak_population:
   },
   {
   rank 72,
   city: Portland,
   state: Maine,
   region: Northeast,
   alt_population: 632000
   current_population:
   peak_population:
   },
   {
   rank 73,
   city: Anaheim,
   state: California,
   region: West,
   alt_population: 630000
   current_population:
   peak_population:
   },
   {
   rank 74,
   city: Akron,
   state: Ohio,
   region: Midwest,
   alt_population: 624000
   current_population:
   peak_population:
   },
   {
   rank 75,
   city: Arlington,
   state: Texas,
   region: Southwest,
   alt_population: 624000
   current_population:
   peak_population:
   },
   {
   rank 76,
   city: Dayton,
   state: Ohio,
   region: Midwest,
   alt_population: 621000
   current_population:
   peak_population:
   },
   {
   rank 77,
   city: Charleston,
   state: South Carolina,
   region: Southeast,
   alt_population: 608000
   current_population:
   peak_population:
   },
   {
   rank 78,
   city: Salt Lake City,
   state: Utah,
   region: West,
   alt_population: 605000
   current_population:
   peak_population:
   },
   {
   rank 79,
   city: Jackson,
   state: Mississippi,
   region: Southeast,
   alt_population: 591000
   current_population:
   peak_population:
   },
   {
   rank 80,
   city: Aurora,
   state: Colorado,
   region: West,
   alt_population: 588000
   current_population:
   peak_population:
   },
   {
   rank 81,
   city: Worcester,
   state: Massachusetts,
   region: Northeast,
   alt_population: 585000
   current_population:
   peak_population:
   },
   {
   rank 82,
   city: Madison,
   state: Wisconsin,
   region: Midwest,
   alt_population: 575000
   current_population:
   peak_population:
   },
   {
   rank 83,
   city: Richmond,
   state: Virginia,
   region: Southeast,
   alt_population: 571000
   current_population:
   peak_population:
   },
   {
   rank 84,
   city: Grand Rapids,
   state: Michigan,
   region: Midwest,
   alt_population: 568000
   current_population:
   peak_population:
   },
   {
   rank 85,
   city: Charleston,
   state: West Virginia,
   region: Southeast,
   alt_population: 567000
   current_population:
   peak_population:
   },
   {
   rank 86,
   city: Mesa,
   state: Arizona,
   region: Southwest,
   alt_population: 565000
   current_population:
   peak_population:
   },
   {
   rank 87,
   city: Sioux Falls,
   state: South Dakota,
   region: Midwest,
   alt_population: 553000
   current_population:
   peak_population:
   },
   {
   rank 88,
   city: Orlando,
   state: Florida,
   region: Southeast,
   alt_population: 551000
   current_population:
   peak_population:
   },
   {
   rank 89,
   city: Spokane,
   state: Washington,
   region: West,
   alt_population: 545000
   current_population:
   peak_population:
   },
   {
   rank 90,
   city: Riverside,
   state: California,
   region: West,
   alt_population: 541000
   current_population:
   peak_population:
   },
   {
   rank 91,
   city: Billings,
   state: Montana,
   region: West,
   alt_population: 540000
   current_population:
   peak_population:
   },
   {
   rank 92,
   city: Bakersfield,
   state: California,
   region: West,
   alt_population: 532000
   current_population:
   peak_population:
   },
   {
   rank 93,
   city: Mobile,
   state: Alabama,
   region: Southeast,
   alt_population: 532000
   current_population:
   peak_population:
   },
   {
   rank 94,
   city: Lexington,
   state: Kentucky,
   region: Southeast,
   alt_population: 532000
   current_population:
   peak_population:
   },
   {
   rank 95,
   city: Corpus Christi,
   state: Texas,
   region: Southwest,
   alt_population: 530000
   current_population:
   peak_population:
   },
   {
   rank 96,
   city: Flint,
   state: Michigan,
   region: Midwest,
   alt_population: 525000
   current_population:
   peak_population:
   },
   {
   rank 97,
   city: Reno,
   state: Nevada,
   region: West,
   alt_population: 520000
   current_population:
   peak_population:
   },
   {
   rank 98,
   city: Stockton,
   state: California,
   region: West,
   alt_population: 512000
   current_population:
   peak_population:
   },
   {
   rank 99,
   city: Savannah,
   state: Georgia,
   region: Southeast,
   alt_population: 504000
   current_population:
   peak_population:
   },
   {
   rank 100,
   city: Henderson,
   state: Nevada,
   region: West,
   alt_population: 501000
   current_population:
   peak_population:
   },
   
];

