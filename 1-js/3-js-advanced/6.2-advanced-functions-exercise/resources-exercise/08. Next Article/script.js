function getArticleGenerator(articles) {

    return getArticle;

    function getArticle() {

        if (articles.length) {

            const divEl = document.getElementById('content');

            const articleEl = document.createElement('article');

            articleEl.textContent = articles.shift();

            divEl.appendChild(articleEl);

        }

    }

}