var newsSection = document.querySelector(".newsSection");
var articles;

function createArticle(img, link, title, source) {
  var newArticle = document.createElement("div");
  newArticle.classList = "newsArticle";
  if (title.length >= 31) {
    title = title.substr(0, 31) + "...";
  }
  newArticle.innerHTML =
    "<a href='" +
    link +
    "' target='_blank'><div class='articleTitle'>" +
    title +
    "</div><div class='articleSource'>" +
    source +
    "</div></a>";
  newArticle.firstElementChild.style.background = "url(" + img + ")";
  newArticle.firstElementChild.style.backgroundSize = "contain";
  newArticle.firstElementChild.style.backgroundRepeat = "no-repeat";
  newsSection.appendChild(newArticle);
}

var url =
  "https://newsapi.org/v2/top-headlines?" +
  "sources=la-nacion&" +
  "apiKey=05619d354fd34a638c17ce96756ce349";

var req = new Request(url);

fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    console.log(res.articles);
    for (var i = 0; i < res.articles.length; i++) {
      var currentArticle = res.articles[i];
      createArticle(
        currentArticle.urlToImage,
        currentArticle.url,
        currentArticle.title,
        currentArticle.source.name
      );
    }
  });
