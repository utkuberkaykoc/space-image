# Space Image API 🚀  

✅ **Free to use!**  
🔭 Fetch stunning **NASA space images** by date, birthday, or randomly! Includes **save-to-file** helpers and **multi-language** support.

![NPM Version](https://img.shields.io/npm/v/space-image?color=blue&style=flat-square)  
![Downloads](https://img.shields.io/npm/dt/space-image?color=green&style=flat-square)  
![License](https://img.shields.io/npm/l/space-image?style=flat-square)  

---

## 🆕 What's New in v2.0.0  

🔥 **Today's Image** – Get today's space image with one call  
🔥 **Random Image** – Discover a random NASA space image  
🔥 **Birthday Image** – See what NASA captured on your birthday (by month number)  
🔥 **Save to File** – Built-in `saveImageToFile()` and `fetchAndSave()` helpers  
🔥 **Input Validation** – Better error messages  
🔥 **Auto Directory Creation** – Saves create missing folders automatically  

---

## 📦 Installation  

```sh
npm install space-image
```

---

## 🚀 Quick Start  

```js
const { getTodayImage, getRandomImage, getBirthdayImage, fetchAndSave } = require("space-image");

// 🌟 Today's space image
const today = await getTodayImage();
console.log(today.description);

// 🎲 Random space image
const random = await getRandomImage();
console.log(random.date);

// 🎂 Your birthday space image (day 15, month 6 = June)
const birthday = await getBirthdayImage(15, 6);
console.log(birthday.description);

// 💾 Fetch and save in one call
const { savedPath } = await fetchAndSave(25, "december", "xmas_space.jpg");
console.log(`Saved to: ${savedPath}`);
```

---

## 📌 API Methods  

| Method | Description |
|---|---|
| `getSpaceImage(day, month, lang?)` | Fetch by day and month name |
| `getTodayImage(lang?)` | Get today's space image |
| `getRandomImage(lang?)` | Get a random space image |
| `getBirthdayImage(day, month, lang?)` | Get image by birthday (month as number 1-12) |
| `saveImageToFile(imageData, path?, format?)` | Save Base64 image to file |
| `fetchAndSave(day, month, path?, lang?)` | Fetch + save in one call |

---

## 💾 Saving Images  

```js
const { getSpaceImage, saveImageToFile } = require("space-image");

const data = await getSpaceImage(15, "january", "en");

// Auto-named file
const path1 = await saveImageToFile(data);
console.log(`Saved: ${path1}`); // "15_January.jpg"

// Custom path
const path2 = await saveImageToFile(data, "images/space.png", "png");
console.log(`Saved: ${path2}`);
```

---

## 🌍 Language Support  

Supports `"en"` (English) and `"tr"` (Turkish):
```js
const trImage = await getTodayImage("tr");
```

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## 🌟 Support & Contact  
- **GitHub Issues:** [Report Bugs or Request Features](https://github.com/utkuberkaykoc/space-image/issues)  
- **Give a Star:** ⭐ If you like this package, consider giving it a star on GitHub!  

🚀 **Explore the Universe!** 🌌✨  

