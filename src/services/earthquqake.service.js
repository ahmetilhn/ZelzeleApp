class EarthquakeService {
  constructor() {}
  async lastEarthquakes() {
    return fetch("https://zelzele.io/api/earthquakes");
  }
}

export default new EarthquakeService();
