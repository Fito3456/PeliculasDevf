const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDEwNGUxOGE3YjVlMDExNGJlNGE1YmYzZTI1YThmMSIsInN1YiI6IjY1ZWY5N2U5MTdiNWVmMDE0OGI3MGE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3RF_kl9u3AiuL7hAtPwC0OpA0UNxFfMFYDlCaeThVI4'
}

export const DataProvider = {
    
    
    getNowPlayingMovies: async(page=1) =>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
           alert("Hubo un error buscando la pelicula o vuelva mas tarde")
            
        }
       
    },
    getPopularMovies: async(page=1) =>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
           alert("Hubo un error buscando la pelicula o vuelva mas tarde")
            
        }
    },
    getTopMovies: async(page=1) =>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
           alert("Hubo un error buscando la pelicula o vuelva mas tarde")
            
        }
    },
    getUpcomnigMovies: async(page=1) =>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
           alert("Hubo un error buscando la pelicula o vuelva mas tarde")
            
        }
    },
    getMovieByName: async(page=1 , name) =>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
           alert("Hubo un error buscando la pelicula o vuelva mas tarde")
            
        }
    },
       
}


