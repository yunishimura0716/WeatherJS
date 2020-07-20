// Init UI
const ui = new UI();
// Init Storage
const storage = new Storage();
//get stored data
const weatherLocation = storage.getLocationData();
// Init Wether class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// weather.changeLocation('Miami', 'FL');
// Get Weather
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    
    weather.changeLocation(city, state);

    //Set location into local Storage
    storage.setLocationData(city, state);

    // Get Display weather
    getWeather();
    //close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}