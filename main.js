const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for-loop

// for (i=0; i<companies.length; i++) {
//     console.log(companies[i]);
// }

//=========================================================
//=========================================================

// forEach

// method 1 (prefered)
// companies.forEach(company => {
//     console.log(company);
// });

// method 2
// companies.forEach(function(company) {
//     console.log(company);
// });

//=========================================================
//=========================================================
    
// Filter


// Method 1 (filter using for loop)
// let canDrink = [];
// for (i=0; i < ages.length; i++) {
//     if (ages[i] > 21) {
//         canDrink.push(ages[i]);
//     } 
// }
// console.log(canDrink);


// Method 2 with Higher order Function
// const canDrink = ages.filter(function(age) {
//     if (age>=21) {
//         return true;
//     }
// });


// Method 3 with Higher order function optimized (prefered)
// const canDrink = ages.filter(age => age >= 21);

// log canDrink variable
// console.log(canDrink)


// const retailCompanies = companies.filter(company => (
//     company.catevory === "Retail"
// ));


// const retailCompanies = companies.filter(function(company){
//     if(company .category === "Retail") {
//         return true
//     }
// });


// const retailCompanies = companies.filter(function(company) {
//     if(company.category === "Retail") {
//         return true
//     }
// })

// const retailCompanies = companies.filter(company => company.category ==="Retail")

// const retailCompanies = companies.filter(company => company.category === "Retail")

// const retailCompanies = companies.filter(company => company.category === "Retail")

// const retailCompanies = companies.filter(company => company.category === "Retail");

// const retailCompanies = companies.filter(company => company.category === "Retail");

// const retailCompanies = companies.filter(company => company.category === "Retail");

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// const retailCompanies = companies.filter(company => company.category === "Retail")


// 80s

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// const eightiesCompanies = companies.filter(company => (company.start >=1980 && company.start< 1990));




// console.log(eightiesCompanies);




// Map
// Create array of company names

// Method 1 (old)

// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company = company.name);

// console.log(companyNames);


// Sort
// sort companies by start year. from earliest to latest
// takes in two values

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort(function(c1,c2) {
//     if (c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort(function(c1,c2) {
//     if(c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort(function(c1,c2) {
//     if(c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort(function(c1,c2) {
//     if (c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));



// console.log(sortedCompanies);

// Reduce