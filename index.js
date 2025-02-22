const axios = require('axios');

const apiUrl = 'https://utku.berkaykoc.net/api/entertainment/space-image';

/**
 * Fetches a space image from NASA based on the given day and month.
 * @param {number} day - The day of the month (1-31).
 * @param {string} month - The name of the month in Turkish or English.
 * @param {string} [lang="en"] - The language of the response ("tr" or "en").
 * @returns {Promise<object>} - Returns a JSON object with date and image URL.
 */
async function getSpaceImage(day, month, lang = "en") {
  try {
    const response = await axios.get(apiUrl, {
      params: { day, month, lang }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? JSON.stringify(error.response.data) : error.message);
  }
}

module.exports = {
  getSpaceImage
};


/*
        _   _            _               _               _                           _   
  _   _| |_| | ___   _  | |__   ___ _ __| | ____ _ _   _| | _____   ___   _ __   ___| |_ 
 | | | | __| |/ / | | | | '_ \ / _ \ '__| |/ / _` | | | | |/ / _ \ / __| | '_ \ / _ \ __|
 | |_| | |_|   <| |_| |_| |_) |  __/ |  |   < (_| | |_| |   < (_) | (__ _| | | |  __/ |_ 
  \__,_|\__|_|\_\\__,_(_)_.__/ \___|_|  |_|\_\__,_|\__, |_|\_\___/ \___(_)_| |_|\___|\__|
                                                   |___/                                 
*/