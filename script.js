const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success. Don't let it stop you.",
  "It's not whether you get knocked down, it's whether you get up.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "We may encounter many defeats but we must not be defeated.",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
  "Imagine your life is perfect in every respect; what would it look like?",
  "We generate fears while we sit. We overcome them by action.",
  "Whether you think you can or think you can’t, you’re right.",
  "Security is mostly a superstition. Life is either a daring adventure or nothing.",
  "The man who has confidence in himself gains the confidence of others.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Creativity is intelligence having fun.",
  "What you lack in talent can be made up with desire, hustle, and giving 110% all the time.",
  "Do what you can with all you have, wherever you are.",
  "Develop an ‘attitude of gratitude’. Say thank you to everyone you meet for everything they do for you.",
  "You are never too old to set another goal or to dream a new dream.",
  "To see what is right and not do it is a lack of courage.",
  "Reading is to the mind, as exercise is to the body.",
  "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.",
  "The future belongs to the competent. Get good, get better, be the best!",
  "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.",
  "Things work out best for those who make the best of how things work out.",
  "A room without books is like a body without a soul.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The way to get started is to quit talking and begin doing.",
  "Don’t be afraid to give up the good to go for the great.",
  "I find that the harder I work, the more luck I seem to have.",
  "Success is not in what you have, but who you are.",
  "Opportunities don't happen. You create them.",
  "Don't be afraid to give up the good to go for the great.",
  "I find that the harder I work, the more luck I seem to have.",
  "Try not to become a man of success. Rather become a man of value.",
  "If you really look closely, most overnight successes took a long time.",
  "Don’t let the fear of losing be greater than the excitement of winning.",
  "If you want to achieve greatness stop asking for permission.",
  "To live a creative life, we must lose our fear of being wrong.",
  "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "Trust because you are willing to accept the risk, not because it’s safe or certain.",
  "The ones who are crazy enough to think they can change the world, are the ones who do.",
  "The only place where success comes before work is in the dictionary.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The starting point of all achievement is desire.",
  "The successful warrior is the average man, with laser-like focus.",
  "You miss 100% of the shots you don’t take.",
  "The road to success and the road to failure are almost exactly the same.",
  "Success seems to be connected with action. Successful people keep moving."
];

const quoteDisplay = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');
const dateTimeDisplay = document.getElementById('date-time');

// Function to update the date and time
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString(undefined, options);
  dateTimeDisplay.textContent = `${date}, ${time}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Event listener for new quote button
newQuoteButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
