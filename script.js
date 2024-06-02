const APILINK='https://api.themoviedb.org/3/discovery/movie?sort_by=popularity.desc&api_key=788a6a5c3922dc76dcaacb2cfd613e01&pages=1'
const IMG_PATH='https://images.tmdb.org/t/p/w1280'
const SEARCHAPI="https://api.themoviedb.org/3/discovery/movie?&api_key=788a6a5c3922dc76dcaacb2cfd613e01&query="

const main=document.getElementById("section")
const form=document.getElementById("form")
const search=document.getElementById("data-item")

returnMovies(APILINK)
function returnMovies(url){
fetch(url).then(res=>res.json)
    .then(function(data){
        console.log(data.results)
        data.results.forEach(element => {
            const div_column=document.createElement('div')
            div_column.setAttribute('class','column')

            const div_row=document.createElement('div')
            div_row.setAttribute('id','row-item')

            const div_card=document.createElement('div')
            div_card.setAttribute('class','card')

            const image=document.createElement('img')
            image.setAttribute('class','thumbnail')
            image.setAttribute('id','image')

            const title=document.createElement('h3')
            title.setAttribute('id','title')


            title.innerHTML=`${element.title}`
            image.src=IMG_PATH + element.poster_path

            div_card.appendChild(image)
            div_card.appendChild(title)
            div_column.appendChild(div_card)
            div_row.appendChild(div_column)

            main.appendChild(div_row)
        });
    })      
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML=''

    const searchItem=search.value 
    if (searchItem) {
        returnMovies(SEARCHAPI+searchItem)
        search.value=''
    }
})