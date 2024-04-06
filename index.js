// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, Bobby) {
    return drivers.filter(driver => driver.toLowerCase() === Bobby.toLowerCase());
}

function fuzzyMatch(drivers, Bo) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(Bo.toLowerCase()))


}
function matchName(drivers,Bobby) {
    return drivers.filter(driver => driver.name === Bobby);

}