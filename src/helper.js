/**
 *
 * @param {string} url
 * @returns
 * this function will return a valid api response that is ready to use
 */
export const getApiData = async function (url) {
  const response = await fetch(url);

  const result = await response.json();

  return result;
};


