export async function getMoviesList(page, target, query) {
    return await fetchSave('https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page='+ page + target + encodeURI(query) + '&api_key=6c617c89b5bc8be07b9c9f4fe4008d72');
}

function fetchSave(url, requestDataOption = {}) {
    return fetch(url, requestDataOption)
        .then(handleResponse)
}


export const handleResponse = async (response) => {
    if (response.ok) {
      return response.json();
    }
    return failure(response);
}

export const failure = response =>
    response
        .text()
        .then(text => Promise.reject({
            status: response.status,
            message: (text || response.statusText)
        }))
