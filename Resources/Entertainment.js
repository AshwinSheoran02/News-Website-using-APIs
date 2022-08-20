console.log("News Website");
// 75098fa5661e4e1985f6826272b071dd

let source = 'the-times-of-india';

let apiKey = '75098fa5661e4e1985f6826272b071dd'


let newsaccordion = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();
//xhr.open('GET' ,'https://newsapi.org/v2/top-headlines?country=in&apiKey=75098fa5661e4e1985f6826272b071dd' , true );
xhr.open('GET' ,'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=75098fa5661e4e1985f6826272b071dd' , true );
//xhr.open('GET', `https://ashwinsheoran02.github.io/News-API/data.json`, true);
//xhr.getAllResponseHeaders('Content-type' , 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <h5> <b>Breaking News ${index+1}:</b> ${element["title"] } 
                                   🔽
                                </button>
                                <h5>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more about this here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsaccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
