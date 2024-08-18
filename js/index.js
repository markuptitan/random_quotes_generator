const categories = [
  'age',
  'alone',
  'amazing',
  'anger',
  'architecture',
  'art',
  'attitude',
  'beauty',
  'best',
  'birthday',
  'business',
  'car',
  'change',
  'communication',
  'computers',
  'cool',
  'courage',
  'dad',
  'dating',
  'death',
  'design',
  'dreams',
  'education',
  'environmental',
  'equality',
  'experience',
  'failure',
  'faith',
  'family',
  'famous',
  'fear',
  'fitness',
  'food',
  'forgiveness',
  'freedom',
  'friendship',
  'funny',
  'future',
  'god',
  'good',
  'government',
  'graduation',
  'great',
  'happiness',
  'health',
  'history',
  'home',
  'hope',
  'humor',
  'imagination',
  'inspirational',
  'intelligence',
  'jealousy',
  'knowledge',
  'leadership',
  'learning',
  'legal',
  'life',
  'love',
  'marriage',
  'medical',
  'men',
  'mom',
  'money',
  'morning',
  'movies',
  'success'
];

function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

const fetchQuote = (category) => {
  const apiKey = 'VqX5koegh8IRelt4umtTWA==IVC0lk1bsYeyyfoS';
  const requestURL = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  
  fetch(requestURL, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const quoteText = data[0]?.quote || 'No quote found';
    const quoteAuthor = data[0]?.author || 'Unknown author';
    document.getElementById('quote').innerHTML = `"${quoteText}"<br><strong>- ${quoteAuthor}</strong>`;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const category = getRandomCategory();
  fetchQuote(category);
});

document.getElementById('generate').addEventListener('click', () => {
  const category = getRandomCategory();
  fetchQuote(category);
});
