function randomAnswerPlace(answers) {
  return answers
    .map((element) => {
      const randomNumber = Math.floor(Math.random() * 100);
      return { id: randomNumber, value: element };
    })
    .sort((elementOne, elementTwo) => {
      return elementOne.id - elementTwo.id;
    })
    .map((element) => element.value);
}

export default randomAnswerPlace;
