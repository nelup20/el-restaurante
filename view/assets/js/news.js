
const NEWS_API_KEY = "";
const newsSection = document.querySelector(".newsSection");

function createArticle(article) {
  let newsArticle = document.createElement("div");
  newsArticle.classList.add("newsArticle");

  const {urlToImage, title, url, source} = article;

  if (title.length >= 31) article.title = `${title.substr(0, 31)}...`;

  newsArticle.innerHTML = `<a href='${url}' target='_blank'>
                              <div class='articleTitle'>
                                  ${title}
                              </div>
                              <div class='articleSource'>
                                  ${source.name}
                              </div>
                           </a>`;

  newsArticle.firstElementChild.style.background = `url(${urlToImage})`;
  newsArticle.firstElementChild.style.backgroundSize = "contain";
  newsArticle.firstElementChild.style.backgroundRepeat = "no-repeat";
  newsSection.appendChild(newsArticle);
}

const newsApiUrl = `https://newsapi.org/v2/top-headlines?sources=la-nacion&apiKey=${NEWS_API_KEY}`;

fetch(newsApiUrl)
  .then(res => res.json())
  .then((res) => res.articles.forEach(article => createArticle(article)));
