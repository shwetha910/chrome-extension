document.addEventListener('DOMContentLoaded', () => {
    // const title = document.createElement('h4');
    // title.innerText = 'Additional Resources';
    // document.querySelector('body').appendChild(title);
    //getting search element from google search box text

    const srch = document.querySelector('#search_form_input_homepage');
    console.log(srch, "srch");
    //console.log(srch.value, "value");

    fetch(`https://serpapi.com/search.json?engine=google&q=coffee&api_key=6ab6335eb8617f5cd14d587f9ae2e56fdf4529b4101c95a28f8600b7b60c506c`)
        //.then(console.log(response))
        .then((response) => {
            //console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data);
            data.organic_results.forEach(element => {
                console.log(element)
                const title = element.title;
                const link = element.link;
                const el = document.createElement('div');
                document.getElementById('links').appendChild(el)
                el.innerHTML = `<a href=${link} rel="noopener noreferrer" target = "_blank">${title}</a><br>`;
                //document.querySelector('body').appendChild(el)
            })

        })
        .catch((error) => console.log(error))
})



