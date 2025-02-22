# Space Image API 🚀  

Fetches a space image from NASA based on a given day and month. Supports both Turkish and English month names.  

![NPM Version](https://img.shields.io/npm/v/space-image?color=blue&style=flat-square)  
![Downloads](https://img.shields.io/npm/dt/space-image?color=green&style=flat-square)  
![License](https://img.shields.io/npm/l/space-image?style=flat-square)  

---

## 📌 Features  

✅ Fetch **NASA space images** based on **your birthday** or a **specific date** 📆  
✅ **Supports Turkish & English** month names 🌍  
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
getSpaceImage(15, "ocak", "tr")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Example Response  
```json
{
  "date": "15 Ocak",
  "imageUrl": "https://imagine.gsfc.nasa.gov/hst_bday/images/january-15.jpg"
}
```

---

## 📜 API Reference  

### `getSpaceImage(day, month, lang)`  
Fetches a space image from NASA based on the given day and month.  

- **Parameters:**  
  - `day` _(number)_ → The day of the month (1-31).  
  - `month` _(string)_ → The name of the month in **Turkish or English** (e.g., `"ocak"` or `"january"`).  
  - `lang` _(string, optional)_ → The response language (`"tr"` or `"en"`). Defaults to `"en"`.  
- **Returns:** `Promise<object>` → JSON object with date and image URL.  

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
