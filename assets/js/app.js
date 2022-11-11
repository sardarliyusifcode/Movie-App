const list = document.querySelector("#films-container")
const moreMovieButton = document.querySelector('.more-movie')

fetch('https://api.tvmaze.com/shows')
.then(res=>res.json()).then(arr => {
    for (let i = 0; i < 3; i++) {
        list.innerHTML += `<div class="col-md-3 col-sm-6 col-lg-4">
                <a href="moreinfo.html?${arr[i].id}">
                <div class="card border border-0" style="margin-top:15px; width: 17rem;">
                    <img src="${arr[i].image.medium}" class="card-img-top" >
                    <div class="p-4 bg-black" style=" background-color:#fffff class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <p class="card-text">${arr[i].rating.average}</p>
                    <p style=" height:40px; width:110px; border-radius:90px; "class="btn btn-outline-danger"> <b> More info </b></p>
                    </div>
                  </div></a>
                
            </div>`
    }
})

let index = 3;
moreMovieButton.addEventListener('click' , () => {
    more(index);
    index += 3;
})

function more (i) {
    fetch('https://api.tvmaze.com/shows')
    .then(res=>res.json()).then(arr => {
        let j = i+3;
    for (i; i < j; i++) {
        list.innerHTML += `<div class="col-md-3 col-sm-6 col-lg-4">
                <a href="moreinfo.html?${arr[i].id}">
                <div class="card border border-0" style="margin-top:15px; width: 17rem;">
                    <img src="${arr[i].image.medium}" class="card-img-top" >
                    <div class="p-4 bg-black" style=" background-color:#fffff class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <p class="card-text">${arr[i].rating.average}</p>
                    <p style=" height:40px; width:110px; border-radius:90px; "class="btn btn-outline-danger"> <b> More info </b></p>
                    </div>
                  </div></a>
                
            </div>`
    }
})
}