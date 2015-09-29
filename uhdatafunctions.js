/**
 * Different functions that use underscore on uhdata.
 * Created by Rory on 9/28/2015.
 */

/**
 * This function can be passed uhdata and returns the total number of degrees awarded in the data set.
 * @param data The data being read.
 */
function totalDegrees(data) {
  return _.reduce(_.pluck(data, "AWARDS"), addAwards, 0);
}

/**
 * Assistant function that adds up awards.
 * @param memo
 * @param num
 * @returns {number}
 */
function addAwards(memo, num) {
  return memo + num;
}

/**
 * This function can be passed uhdata and returns the percentage of degrees that were awarded to students of Hawaiian Legacy in the dataset.
 * @param data
 * @returns {number}
 */
function percentageHawaiian(data) {
  return (totalDegrees(_.filter(data, filterHawaiian)) / totalDegrees(data)) * 100;
}

/**
 * Filters items labelled HAWAIIAN
 * @param item
 * @returns {boolean}
 */
function filterHawaiian(item) {
  return item.HAWAIIAN_LEGACY === "HAWAIIAN";
}

/**
 * This function can be passed uhdata and a year and returns the total number of degrees awarded in the passed year.
 * @param data
 * @param year
 * @returns {Array}
 */
function totalDegreesByYear(data, year) {
  return totalDegrees(_.filter(data, filterYear, year));
}

/**
 * Filters items by year.
 * @param item
 * @returns {boolean}
 */
function filterYear(item) {
  return item.FISCAL_YEAR == this;
}

/**
 * This function can be passed uhdata and returns an array containing all the campuses referenced in the passed dataset.
 * @param data
 * @returns {Array}
 */
function listCampuses(data) {
  return _.uniq(_.pluck(data, "CAMPUS"));
}

/**
 * This function can be passed uhdata and returns an object where the property keys are campuses and the values are the number of degrees awarded by the campus.
 * @param data
 * @returns {Object}
 */
function listCampusDegrees(data) {
  return _.mapObject(_.groupBy(data, "CAMPUS"), changeToTotalDegrees);
}

/**
 * Helper function that reduces given degrees to its total amount.
 * @param value
 * @param key
 * @returns {number}
 */
function changeToTotalDegrees(value, key) {
  return _.reduce(_.pluck(value, "AWARDS"), addAwards, 0);
}

/**
 * This function can be passed uhdata and returns an integer indicating the maximum number of degrees awarded for each year.
 * @param data
 * @returns {Object}
 */
function maxDegrees(data) {
  return _.mapObject(_.groupBy(data, "FISCAL_YEAR"), changeToTotalDegrees);
}

/**
 * This function can be passed uhdata and returns a list of the degree programs (“CIP_DESC”) for which a doctoral degree is granted.
 * @param data
 * @returns {Array}
 */
function doctoralDegreePrograms(data) {
  return _.uniq(_.pluck(_.filter(data, filterDoc), "CIP_DESC"));
}

/**
 * Filters items by doctoral degree.
 * @param item
 * @returns {boolean}
 */
function filterDoc(item) {
  return item.OUTCOME == "Doctoral Degrees";
}