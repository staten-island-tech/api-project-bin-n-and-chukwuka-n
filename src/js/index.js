const query = async function () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=a9cb170fcb7376800f05d8e3176d1cc1&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&vote_count.gte=7000&include_null_first_air_dates=false&with_watch_monetization_types=flatrate');
        const data = await response.json();
        console.log(data.results)
        data.results.forEach((TVshows) => {
            DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="TVshow-card">
            <div class="TvShow-front">
              <img src="https://www.themoviedb.org/t/p/w600/${TVshow.poster_path}" 
              alt=""
            class="poster" />
            </div>
            <div class="Tvshow-back">
              <h2 class="Tvshow-header">${TVshows.original_title}</h2>
              <div class="score-box">
                <p class="user-score">Community Score</p>
                <p class="user-score">${TVshows.vote_average}</p>
              </div>
            </div>
            <div class="release-date">
              <p class="releasing-date">Released</p>
              <p class="releasing-date">${TVshows,release_date}</p>
            </div>
            <div class="TVshow-genres">
              <li class="TVshow-genre">Action and Adventure</li>
              <li class="TVshow-genre">Comedy</li>
              <li class="TVshow-genre">Sci-Fi</li>
              <li class="TVshow-genre">Comedy</li>
            </div>')
          </div>
        })
    } 
    catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
query();