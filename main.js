const companies = [
    { name: "Company 1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company 2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company 3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company 4", category: "Retail", start: 1989, end: 2010 },
    { name: "Company 5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company 6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company 7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company 8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company 9", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*****************************************************************************
* forEach
* loop through an array, doesnt return anything
* uses sync callback
*/

/** old way */
// for (let i = 0; i < companies.length; ++i) {
//     console.log(companies[i]);
// }

/** ES5 */
// companies.forEach(function (company, index, companies) {
//     console.log(company.name);
// });

/** ES6 */
// companies.forEach((company, index, companies) => console.log(company.name));





/*****************************************************************************
* filter
* get 21 and older, retail companies, and lasted 10 years and more
*/

/** old way */
// let canDrink = [];
// for (let i = 0; i < ages.length; ++i) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

/** ES5 */
// const canDrink = ages.filter(function (age) {
//     if (age >= 21) return true;
// });

/** ES6 */
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


/** filter retail companies using ES5 */
// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// })
// console.log(retailCompanies);

/** filter retail companies using ES6 */
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


/** filter companies that lasted longer than or 10 years */
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears);





/*****************************************************************************
* map
* create new arrays from a current array
*/

/** map company names to new array */
// const companyNames = companies.map(function (company) {
//     return company.name;
// });
// console.log(companyNames);

/** map company name, start, and end to new array */
// const formattedInfo = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);
// console.log(formattedInfo);


/** map sqrt of ages to new array */
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

/** map sqrt of ages * 2 to new array */
// const agesSquareTimesTwo = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);
// console.log(agesSquareTimesTwo);





/*****************************************************************************
* sort
* returns a sorted array by returning 1 or -1 to move them up or down the array
*/

/** sort companys by start year ES5*/
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

/** sort companys by start year ES6 */
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);


/** sort ages ES6*/
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);





/*****************************************************************************
* reduce
* reduces array to a single value
*/

/** add ages array old way*/
// let ageSum = 0;
// for (let i = 0; i < ages.length; ++i) {
//     ageSum += ages[i];
// }

/**
 * add ages array ES5
 * the 0 is the starting sum
 * */
// const ageSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0);

/** add ages array ES6 */
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);


/** total years of all companies ES5*/
// const totalYears = companies.reduce(function (total, company) {
//     return total + (company.end - company.start);
// }, 0);

/** total years of all companies ES6*/
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);





/**
 * Combine Methods
 * times by 2
 * filter out ages >= 40
 * sort least to greatest
 * add values
 * */
// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
// console.log(combined);
