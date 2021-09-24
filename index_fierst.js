const firstName = 'Bulat'
console.log('Имя человека' + ' ' + firstName)
//const lastName = prompt('введите фамилию')
//alert(firstName + ' ' + lastName)
//let currentYear = 2021
//const a = 10
//const b = 5
//console.log (a+b)
//console.log('текущий год' + ' ' + currentYear)
function calculateAge(year){
    return 2021 - year
} 

//console.log(calculateAge(1983))

function logInfoAbout(name,year){
    const age = calculateAge(year)
    console.log('person by name ' + name + ' now is ' + age +' year old')
}

logInfoAbout('Bulat', 1983)