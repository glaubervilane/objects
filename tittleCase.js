const titleCase = function(text) {
  if (text === "") {
    return "";
  }

  const words = text.toLowerCase().split(" ");
  const titleCaseWords = words.map(function(word) {
    if (word === word.toUpperCase()) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  return titleCaseWords.join(" ");
};