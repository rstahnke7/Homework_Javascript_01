// 4 Functions for the Bill Watrous website

// Function 1 - Function to validate email 
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

// Function 2 - Function to pick a random Bill Watrous song to play
const songss = ["Song1", "Song2", "Song3", "Song4", "Song5"];

function getRandomSong() {
  const index = Math.floor(Math.random() * songs.length);
  return songs[index];
}
console.log(`Song to play: ${getRandomSong()}`);

// Function 3 - Function to keep a running total of album prices to be bought

let totalPrice = 0;
function updateTotalPrice(newPrice) {
    totalPrice = totalPrice + newPrice;
    return totalPrice;
}

// Function 4 - Function to check if feedback is positive or negative

function isPositiveComment(comment) {
  const positiveWords = ["great", "awesome", "good", "excellent", "amazing", "love"];
  const negativeWords = ["bad", "terrible", "awful", "hate", "poor", "worst"];

  const lowerCaseComment = comment.toLowerCase();

  const hasPositive = positiveWords.some(word => lowerCaseComment.includes(word));
  const hasNegative = negativeWords.some(word => lowerCaseComment.includes(word));

  if (hasPositive && !hasNegative) return "Positive";
  if (hasNegative && !hasPositive) return "Negative";
  if (hasPositive && hasNegative) return "Mixed";
  return "Neutral";
}