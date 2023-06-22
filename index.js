const PeopleName = require("../country/state/city/index.js");
const getFirstName = require("../utilities/utils/index.js");

const getPeopleInCity = (PeopleNames) => {
  return getFirstName(PeopleNames);
};
module.exports = getPeopleInCity;
