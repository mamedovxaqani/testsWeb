function convertTitle(title) {
  const titleArray = title.split(" ");

  if (titleArray.length > 12) {
    titleArray.length = 6;
    titleArray.push("...");
    const newTitle = titleArray.join(" ");

    return newTitle;
  }
  return title;
}

export default convertTitle;
