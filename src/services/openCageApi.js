// import axios from "axios";

// const API_KEY = "c34efdc8ec4d43dfa0a3980567efbefd";

// axios.defaults.baseURL = "https://api.opencagedata.com/geocode/v1/json";

// export const getPosition = async (lat, long) => {
//   try {
//     const {data} = await axios.get(`?q=${lat}+${long}&key=${API_KEY}`);
//     return data.results[0].annotations.currency.iso_code;
//   } catch (error) {
//     console.log(error);
//   }
// };

// https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=c34efdc8ec4d43dfa0a3980567efbefd