# alt-city-population-mod
# Attention: Some of the current populations or peak populations may appear to be inaccurate; sometimes they include all boroughs, and also rounding to the nearest number, and please enjoy

# !!! BIG POPULATION ALTERNATIVE PROJECTIONS!!!

const cities = [
  {
   rank: 1,
   city: New York City,
   state: New York,
   region: Northeast,
   country: United States,
   alt_population: 17850000
   current_population: 8580000
   peak_population: 9520000
  },
   {
   rank: 2,
   city: Chicago,
   state: Illinois,
   region: Midwest,
   country: United States,
   alt_population: 7560000
   current_population: 2730000
   peak_population: 3626000
  },
   {
   rank: 3,
   city: Los Angeles,
   state: California,
   region: West,
   country: United States,
   alt_population: 5530000
   current_population: 3871000
   peak_population: 3920000
  },
   {
   rank: 4,
   city: Detroit,
   state: Michigan,
   region: Midwest,
   country: United States,
   alt_population: 41510000 
   current_population: 651000
   peak_population: 1855000
  },
  {
   rank: 5,
   city: Houston,
   state: Texas,
   region: Southwest,
   country: United States,
   alt_population: 3621000  
   current_population: 2420000
   peak_population: 2420000
  },
   {
   rank: 6,
   city: Philadelphia,
   state: Pennsylvania,
   region: Northeast,
   country: United States,
   alt_population: 3500000
   current_population: 1574000
   peak_population: 2072000
  },
   {
   rank: 7, 
   city: Phoenix,
   state: Arizona,
   region: Southwest,
   country: United States,
   alt_population: 2506000
   current_population: 1680000
   peak_population: 1680000
  },
  {
   rank: 8, 
   city: San Diego,
   state: California,
   region: West,
   country: United States,
   alt_population: 2184000  
   current_population: 1410000
   peak_population: 1420000
  },
   {
   rank: 9,
   city: San Antonio,
   state: Texas,
   region: Southwest,
   country: United States,
   alt_population: 2121000
   current_population: 1580000
   peak_population: 1580000
  },
   {
   rank: 10,
   city: Cleveland,
   state: Ohio,
   region: Midwest,
   country: United States,
   alt_population: 2072000
   current_population: 370000
   peak_population: 920000
  },
   {
   rank: 11, 
   city: Dallas,
   state: Texas,
   region: Southwest,
   country: United States,
   alt_population: 1876000
   current_population: 1340000
   peak_population: 1350000
  },
    {
   rank: 12,
   city: Jacksonville,
   state: Florida,
   region: Southeast,
   country: United States,
   alt_population: 1834000
   current_population: 1040000
   peak_population: 1040000
   },
   {
   rank: 13,
   city: St. Louis, 
   state: Missouri,
   region: Midwest,
   country: United States,
   alt_population: 1806000
   current_population: 280000
   peak_population: 860000
  },
   {
   rank: 14,
   city: Baltimore,
   state: Maryland,
   region: Northeast,
   country: United States,
   alt_population: 1640000
   current_population: 570000
   peak_population: 950000
  },
   {
   rank: 15,
   city: Washington DC,
   state: District of Columbia,
   region: Northeast
   country: United States,
   alt_population: 1631000
   current_population: 700000 
   peak_population: 810000
  },
   {
   rank: 16,
   city: Miami,
   state: Florida,
   region: Southeast,
   country: United States,
   alt_population: 1617000
   current_population: 500000
   peak_population: 500000
  },
  {
   rank: 17, 
   city: Charlotte,
   state: North Carolina,
   region: Southeast,
   country: United States,
   alt_population: 1584000
   current_population: 990000
   peak_population: 990000
  },
  {
   rank: 18, 
   city: San Francisco, 
   state: California,
   region: West,
   country: United States,
   alt_population: 1512000
   current_population: 810000
   peak_population: 880000
  },
   {
   rank: 19,
   city: Boston,
   state: Massachusetts,
   region: Northeast,
   country: United States, 
   alt_population: 1445000
   current_population: 680000
   peak_population: 810000
  },
   {
   rank: 20,
   city: Seattle,
   state: Washington
   region: West,
   country: United States,
   alt_population: 1381000
   current_population: 800000
   peak_population: 800000
  },
   rank 20,
   city: Memphis,
   state: Tennessee,
   region: Southeast,
   country: United States,
   alt_population: 1283000
   current_population: 610000
   peak_population: 660000
  },
   {
   rank: 21,
   city: Newark,
   state: New Jersey,
   region: Northeast,
   country: United States,
   alt_population: 1265000
   current_population: 330000
   peak_population: 450000
  },
   {
   rank: 22,
   city: Fort Worth,
   state: Texas,
   region: Southwest
   country: United States,
   alt_population: 1264000
   current_population: 1050000
   peak_population: 1050000
  },
   {
   rank: 23, 
   city: Pittsburgh,
   state: Pennsylvania, 
   region: Northeast,
   country: United States,
   alt_population: 1246000
   current_population: 310000
   peak_population: 680000
  },
   {
   rank: 24,
   city: Nashville,
   state: Tennessee,
   region: Southeast,
   country: United States,
   alt_population: 1240000
   current_population: 730000
   peak_population: 730000
   {
   rank: 25,
   city: San Jose,
   state: California,
   region: West,
   country: United States,
   alt_population: 1225000
   current_population: 980000
   peak_population: 1030000
  },
    {
   rank: 26, 
   city: New Orleans,
   state: Louisiana,
   region: Southeast,
   country: United States,
   alt_population: 1211000
   current_population: 355000
   peak_population: 630000
  },
   {
   rank: 27, 
   city: Austin,
   state: Texas,
   region: Southwest,
   country: United States,
   alt_population: 1207000
   current_population: 1020000
   peak_population: 1020000
  },
   {
   rank: 28, 
   city: Indianapolis,
   state: Indiana,
   region: Midwest,
   country: United States,
   alt_population: 1204000
   current_population: 910000
   peak_population: 910000
  },
   {
   rank: 29, 
   city: Columbus,
   state: Ohio,
   region: Midwest,
   country: United States,
   alt_population: 1201000
   current_population: 950000
   peak_population: 950000
  },
   {
   rank: 30, 
   city: Milwaukee,
   state: Wisconsin,
   region: Midwest,
   country: United States,
   alt_population: 1191000
   current_population: 555000
   peak_population: 750000
  },
   {
   rank: 31,
   city: Atlanta,
   state: Georgia,
   region: Southeast,
   country: United States,
   alt_population: 1181000
   current_population: 540000
   peak_population: 540000
  },
   {
   rank: 32, 
   city: Las Vegas,
   state: Nevada,
   region: West,
   country: United States,
   alt_population: 1180000
   current_population: 690000
   peak_population: 690000
  },
  {
   rank: 33, 
   city: Louisville,
   state: Kentucky,
   region: Southeast,
   country: United States,
   alt_population: 1165000
   current_population: 650000
   peak_population: 650000
  },
   {
   rank: 34,
   city: Minneapolis,
   state: Minnesota,
   region: Midwest,
   country: United States,
   alt_population: 1122000
   current_population: 435000
   peak_population: 530000
  },
   {
   rank: 35, 
   city: Buffalo,
   state: New York,
   region: Northeast,
   country: United States,
   alt_population: 1106000
   current_population: 280000
   peak_population: 580000
  },
   {
   rank: 36, 
   city: Denver,
   state: Colorado,
   region: West,
   country: United States,
   alt_population: 1100000
   current_population: 750000
   peak_population: 750000
  },
    {
   rank: 37, 
   city: Portland,
   state: Oregon,
   region: West,
   country: United States,
   alt_population: 1080000
   current_population: 630000
   peak_population: 660000
  },
   {
   rank: 38, 
   city: Kansas City,
   state: Missouri,
   region: Midwest,
   country: United States,
   alt_population: 1071000
   current_population: 530000
   peak_population: 530000
  },
   {
   rank: 39,
   city: Oklahoma City,
   state: Oklahoma,
   region: Southwest,
   country: United States,
   alt_population: 1064000
   current_population: 730000
   peak_population: 730000
   },
   {
   rank: 40, 
   city: Tampa,
   state: Florida,
   region: Southeast,
   country: United States,
   alt_population: 1058000
   current_population: 420000
   peak_population: 420000
  },
   {
   rank 41,
   city: Honolulu,
   state: Hawaii,
   region: West,
   country: United States,
   alt_population: 1022000
   current_population: 340000
   peak_population: 380000
   },
   {
   rank 42,
   city: Des Moines,
   state: Iowa,
   region: Midwest,
   country: United States,
   alt_population: 1017000
   current_population: 210000
   peak_population: 220000
   },
    {
   rank 43,
   city: Cincinnati,
   state: Ohio,
   region: Midwest,
   country: United States,
   alt_population: 1002000
   current_population: 320000
   peak_population: 510000
   },
   {
   rank 44,
   city: Long Beach,
   state: California,
   region: West,
   country: United States,
   alt_population: 966000
   current_population: 450000
   peak_population: 470000
   },
    {
   rank 45,
   city: Oakland,
   state: California,
   region: West,
   country: United States,
   alt_population: 941000
   current_population: 450000
   peak_population: 450000
   },
   {
   rank 46,
   city: El Paso,
   state: Texas,
   region: Southwest,
   country: United States,
   alt_population: 940000
   current_population: 690000
   peak_population: 690000
   },
    {
   rank 47,
   city: New Haven, 
   state: Connecticut,
   region: Northeast,
   country: United States,
   alt_population: 938000
   current_population: 150000
   peak_population: 170000
   },
   {
   rank 48,
   city: Tulsa,
   state: Oklahoma,
   region: Southwest,
   country: United States,
   alt_population: 931000
   current_population: 420000
   peak_population: 420000
   },
   {
   rank 49,
   city: Virginia Beach,
   state: Virginia,
   region: Southeast,
   country: United States,
   alt_population: 929000
   current_population: 450000
   peak_population: 460000
   },
   {
   rank 50,
   city: Albuquerque,
   state: New Mexico,
   region: Southwest,
   country: United States,
   alt_population: 910000
   current_population: 550000
   peak_population: 570000
   },
   {
   rank 51,
   city: Birmingham,
   state: Alabama,
   region: Southeast,
   country: United States,
   alt_population: 900000
   current_population: 200000
   peak_population: 350000
   },
   {
   rank 52,
   city: Wichita,
   state: Kansas,
   region: Midwest,
   country: United States,
   alt_population: 898000
   current_population: 410000
   peak_population: 410000
   },
   {
   rank 53,
   city: Rochester,
   state: New York,
   region: Northeast,
   country: United States,
   alt_population: 896000
   current_population: 210000
   peak_population: 340000
   },
   {
   rank 54,
   city: Jersey City,
   state: New Jersey,
   region: Northeast,
   country: United States,
   alt_population: 855000
   current_population: 310000
   peak_population: 320000
   },
   {
   rank 55,
   city: Fresno,
   state: California,
   region: West,
   country: United States,
   alt_population: 855000
   current_population: 560000
   peak_population: 560000
   },
   {
   rank 56,
   city: Raleigh,
   state: North Carolina,
   region: Southeast,
   country: United States,
   alt_population: 844000
   current_population: 520000
   peak_population: 520000
   },
   {
   rank 57,
   city: Omaha,
   state: Nebraska,
   region: Midwest,
   country: United States,
   alt_population: 842000
   current_population: 490000
   peak_population: 500000
   },
   {
   rank 58,
   city: Tucson,
   state: Arizona,
   region: Southwest,
   country: United States,
   alt_population: 837000
   current_population: 550000
   peak_population: 560000
   },
   {
   rank 59,
   city: Sacramento,
   state: California,
   region: West,
   country: United States,
   alt_population: 816000
   current_population: 540000
   peak_population: 540000
   },
   {
   rank 60,
   city: Toledo,
   state: Ohio,
   region: Midwest,
   country: United States,
   alt_population: 807000
   current_population: 270000
   peak_population: 390000
   },
   {
   rank 61,
   city: Norfolk,
   state: Virginia,
   region: Southeast,
   country: United States,
   alt_population: 785000
   current_population: 230000
   peak_population: 310000
   },
   {
   rank 62,
   city: Hartford,
   state: Connecticut,
   region: Northeast,
   country: United States,
   alt_population: 784000
   current_population: 130000
   peak_population: 180000
   },
   {
   rank 63,
   city: Salt Lake City,
   state: Utah,
   region: West,
   country: United States,
   alt_population: 784000
   current_population: 230000
   peak_population: 230000
   },
   {
   rank 64,
   city: St. Paul,
   state: Minnesota,
   region: Midwest,
   country: United States,
   alt_population: 781000
   current_population: 310000
   peak_population: 320000
   },
   {
   rank: 65,
   city: Colorado Springs
   state: Colorado,
   region: West,
   country: United States,
   alt_populaton: 771000
   current_population: 500000
   peak_population: 500000
   },
   {
   rank 67,
   city: Anchorage,
   state: Alaska,
   region: West,
   country: United States,
   alt_population: 762000
   current_population: 290000
   peak_population: 310000
   },
   {
   rank 68,
   city: Providence,
   state: Rhode Island,
   region: Northeast,
   country: United States,
   alt_population: 760000
   current_population: 200000
   peak_population: 260000
   },
   {
   rank 69,
   city: Little Rock,
   state: Arkansas,
   region: Southeast,
   country: United States,
   alt_population: 750000
   current_population: 210000
   peak_population: 210000
   },
   {
   rank 70,
   city: Syracuse,
   state: New York,
   region: Northeast,
   country: United States,
   alt_population: 716000
   current_population: 150000
   peak_population: 230000
   },
   {
   rank 71,
   city: Boise,
   state: Idaho,
   region: West,
   country: United States,
   alt_population: 681000
   current_population: 240000
   peak_population: 240000
   },
   {
   rank 72,
   city: Santa Ana,
   state: California,
   region: West,
   country: United States,
   alt_population: 676000
   current_population: 320000
   peak_population: 340000
   },
   {
   rank 73,
   city: Charleston,
   state: South Carolina,
   region: Southeast,
   country: United States,
   alt_population: 672000
   current_population: 170000
   peak_population: 170000
   },
   {
   rank: 74,
   city: Jackson,
   state: Mississippi,
   region: Southeast,
   country: United States,
   alt_population: 670000
   current_population: 140000
   peak_population: 210000
   },
   {
   rank 75,
   city: Portland,
   state: Maine,
   region: Northeast,
   country: United States,
   alt_population: 665000
   current_population: 70000
   peak_population: 80000
   },
   {
   rank 76,
   city: Spokane,
   state: Washington,
   region: West,
   country: United States,
   alt_population: 665000
   current_population: 240000
   peak_population: 240000
   },
   {
   rank 77,
   city: Akron,
   state: Ohio,
   region: Midwest,
   country: United States,
   alt_population: 658000
   current_population: 190000
   peak_population: 300000
   },
   {
   rank 81,
   city: Worcester,
   state: Massachusetts,
   region: Northeast,
   country: United States,
   alt_population: 655000
   current_population: 220000
   peak_population: 220000
   },
   {
   rank 82,
   city: Dayton,
   state: Ohio,
   region: Midwest,
   country: United States,
   alt_population: 654000
   current_population: 140000
   peak_population: 270000
   },
   {
   rank 83,
   city: Arlington,
   state: Texas,
   region: Southwest,
   alt_population: 659000
   current_population: 410000
   peak_population: 410000
   },
   {
   rank 84,
   city: Anaheim,
   state: California,
   region: West,
   country: United States,
   alt_population: 637000
   current_population: 340000
   peak_population: 360000
   },
   {
   rank 85,
   city: Madison,
   state: Wisconsin,
   region: Midwest,
   country: United States,
   alt_population: 632000
   current_population: 290000
   peak_population: 290000
   },
   {
   rank 86,
   city: Sioux Falls,
   state: South Dakota,
   region: Midwest,
   country: United States,
   alt_population: 602000
   current_population: 220000
   peak_population: 220000
   },
   {
   rank 87,
   city: Richmond,
   state: Virginia,
   region: Southeast,
   country: United States,
   alt_population: 601000
   current_population: 240000
   peak_population: 250000
   },
   {
   rank 88,
   city: Grand Rapids,
   state: Michigan,
   region: Midwest,
   country: United States,
   alt_population: 596000
   current_population: 210000
   peak_population: 210000
   },
   {
   rank 89,
   city: Charleston,
   state: West Virginia,
   region: Southeast,
   country: United States,
   alt_population: 595000
   current_population: 50000
   peak_population: 90000
   },
   {
   rank 90,
   city: Aurora,
   state: Colorado,
   region: West,
   country: United States,
   alt_population: 588000
   current_population: 420000
   peak_population: 420000
   },
   {
   rank 91,
   city: Lexington,
   state: Kentucky,
   region: Southeast,
   country: United States,
   alt_population: 582000
   current_population: 340000
   peak_population: 340000
   },
   {
   rank 92,
   city: Orlando,
   state: Florida,
   region: Southeast,
   country: United States,
   alt_population: 574000
   current_population: 350000
   peak_population: 350000
   },
   {
   rank 93,
   city: Mobile,
   state: Alabama,
   region: Southeast,
   alt_population: 532000
   current_population: 200000
   peak_population: 210000
   },
   {
   rank 94,
   city: Mesa,
   state: Arizona,
   region: Southwest,
   country: United States,
   alt_population: 572000
   current_population: 520000
   peak_population: 520000
   },
   {
   rank 95,
   city: Billings,
   state: Montana,
   region: West,
   country: United States,
   alt_population: 568000
   current_population: 130000
   peak_population: 130000
   },
   {
   rank 97,
   city: Flint,
   state: Michigan,
   region: Midwest,
   country: United States,
   alt_population: 567000
   current_population: 80000
   peak_population: 200000
   },
   {
   rank 98,
   city: Corpus Christi,
   state: Texas,
   region: Southwest,
   country: United States,
   alt_population: 551000
   current_population: 330000
   peak_population: 330000
   },
   {
   rank 99,
   city: Riverside,
   state: California,
   region: West,
   country: United States
   alt_population: 542000
   current_population: 330000
   peak_population: 330000
   },
   {
   rank 100,
   city: Savannah,
   state: Georgia,
   region: Southeast,
   country: United States,
   alt_population: 542000
   current_population: 150000
   peak_population: 160000
   },
   {
   rank 101,
   city: Bakersfield,
   state: California,
   region: West,
   county: United States,
   alt_population: 539000
   current_population: 430000
   peak_population: 430000
   },
   {
   rank 102,
   city: Reno,
   state: Nevada,
   region: West,
   country: United States,
   alt_population: 535000
   current_population: 290000
   peak_population: 290000
   },
   {
   rank 103,
   city: Stockton,
   state: California,
   region: West,
   country: United States,
   alt_population: 534000
   current_population: 330000
   peak_population: 330000
   },
   {
   rank 104,
   city: Henderson,
   state: Nevada,
   region: West,
   country: United States,
   alt_population: 501000
   current_population: 370000
   peak_population: 370000
   },
   
];

