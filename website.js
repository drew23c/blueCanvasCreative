var globalBlob = null;
var ctx;
var can;    
document.addEventListener('DOMContentLoaded', ()=>{
    var can = document.getElementById('heading');
    ctx = can.getContext('2d');

    document.fonts.load('24px Permanent Marker');
    ctx.strokeStyle = 'blue';
    ctx.font = '24px Permanent Marker';
    ctx.strokeText('Blue Canvas Creative',50,200);    

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(50, 325, 100, 100);

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(250, 550, 100, 100);


    var m = document.querySelector('#main')
    var d = document.querySelector('#desc') 
    var l = document.querySelector('#loc') 
    var t = document.querySelector('#temp')  
    var n = document.querySelector('#tNews')
    
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&APPID=e27d91391c9f2d52f35acc56e60be09f';
    var nUrl = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=54477af0fd3e48189acb41e782b7b68a'
    
    window.addEventListener('load',()=>{
        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
        .then(function(resp){
            console.log(resp)
            return resp.json();
        })
        .then(function(myBlob){
            var tNum = myBlob.main.temp
            console.log(myBlob)
            globalBlob = myBlob
            l.innerHTML = myBlob.name;
            m.innerHTML = myBlob.weather[0].main;
            d.innerHTML = myBlob.weather[0].description;
            t.innerHTML = Math.floor(9/5 * (tNum - 273) + 32) + ' degrees F'
        });

        fetch(nUrl, {
            method: 'GET',
            mode: 'cors'
        })
        .then(function(resp){
            console.log(resp)
            return resp.json();
        })
        .then(function(news){
            console.log(news)
            globalBlob = news;
                news.articles.forEach(function(el){
                    var string = el.url;
                    var newsLink = string.link(el.url)
                    console.log(el.title)                    
                    n.innerHTML += el.title + '<br>' + newsLink + '<br><br>'
                })
            })
    }); 
});