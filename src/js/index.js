const query = async function () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=a9cb170fcb7376800f05d8e3176d1cc1&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&vote_count.gte=7000&include_null_first_air_dates=false&with_watch_monetization_types=flatrate');
        const data = await response.json();
        data.results.forEach((tvshow) => {
            DOMSelectors.grid.insertAdjacentHTML("beforeend", ''
            )}) 
    }catch(err){
        alert(err)
    }
};
query();