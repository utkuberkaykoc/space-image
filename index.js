const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const apiUrl = 'https://utku.berkaykoc.net/api/entertainment/space-image';

const MONTHS_EN = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const MONTHS_TR = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];

/**
 * Fetches a space image from NASA based on the given day and month.
 * @param {number} day - The day of the month (1-31).
 * @param {string} month - The name of the month in Turkish or English.
 * @param {string} [lang="en"] - The language of the response ("tr" or "en").
 * @returns {Promise<object>} - Returns a JSON object with date, description, and base64-encoded image.
 */
async function getSpaceImage(day, month, lang = "en") {
  try {
    if (!day || !month) throw new Error("Day and month are required.");
    if (day < 1 || day > 31) throw new Error("Day must be between 1 and 31.");

    const response = await fetch(`${apiUrl}?day=${day}&month=${encodeURIComponent(month)}&lang=${lang}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Gets the space image for today's date.
 * @param {string} [lang="en"] - Language ("en" or "tr").
 * @returns {Promise<object>} - Space image data.
 */
async function getTodayImage(lang = "en") {
  const now = new Date();
  const day = now.getDate();
  const month = lang === "tr" ? MONTHS_TR[now.getMonth()] : MONTHS_EN[now.getMonth()];
  return getSpaceImage(day, month, lang);
}

/**
 * Gets a space image from a random date.
 * @param {string} [lang="en"] - Language ("en" or "tr").
 * @returns {Promise<object>} - Random space image data.
 */
async function getRandomImage(lang = "en") {
  const monthIndex = Math.floor(Math.random() * 12);
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = Math.floor(Math.random() * daysInMonth[monthIndex]) + 1;
  const month = lang === "tr" ? MONTHS_TR[monthIndex] : MONTHS_EN[monthIndex];
  return getSpaceImage(day, month, lang);
}

/**
 * Gets the space image for a birthday.
 * @param {number} day - Birthday day.
 * @param {number} month - Birthday month (1-12).
 * @param {string} [lang="en"] - Language.
 * @returns {Promise<object>} - Space image for the birthday.
 */
async function getBirthdayImage(day, month, lang = "en") {
  if (month < 1 || month > 12) throw new Error("Month must be between 1 and 12.");
  const monthName = lang === "tr" ? MONTHS_TR[month - 1] : MONTHS_EN[month - 1];
  return getSpaceImage(day, monthName, lang);
}

/**
 * Downloads and saves a space image to a file.
 * @param {object} imageData - Image data object from getSpaceImage (must contain base64Image).
 * @param {string} [outputPath] - Output file path. Default: auto-generated.
 * @param {string} [format="jpg"] - Image format ("jpg" or "png").
 * @returns {Promise<string>} - Saved file path.
 */
async function saveImageToFile(imageData, outputPath, format = "jpg") {
  if (!imageData || !imageData.base64Image) {
    throw new Error("Invalid image data. Must contain 'base64Image' field.");
  }

  const buffer = Buffer.from(imageData.base64Image, "base64");

  if (!outputPath) {
    const datePart = (imageData.date || "space_image").replace(/\s+/g, "_");
    outputPath = `${datePart}.${format}`;
  }

  const dir = path.dirname(outputPath);
  if (dir && dir !== '.' && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, buffer);
  return path.resolve(outputPath);
}

/**
 * Fetches and immediately saves a space image in one call.
 * @param {number} day - Day of the month.
 * @param {string} month - Month name.
 * @param {string} [outputPath] - Output path.
 * @param {string} [lang="en"] - Language.
 * @returns {Promise<{data: object, savedPath: string}>}
 */
async function fetchAndSave(day, month, outputPath, lang = "en") {
  const data = await getSpaceImage(day, month, lang);
  const savedPath = await saveImageToFile(data, outputPath);
  return { data, savedPath };
}

module.exports = {
  getSpaceImage,
  getTodayImage,
  getRandomImage,
  getBirthdayImage,
  saveImageToFile,
  fetchAndSave,
};