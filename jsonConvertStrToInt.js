const fs = require('fs')

let jsonData = require('./db/colombiaCities.json')


// jsonData.colombiaCities[0].lat = parseInt()
// const latInt = parseInt(lat)
// console.log(typeof(latInt))

const jsonDataWithInts = jsonData.colombiaCities.map(city => {
  // city.lat = parseFloat(city.lat)
  // city.lng = parseFloat(city.lng)
  // city.population = parseFloat(city.population)
  // city.populationProper = parseFloat(city.populationProper)
  // console.log('After:', city)

  return {
    ...city,
    lat: parseFloat(city.lat),
    lng: parseFloat(city.lng),
    population: parseFloat(city.population),
    populationProper: parseFloat(city.populationProper)
  }
})
// console.log(jsonDataWithInts)
const str = JSON.stringify(jsonDataWithInts, null, 2)
// console.log(str)
// jsonData = str
// console.log(jsonData)
fs.writeFile('./db/colombiaCities.json', str, 'utf8', (err) => {
  if (err) console.log(`Error writing file: ${err}`)
  else console.log('File is written successfully!')
})