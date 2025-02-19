const axios = require('axios');

// API URL
const apiUrl = 'https://utku.berkaykoc.net/api/entertainment/space-image';

// Uzay görüntüsü bilgisi alma fonksiyonu
async function getSpaceImage(day, month) {
  try {
    const response = await axios.get(apiUrl, {
      params: { day, month }
    });
    console.log('Uzay Görüntüsü Bilgisi:', response.data);
  } catch (error) {
    console.error('Uzay görüntüsü bilgisi alınamadı:', error.response ? error.response.data : error.message);
  }
}

// Örnek kullanımlar
getSpaceImage(15, 'ocak');
getSpaceImage(20, 'şubat');
getSpaceImage(5, 'mart');

/*
        _   _            _               _               _                           _   
  _   _| |_| | ___   _  | |__   ___ _ __| | ____ _ _   _| | _____   ___   _ __   ___| |_ 
 | | | | __| |/ / | | | | '_ \ / _ \ '__| |/ / _` | | | | |/ / _ \ / __| | '_ \ / _ \ __|
 | |_| | |_|   <| |_| |_| |_) |  __/ |  |   < (_| | |_| |   < (_) | (__ _| | | |  __/ |_ 
  \__,_|\__|_|\_\\__,_(_)_.__/ \___|_|  |_|\_\__,_|\__, |_|\_\___/ \___(_)_| |_|\___|\__|
                                                   |___/                                 
*/