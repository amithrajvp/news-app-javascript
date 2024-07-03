const todayNews = document.getElementById('todayNews');


const API_KEY = "a25f309d6bba45128e76f1d93b813588";



fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-06-24&to=2024-06-24&sortBy=popularity&apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((articleList) => {
        const article = articleList.articles 
        console.log (article)

        for (let i = 5; i < 11; i++ ) {
            const newsCard = article[i]

            const cardDiv = document.createElement('div')
            cardDiv.classList.add('card')
            console.log (cardDiv)

            const cardHeader = document.createElement('div')
            cardHeader.classList.add('card-header')
            cardDiv.appendChild(cardHeader)

            const cardImage = document.createElement('img')
            cardImage.src = newsCard.urlToImage
            cardHeader.appendChild(cardImage)

            const cardContent = document.createElement('div')
            cardContent.classList.add('card-content')
            cardDiv.appendChild(cardContent)

            const newsTitleH3 = document.createElement('h3')
            newsTitleH3.classList.add('news-title')
            newsTitleH3.innerHTML = newsCard.title
            cardContent.appendChild(newsTitleH3)

            const newsSource = document.createElement('h6')
            newsSource.classList.add('news-source')
            newsSource.innerHTML = newsCard.publishedAt
            cardContent.appendChild(newsSource)

            const newsDesc = document.createElement('p')
            newsDesc.classList.add('news-desc')
            newsDesc.innerHTML = newsCard.description
            cardContent.appendChild(newsDesc)


            todayNews.appendChild(cardDiv)



        }
    })
   
    .catch(error => console.error(error));