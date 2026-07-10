# alt-city-population-mod
# Attention: Some of the current populations or peak populations may appear to be inaccurate; sometimes they include all boroughs, and also rounding to the nearest number, and please enjoy

# !!! BIG POPULATION ALTERNATIVE PROJECTIONS!!!

const cities = [
  {
   rank: 1,
   city: New York City,
   state: New York,
   region: Northeast,
   alt_population: 17850000
   current_population: 8580000
   peak_population: 9520000
  },
   {
   rank: 2,
   city: Chicago,
   state: Illinois,
   region: Midwest,
   alt_population: 7525000
   current_population: 2730000
   peak_population: 3626000
  },
   {
   rank: 3,
   city: Los Angeles,
   state: California,
   region: West,
   alt_population: 5502000
   current_population: 3871000
   peak_population: 3920000
  },
   {
   rank: 4,
   city: Detroit,
   state: Michigan,
   region: Midwest,
   alt_population: 4120000 
   current_population: 651000
   peak_population: 1855000
  },
  {
   rank: 5,
   city: Houston,
   state: Texas,
   region: Southwest,
   alt_population: 3605000  
   current_population: 2420000
   peak_population: 2420000
  },
   {
   rank: 6,
   city: Philadelphia,
   state: Pennsylvania,
   region: Northeast,
   alt_population: 3486000
   current_population: 1574000
   peak_population: 2072000
  },
   {
   rank: 7, 
   city: Phoenix,
   state: Arizona,
   region: Southwest,
   alt_population: 2450000
   current_population: 1680000
   peak_population: 1680000
  },
   {
   rank: 8,
   city: San Antonio,
   state: Texas,
   region: Southwest,
   alt_population: 2121000
   current_population: 1580000
   peak_population: 1580000
  },
   {
   rank: 9,
   city: Cleveland,
   state: Ohio,
   region: Midwest,
   alt_population: 2065000
   current_population: 370000
   peak_population: 920000
  },
   {
   rank: 10, 
   city: San Diego,
   state: California,
   region: West,
   alt_population: 1890000  
   current_population: 1410000
   peak_population: 1420000
  },
   {
   rank: 11, 
   city: Dallas,
   state: Texas,
   region: Southwest,
   alt_population: 1876000
   current_population: 1340000
   peak_population: 1350000
  },
   {
   rank: 12,
   city: St. Louis, 
   state: Missouri,
   region: Midwest,
   alt_population: 1800000
   current_population: 280000
   peak_population: 860000
  },
   {
   rank: 13,
   city: Jacksonville,
   state: Florida,
   region: Southeast,
   alt_population: 1750000
   current_population: 1040000
   peak_population: 1040000
   },
   {
   rank: 14,
   city: Baltimore,
   state: Maryland,
   region: Northeast,
   alt_population: 1589000
   current_population: 570000
   peak_population: 950000
  },
   {
   rank: 15,
   city: Washington DC,
   state: District of Columbia,
   region: Northeast
   alt_population: 1568000
   current_population: 700000 
   peak_population: 810000
  },
   {
   rank: 16,
   city: Miami,
   state: Florida,
   region: Southeast,
   alt_population: 1541000
   current_population: 500000
   peak_population: 500000
  },
   {
   rank: 17,
   city: Boston,
   state: Massachusetts,
   region: Northeast,
   alt_population: 1442000
   current_population: 680000
   peak_population: 810000
  },
   {
   rank: 18, 
   city: Charlotte,
   state: North Carolina,
   region: Southeast
   alt_population: 1414000
   current_population: 990000
   peak_population: 990000
  },
   {
   rank: 19, 
   city: San Francisco, 
   state: California,
   region: West,
   alt_population: 1358000
   current_population: 810000
   peak_population: 880000
  },
   {
   rank: 20,
   city: Seattle,
   state: Washington
   region: West,
   alt_population: 1330000
   current_population: 800000
   peak_population: 800000
  },
   {
   rank: 21,
   city: Fort Worth,
   state: Texas,
   region: Southwest
   alt_population: 1260000
   current_population: 1050000
   peak_population: 1050000
  },
   {
   rank: 22, 
   city: Pittsburgh,
   state: Pennsylvania, 
   region: Northeast,
   alt_population: 1242000
   current_population: 310000
   peak_population: 680000
  },
   {
   rank: 23,
   city: Memphis,
   state: Tennessee,
   region: Southeast,
   alt_population: 1240000
   current_population: 605000
   peak_population: 660000
  },
   {
   rank: 24,
   city: San Jose,
   state: California,
   region: West,
   alt_population: 1225000
   current_population: 980000
   peak_population: 1030000
  },
   {
   rank: 25, 
   city: Austin,
   state: Texas,
   region: Southwest,
   alt_population: 1204000
   current_population: 1020000
   peak_population: 1020000
  },
   {
   rank: 26, 
   city: New Orleans,
   state: Louisiana,
   region: Southeast,
   alt_population: 1165000
   current_population: 355000
   peak_population: 630000
  },
   {
   rank: 27, 
   city: Indianapolis,
   state: Indiana,
   region: Midwest,
   alt_population: 1161000
   current_population: 910000
   peak_population: 910000
  },
   {
   rank: 28, 
   city: Columbus,
   state: Ohio,
   region: Midwest,
   alt_population: 1158000
   current_population: 950000
   peak_population: 950000
  },
   {
   rank: 29, 
   city: Milwaukee,
   state: Wisconsin,
   region: Midwest,
   alt_population: 1155000
   current_population: 555000
   peak_population: 750000
  },
   {
   rank: 30, 
   city: Las Vegas,
   state: Nevada,
   region: West,
   alt_population: 1122000
   current_population: 690000
   peak_population: 690000
  },
     {
   rank: 31,
   city: Newark,
   state: New Jersey,
   region: Northeast,
   alt_population: 1114000
   current_population: 330000
   peak_population: 450000
  },
   {
   rank: 32, 
   city: Buffalo,
   state: New York,
   region: Northeast,
   alt_population: 1100000
   current_population: 280000
   peak_population: 580000
  },
   {
   rank: 33,
   city: Atlanta,
   state: Georgia,
   region: Southeast,
   alt_population: 1091000
   current_population: 540000
   peak_population: 540000
  },
   {
   rank: 34, 
   city: Nashville,
   state: Tennessee,
   region: Southeast,
   alt_population: 1088000
   current_population: 730000
   peak_population: 730000
  },
  {
   rank: 35,
   city: Minneapolis,
   state: Minnesota,
   region: Midwest,
   alt_population: 1086000
   current_population: 435000
   peak_population: 530000
  },
   {
   rank: 36, 
   city: Denver,
   state: Colorado,
   region: West,
   alt_population: 1085000
   current_population: 750000
   peak_population: 750000
  },
    {
   rank: 37, 
   city: Portland,
   state: Oregon,
   region: West,
   alt_population: 1075000
   current_population: 630000
   peak_population: 660000
  },
   {
   rank: 38, 
   city: Kansas City,
   state: Missouri,
   region: Midwest,
   alt_population: 1066000
   current_population: 530000
   peak_population: 530000
  },
   {
   rank: 39, 
   city: Louisville,
   state: Kentucky,
   region: Southeast,
   alt_population: 1042000
   current_population: 650000
   peak_population: 650000
  },
   rank: 40,
   city: Oklahoma City,
   state: Oklahoma,
   region: Southwest,
   alt_population: 1022000
   current_population: 730000
   peak_population: 730000
   },
   {
   rank: 41, 
   city: Tampa,
   state: Florida,
   region: Southeast,
   alt_population: 1008000
   current_population: 420000
   peak_population: 420000
  },
   {
   rank 42,
   city: Honolulu,
   state: Hawaii,
   region: West,
   alt_population: 966000
   current_population: 340000
   peak_population: 380000
   },
   {
   rank 43,
   city: Des Moines,
   state: Iowa,
   region: Midwest,
   alt_population: 965,000
   current_population: 210000
   peak_population: 220000
   },
   {
   rank 44,
   city: Long Beach,
   state: California,
   region: West,
   alt_population: 960000
   current_population: 450000
   peak_population: 470000
   },
   {
   rank 45,
   city: Cincinnati,
   state: Ohio,
   region: Midwest,
   alt_population: 952000
   current_population: 320000
   peak_population: 510000
   },
   {
   rank 46,
   city: El Paso,
   state: Texas,
   region: Southwest,
   alt_population: 910000
   current_population: 690000
   peak_population: 690000
   },
   {
   rank 47,
   city: Tulsa,
   state: Oklahoma,
   region: Southwest,
   alt_population: 905000
   current_population: 420000
   peak_population: 420000
   },
   {
   rank 48,
   city: Oakland,
   state: California,
   region: West,
   alt_population: 902000
   current_population: 450000
   peak_population: 450000
   },
   {
   rank 49,
   city: Wichita,
   state: Kansas,
   region: Midwest,
   alt_population: 851000
   current_population: 410000
   peak_population: 410000
   },
   {
   rank 50,
   city: Albuquerque,
   state: New Mexico,
   region: Southwest,
   alt_population: 850000
   current_population: 550000
   peak_population: 570000
   },
   {
   rank 51,
   city: New Haven, 
   state: Connecticut,
   region: Northeast,
   alt_population: 822000
   current_population: 150000
   peak_population: 170000
   },
   {
   rank 52,
   city: Birmingham,
   state: Alabama,
   region: Southeast,
   alt_population: 815000
   current_population: 200000
   peak_population: 350000
   },
   {
   rank 53,
   city: Fresno,
   state: California,
   region: West,
   alt_population: 814000
   current_population: 560000
   peak_population: 560000
   },
   {
   rank 54,
   city: Rochester,
   state: New York,
   region: Northeast,
   alt_population: 809000
   current_population: 210000
   peak_population: 340000
   },
   {
   rank 55,
   city: Omaha,
   state: Nebraska,
   region: Midwest,
   alt_population: 805000
   current_population: 490000
   peak_population: 500000
   },
   {
   rank 56,
   city: Jersey City,
   state: New Jersey,
   region: Northeast,
   alt_population: 791000
   current_population: 310000
   peak_population: 320000
   },
   {
   rank 57,
   city: Sacramento,
   state: California,
   region: West,
   alt_population: 786000
   current_population: 540000
   peak_population: 540000
   },
   {
   rank 58,
   city: Raleigh,
   state: North Carolina,
   region: Southeast,
   alt_population: 770000
   current_population: 520000
   peak_population: 520000
   },
   {
   rank 59,
   city: Tucson,
   state: Arizona,
   region: Southwest,
   alt_population: 769000
   current_population: 550000
   peak_population: 560000
   },
   {
   rank 60,
   city: Toledo,
   state: Ohio,
   region: Midwest,
   alt_population: 765000
   current_population: 270000
   peak_population: 390000
   },
   {
   rank 61,
   city: Providence,
   state: Rhode Island,
   region: Northeast,
   alt_population: 756000
   current_population: 200000
   peak_population: 260000
   },
   {
   rank 62,
   city: Virginia Beach,
   state: Virginia,
   region: Southeast,
   alt_population: 745000
   current_population: 450000
   peak_population: 460000
   },
   {
   rank 63,
   city: Norfolk,
   state: Virginia,
   region: Southeast,
   alt_population: 728000
   current_population: 230000
   peak_population: 310000
   },
   {
   rank 64,
   city: Colorado Springs,
   state: Colorado,
   region: West,
   alt_population: 714000
   current_population: 500000
   peak_population: 500000
   },
   {
   rank 65,
   city: St. Paul,
   state: Minnesota,
   region: Midwest,
   alt_population: 702000
   current_population: 310000
   peak_population: 320000
   },
   {
   rank 66,
   city: Hartford,
   state: Connecticut,
   region: Northeast,
   alt_population: 672000
   current_population: 130000
   peak_population: 180000
   },
   {
   rank 67,
   city: Anchorage,
   state: Alaska,
   region: West,
   alt_population: 665000
   current_population: 290000
   peak_population: 310000
   },
   {
   rank 68,
   city: Santa Ana,
   state: California,
   region: West,
   alt_population: 655000
   current_population: 320000
   peak_population: 340000
   },
   {
   rank 69,
   city: Syracuse,
   state: New York,
   region: Northeast,
   alt_population: 651000
   current_population: 150000
   peak_population: 230000
   },
   {
   rank 70,
   city: Little Rock,
   state: Arkansas,
   region: Southeast,
   alt_population: 640000
   current_population: 210000
   peak_population: 210000
   },
   {
   rank 71,
   city: Boise,
   state: Idaho,
   region: West,
   alt_population: 637000
   current_population: 240000
   peak_population: 240000
   },
   {
   rank 72,
   city: Portland,
   state: Maine,
   region: Northeast,
   alt_population: 632000
   current_population: 70000
   peak_population: 80000
   },
   {
   rank 73,
   city: Anaheim,
   state: California,
   region: West,
   alt_population: 630000
   current_population: 340000
   peak_population: 360000
   },
   {
   rank 74,
   city: Akron,
   state: Ohio,
   region: Midwest,
   alt_population: 624000
   current_population: 190000
   peak_population: 300000
   },
   {
   rank 75,
   city: Arlington,
   state: Texas,
   region: Southwest,
   alt_population: 624000
   current_population: 410000
   peak_population: 410000
   },
   {
   rank 76,
   city: Dayton,
   state: Ohio,
   region: Midwest,
   alt_population: 621000
   current_population: 140000
   peak_population: 270000
   },
   {
   rank 77,
   city: Charleston,
   state: South Carolina,
   region: Southeast,
   alt_population: 608000
   current_population: 170000
   peak_population: 170000
   },
   {
   rank 78,
   city: Salt Lake City,
   state: Utah,
   region: West,
   alt_population: 605000
   current_population: 230000
   peak_population: 230000
   },
   {
   rank 79,
   city: Jackson,
   state: Mississippi,
   region: Southeast,
   alt_population: 591000
   current_population: 140000
   peak_population: 210000
   },
   {
   rank 80,
   city: Aurora,
   state: Colorado,
   region: West,
   alt_population: 588000
   current_population: 420000
   peak_population: 420000
   },
   {
   rank 81,
   city: Worcester,
   state: Massachusetts,
   region: Northeast,
   alt_population: 585000
   current_population: 220000
   peak_population: 220000
   },
   {
   rank 82,
   city: Madison,
   state: Wisconsin,
   region: Midwest,
   alt_population: 575000
   current_population: 290000
   peak_population: 290000
   },
   {
   rank 83,
   city: Richmond,
   state: Virginia,
   region: Southeast,
   alt_population: 571000
   current_population: 240000
   peak_population: 250000
   },
   {
   rank 84,
   city: Grand Rapids,
   state: Michigan,
   region: Midwest,
   alt_population: 568000
   current_population: 210000
   peak_population: 210000
   },
   {
   rank 85,
   city: Charleston,
   state: West Virginia,
   region: Southeast,
   alt_population: 567000
   current_population: 50000
   peak_population: 90000
   },
   {
   rank 86,
   city: Mesa,
   state: Arizona,
   region: Southwest,
   alt_population: 565000
   current_population: 520000
   peak_population: 520000
   },
   {
   rank 87,
   city: Sioux Falls,
   state: South Dakota,
   region: Midwest,
   alt_population: 553000
   current_population: 220000
   peak_population: 220000
   },
   {
   rank 88,
   city: Orlando,
   state: Florida,
   region: Southeast,
   alt_population: 551000
   current_population: 350000
   peak_population: 350000
   },
   {
   rank 89,
   city: Spokane,
   state: Washington,
   region: West,
   alt_population: 545000
   current_population: 240000
   peak_population: 240000
   },
   {
   rank 90,
   city: Riverside,
   state: California,
   region: West,
   alt_population: 541000
   current_population: 330000
   peak_population: 330000
   },
   {
   rank 91,
   city: Billings,
   state: Montana,
   region: West,
   alt_population: 540000
   current_population: 130000
   peak_population: 130000
   },
   {
   rank 92,
   city: Bakersfield,
   state: California,
   region: West,
   alt_population: 532000
   current_population: 430000
   peak_population: 430000
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
   city: Lexington,
   state: Kentucky,
   region: Southeast,
   alt_population: 532000
   current_population: 340000
   peak_population: 340000
   },
   {
   rank 95,
   city: Corpus Christi,
   state: Texas,
   region: Southwest,
   alt_population: 530000
   current_population: 330000
   peak_population: 330000
   },
   {
   rank 96,
   city: Flint,
   state: Michigan,
   region: Midwest,
   alt_population: 525000
   current_population: 80000
   peak_population: 200000
   },
   {
   rank 97,
   city: Reno,
   state: Nevada,
   region: West,
   alt_population: 520000
   current_population: 290000
   peak_population: 290000
   },
   {
   rank 98,
   city: Stockton,
   state: California,
   region: West,
   alt_population: 512000
   current_population: 330000
   peak_population: 330000
   },
   {
   rank 99,
   city: Savannah,
   state: Georgia,
   region: Southeast,
   alt_population: 504000
   current_population: 150000
   peak_population: 160000
   },
   {
   rank 100,
   city: Henderson,
   state: Nevada,
   region: West,
   alt_population: 501000
   current_population: 370000
   peak_population: 370000
   },
   
];

