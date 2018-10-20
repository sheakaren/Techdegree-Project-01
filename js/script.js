// FSJS - Random Quote Generator

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var usedQuotes = [];


// Create the array of quote objects and name it quotes

// Original group of quotes
var quotes = [
  {
    quote: 'It is our choices, Harry, that show what we truly are, far more than our abilities.',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Chamber of Secrets',
    year: 1998
  },
  {
    quote: 'The way I see it, every life is a pile of good things and bad things... The good things don\'t always soften the bad things, but vice-versa, the bad things don\'t necessarily spoil the good things and make them unimportant.',
    source: 'The Doctor',
    citation: 'Doctor Who',
    year: 2010
  },
  {
    quote: 'The story so far:<br>In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.',
    source: 'Douglas Adams',
    citation: 'The Restaurant at the End of the Universe',
    year: 1980
  },
	{
	quote: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
	source: "Viktor Frankl"
	},
  {
    quote: 'I swear by my pretty floral bonnet, I will end you.',
    source: 'Malcolm Reynolds',
    citation: 'Firefly',
    year: 2002
  },
  {
    quote: 'I understand what you\'re saying, and your comments are valuable, but I\'m gonna ignore your advice.',
    source: 'Mr. Fox',
    citation: 'The Fantastic Mr. Fox',
    year: 2009
  }
];

// Quotes added
quotes.push(
  {
    quote: 'My goal is not to wake up at forty with the bitter realization that I\'ve wasted my life in a job I hate, because I was forced to decide on a career in my teens.',
    source: 'Daria Morgendorffer',
    citation: 'Daria',
    year: 1998
  }
);
quotes.push(
  {
    quote: 'I see now that the circumstances of one\'s birth are irrelevant; it is what you do with the gift of life that determines who you are.',
    source: 'Mewtwo',
    citation: 'Pokémon: The First Movie - Mewtwo Strikes Back',
    year: 1998
  }
);

// test in the console to see if the array is correctly written
console.log(quotes);

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  var splicedQuotes = quotes.splice(randomQuote, 1)[0];
	usedQuotes.push(splicedQuotes);
	if ( quotes.length === 0 ) {
		quotes = usedQuotes;
		usedQuotes = [];
	}
	return splicedQuotes;
};

// test in the console to see if this function is... functional
console.log(getRandomQuote());


// Create the printQuote funtion and name it printQuote
function printQuote(message) {
  var theQuote = getRandomQuote();
  var message = "<p class= 'quote'>" + theQuote.quote + "</p>" +
                "<p class= 'source'>" + theQuote.source + "</p>" +
                "<p class= 'citation'>" + theQuote.citation + "</p>" +
                "<p class = 'year'>" + theQuote.year + "</p>" ;
  document.getElementById('quote-box').innerHTML = message;
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
