# Space Image API 🚀  

✅ **Free to use!**
🔭 Fetches a **space image** from NASA based on a given day and month. Supports both **Turkish and English** month names. Returns the image in Base64 format.  

![NPM Version](https://img.shields.io/npm/v/space-image?color=blue&style=flat-square)  
![Downloads](https://img.shields.io/npm/dt/space-image?color=green&style=flat-square)  
![License](https://img.shields.io/npm/l/space-image?style=flat-square)  

---

## 📌 Features  

✅ Fetch **NASA space images** based on **your birthday** or a **specific date** 📆  
✅ **Supports Turkish & English** month names 🌍  
✅ Returns **Base64-encoded images** 🖼️  
✅ **No API key required** 🔑  
✅ **Works with Node.js & supports Promises** ⚡  

---

## 📦 Installation  

Install via **npm**:  
```sh
npm install space-image
```

Or using **yarn**:  
```sh
yarn add space-image
```

---

## 🚀 Usage  

### Import the package  
```js
const { getSpaceImage } = require("space-image");
```

### Fetch a space image by date  
```js
getSpaceImage(15, "january", "en")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Example Response  
```json
{
  "date": "15 January",
  "description": "The magnificent galaxy NGC 4710 is tilted nearly edge-on to our view from Earth...",
  "base64Image": "/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
```

---

## 📥 Saving the Image to a File  
You can save the Base64-encoded image to a `.jpg` file using Node.js `fs` module:  
```js
const { getSpaceImage } = require("space-image");
const fs = require("fs");

async function downloadImage(day, month, lang = "en") {
  try {
    const data = await getSpaceImage(day, month, lang);
    fs.writeFileSync(`space_image_${day}_${month}.jpg`, Buffer.from(data.base64Image, "base64"));
    console.log(`✅ Image saved as space_image_${day}_${month}.jpg`);
  } catch (error) {
    console.error("❌ Failed to download image:", error.message);
  }
}

// Example usage
downloadImage(15, "january", "en");
```

---

## 📜 API Reference  

### `getSpaceImage(day, month, lang)`  
Fetches a space image from NASA based on the given day and month.  

- **Parameters:**  
  - `day` _(number)_ → The day of the month (1-31).  
  - `month` _(string)_ → The name of the month in **Turkish or English** (e.g., "ocak" or "january").  
  - `lang` _(string, optional)_ → The response language ("tr" or "en"). Defaults to "en".  
- **Returns:** `Promise<object>` → JSON object with date, description and Base64-encoded image.  

---

## 🛠️ Contributing  

Contributions are welcome! Fork the repository, create a branch, make changes, and submit a PR. 🚀  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

## 🌟 Support & Contact  

- **GitHub Issues:** [Report Bugs or Request Features](https://github.com/utkuberkaykoc/space-image/issues)  
- **Give a Star:** ⭐ If you like this package, consider giving it a star on GitHub!  

🚀 **Happy Coding!** 🎮✨  

