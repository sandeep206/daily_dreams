const fs = require('fs');
const path = require('path');

const fileLocation = path.join(__dirname , './dreams.json');

const getDreams = () => {
  const dreams = fs.readFileSync(fileLocation).toString();
  return JSON.parse(dreams);
}

const saveDreams = (dreams) => {
  const data = JSON.stringify(dreams);
  fs.writeFileSync(fileLocation, data);
}

module.exports = {
  fileLocation,
  getDreams,
  saveDreams
};