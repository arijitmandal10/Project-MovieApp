import React from "react";
import MovieList from "./Movielist"
import Navbar from "./Navbar";
import { movies } from "./MoviesData";

import "./index.css"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
      show: false
    }
  }

  handleAdd = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;

    this.setState({
      movies
    })
  }

  handleRem = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;

    this.setState({
      movies
    })
  }

  handleFavBut = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies
    })

  }

  handleCartBut = (movie) => {
    let { movies, cartCount, show } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
   

    if (movies[mid].cart) {
      show=!show;
      cartCount -= 1;
    }
    else {
      cartCount += 1;
    }

    this.setState({
      movies,
      cartCount,
      show
    })

  }



  render() {

    let { movies,cartCount } = this.state;

    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList movies={movies}
          addStar={this.handleAdd}
          remStar={this.handleRem}
          changeFav={this.handleFavBut}
          changeCart={this.handleCartBut} />
      </>
    );
  }
}

export default App;
