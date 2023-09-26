import questionTitle from "../components/fields/questionTitle";

function checker(prev, current) {
  if (prev !== current) {
    return questionTitle();
  }
}

export { checker };
