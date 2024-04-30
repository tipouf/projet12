
/**
 * Transforms the number of the day of the week to the corresponding day
 * of the week in uppercase letters. If the number is not between 1 and 7
 * the word "Error" is returned.
 *
 * @param n the number of the day of the week (1 = Monday, 7 = Sunday)
 * @return the corresponding day of the week in uppercase letters (Monday,
 *         Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) or "Error"
 */
const NumberToDay = (n) => "MTWTFSS"[n-1] || "Error";

export { NumberToDay }