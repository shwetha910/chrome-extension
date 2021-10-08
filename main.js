document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h4');
    title.innerText = 'Additional Resources';
    document.querySelector('body').appendChild(title);



    //var searchResults=UrlFetchApp.fetch("https://www.google.com/search?q="+encodeURIComponent("keyword finder tool")+"&num=10",{muteHttpExceptions:true});
    // fetch('https://curriculum-api.codesmith.io/messages')
    // .then((response) => response.json())
    // .then(data => {
    //   for (let i = 0; i < 20; i++) {
    //     document.querySelector('#incoming').innerHTML += `${data[i]['message']} by ${data[i]['created_by']}<br>`;
    //   }
    // })
    // .catch(error => console.log(error))
    fetch("https://www.google.com/search?q=" + encodeURIComponent("keyword finder tool") + "&num=10")
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))

    // var titleExp = /<h3 class=\"r\">([\s\S]*?)<\/h3>/gi;
    // var urlExpression = /<h3 class=\"r\">([\s\S]*?)\&amp\;/gi;


    // var titleResults = searchResults.getContentText().match(titleExp);
    // var urlResults = searchResults.getContentText().match(urlExpression);


    //To get the actual Title
    // for(var i in titleResults)
    //   {

    //     var actualTitle=titleResults[i].replace(/(^\s+)|(\s+$)/g, "").replace(/<\/?[^>]+>/gi, "");
    //     Logger.log(actualTitle);
    //   }

    //To get the actual URL
    // for (var i in urlResults) {
    //     var actualURL = urlResults[i].replace('<h3 class="r"><a href="/url?q=', "").replace('&amp;', "");
    //     console.log(actualURL);
    // }

}

)