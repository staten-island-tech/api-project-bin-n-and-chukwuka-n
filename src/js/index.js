import { DOMSelectors } from "./DOM";
const query = async function () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=a9cb170fcb7376800f05d8e3176d1cc1&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&vote_count.gte=7000&include_null_first_air_dates=false&with_watch_monetization_types=flatrate');
        const data = await response.json();
        console.log(data.results)
        data.results.forEach((TVshows) => {
            DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="tv-card">
            <div class="tv-card-front">
              <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nu6dcBfxr4VmOBj4k1S9r0r1MOW.jpg" alt=""
                class="poster" />
            </div>
            <div class="tv-card-back">
              <h2 class="tv-card-header">The Tales of Miraculous LadyBug</h2>
              <div class="scorebox">
                <p class="user-score">Community Score</p>
                <p class="user-score">7.9</p>
              </div>
            </div>
            <div class="release date">
              <p class="release-date">Released</p>
              <p class="release-date">2015-10-19</p>
            </div>
            <div class="tv-genres">
              <li class="tv-genre">Action and Adventure</li>
              <li class="tv-genre">Comedy</li>
              <li class="tv-genre">Sci-Fi</li>
              <li class="tv-genre">Comedy</li>
            </div>
          </div>>`
        )
            })
    }
    catch (error) {
      console.log(error);
      alert("Something went wrong");
    };
  }
query();  