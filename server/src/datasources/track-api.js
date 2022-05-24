require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SERVER_BASE_URL;
  }
  getTracksForHome() {
    return this.get("tracks");
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }
  getTtrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
}

module.exports = TrackAPI;
