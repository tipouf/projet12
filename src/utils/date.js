/**
 * Transforms the number of the day of the week to the corresponding day
 * of the week in uppercase letters. If the number is not between 1 and 7
 * the word "Error" is returned.
 *
 * @param n the number of the day of the week (1 = Monday, 7 = Sunday)
 * @return the corresponding day of the week in uppercase letters (Monday,
 *         Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) or "Error"
 */
const NumberToDay = (n) => "MTWTFSS"[n - 1] || "Error";

/**
 * A function that returns the day of the month from a given date.
 *
 * @param {number} n - The date number to extract the day from.
 * @return {string} The day of the month in a two-digit format.
 */
const GetDay = (n) =>
  new Date(n).getDate() < 10
    ? new Date(n).toLocaleDateString().slice(1, 2)
    : new Date(n).toLocaleDateString().slice(0, 2);

export { NumberToDay, GetDay };
