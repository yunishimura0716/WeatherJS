class Weather {
    constructor(city, state) {
        this.apiKey = "22c4e822bc4b413284e822bc4b013203";
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/` + 
        `q/${this.state}/${this.city}.json`, {
            mode: 'no-cors'
        });
        const responseData = await response.json();

        return responseData.current_observation;
    }
    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}