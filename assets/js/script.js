const moreInfo = document.querySelector('.card');
const cardImg = document.querySelector('.img-fluid');
const cardTitle = document.querySelector('.card-title');
const movieGenres = document.querySelector('.genres');
const moviePremiered = document.querySelector('.premiered');
const movieEnded = document.querySelector('.ended');
const movieSummary = document.querySelector('.summary');

fetch(`https://api.tvmaze.com/shows/${window.location.href.substring(window.location.href.lastIndexOf('?')+1)}`).then(response => response.json()).then(json => {
      cardImg.setAttribute('src' , `${json.image.original}`);
      cardTitle.innerText = json.name;
      for (let i = 0; i < json.genres.length; i++) {
        movieGenres.innerText += `${json.genres[i]} /`
      } 
      moviePremiered.innerText = `Premiered: ${json.premiered}`;
      movieEnded.innerText = `Ended: ${json.ended}`;
      movieSummary.innerHTML = `Summary: <br> ${json.summary}`;
      
})