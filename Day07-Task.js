/*
Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
a) Get all the countries from the Asia continent /region using the Filter function
b) Get all the countries with a population of less than 2 lakhs using Filter function
c) Print the following details name, capital, flag using forEach function
d) Print the total population of countries using reduce function
e) Print the country which uses US Dollars as currency.
*/

// a) Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {

    var countryData = JSON.parse(request.response);

    var asiaCountries = countryData.filter((data) => {

        if ((data.region) == "Asia") {
            return data.name;
        }
    })

    console.log(asiaCountries);

}

// *********************************************************************************************************

// b) Get all the countries with a population of less than 2 lakhs using Filter function

var request1 = new XMLHttpRequest();

request1.open("GET", "https://restcountries.com/v3.1/all");

request1.send();

request1.onload = function () {

    var countryData1 = JSON.parse(request1.response);

    var popLessThan2Lakhs = countryData1.filter((data1) => {

        if ((data1.population) < 200000) {
            return data1.name;
        }
    })

    console.log(popLessThan2Lakhs);

}

// *********************************************************************************************************

// c) Print the following details name, capital, flag using forEach function

var request2 = new XMLHttpRequest();

request2.open("GET", "https://restcountries.com/v3.1/all");

request2.send();

request2.onload = function () {

    var countryData2 = JSON.parse(request2.response);

    countryData2.forEach((data2) => {

        console.log("name-" + data2.name.common + ", " + "capital-" + data2.capital + ", " + "flag-" + data2.flag)

    });

}

// *********************************************************************************************************

// d) Print the total population of countries using reduce function

var request3 = new XMLHttpRequest();

request3.open("GET", "https://restcountries.com/v3.1/all");

request3.send();

request3.onload = function () {

    var countryData3 = JSON.parse(request3.response);

    var totalPopulation = countryData3.reduce((acc, element) => {

        return acc + element.population;

    }, 0)

    console.log(totalPopulation);

}

// *********************************************************************************************************

// e) Print the country which uses US Dollars as currency.

var request4 = new XMLHttpRequest();

request4.open("GET", "https://restcountries.com/v3.1/currency/dollar");

request4.send();

request4.onload = function () {

    var countryData4 = JSON.parse(request4.response);

    for (let i = 0; i < countryData4.length; i++) {

        if (countryData4[i].currencies.USD) {

            console.log(`${i+1}) Country Name - ${countryData4[i].name.common}, Currency - ${countryData4[i].currencies.USD.name}`);

        }
    }

}

// *********************************************************************************************************
