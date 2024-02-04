import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { api_key } = process.env;

export const getGamesController = async function () {
  const games = await axios
    .get(`https://api.rawg.io/api/games?key=${api_key}`)
    .then((res) => res.data.results);

  return games;
};
