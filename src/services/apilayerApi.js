// import axios from "axios"

// const KEY = "Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj";

// const instance = axios.create({
//   baseURL: " https://api.apilayer.com/exchangerates_data/convert",

//   headers: { apikey: KEY },
// });


export const getConvert = async (from, to, amount) => {
    console.log(from, to, amount);
//   try {
//     // const { data } = await instance.get(`?to=${to}&from=${from}&amount=${amount}`);
//     // console.log(data);
//     // return Object.keys(data.symbols);
//   } catch (error) {
//     console.log(error);
//   }
};




// https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15





// var myHeaders = new Headers();
// myHeaders.append("apikey", "Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj");

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
//   headers: myHeaders,
// };

// export const getSymbols = () => {
//     fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error));
// }

