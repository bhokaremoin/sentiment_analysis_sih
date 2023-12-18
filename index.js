const natural = require("natural");
const removeStopwords = require("stopword").removeStopwords;
function getSentiment(text) {
  const alphaOnlyReview = text.replace(/[^a-zA-Z\s]+/g, "");
  const tokenizer = new natural.WordTokenizer();
  const tokenizedText = tokenizer.tokenize(alphaOnlyReview);
  const filteredText = removeStopwords(tokenizedText);

  const analyzer = new natural.SentimentAnalyzer(
    "English",
    natural.PorterStemmer,
    "afinn"
  );
  return analyzer.getSentiment(filteredText);
}
const text = "It was a not bad book,I liked it very much";
const output = getSentiment(text);
console.log(output);
