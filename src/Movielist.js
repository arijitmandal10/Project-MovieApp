import MovieCard from "./Moviecard";




function MovieList(props) {




  
        const { movies, addStar, remStar, changeFav, changeCart } = props;


        return (
            <> 

                    {movies.map((movie) => 

                        <MovieCard movies={movie}
                            // key={index}
                            addStar={addStar}
                            remStar={remStar}
                            changeFav={changeFav}
                            changeCart={changeCart} />)}
              


            </>
        )
    

}

export default MovieList