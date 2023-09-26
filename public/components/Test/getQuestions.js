import { apiUrl } from "../../data/apiUrl.js";

const getQuestion = async () => {
  const data = await fetch(apiUrl);
  const questions = await data.json();
  const { results } = questions;
  console.log(results);
  return results;
};

export default getQuestion;
