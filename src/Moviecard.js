

function MovieCard(props) {

   


    // addStar = () => {
    //     if(this.state.stars>=5)
    //     {
    //         return;
    //     }

    //     this.setState({
    //         stars: this.state.stars + 0.5
    //     });
    // }

    // remStar = () => {

    //     if(this.state.stars<=0)
    //     {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars - 0.5
    //         }
    //     });

    // }

//     changeBut= ()=>{
//   this.setState({
//     fav: !this.state.fav
//   })
//     }

    // handleCart= ()=>{
    //     this.setState({
    //         cart: !this.state.cart
    //     })
    // }

        const { title, plot, price, rating, poster, stars,fav,cart } = props.movies;
        const {addStar,remStar,changeFav,changeCart,movies}= props;

        return (

            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>

                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn" onClick={()=>{remStar(movies)}}
                                    alt="Decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                />
                                <img className="stars"
                                    alt="stars"
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn" onClick={()=>{addStar(movies)}}
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                />
                                <span className="starCount">  {stars}/5</span>
                            </div>

                            {/* {fav?<button onClick={this.changeBut} className="favourite-btn">Favourite</button>: <button onClick={this.changeBut} className="favourite-btn">Un-Favourite</button>} */}
                            <button onClick={()=>{changeFav(movies)}} className="favourite-btn">{fav?"Favourite":"Undo-Fav"}</button>
                            {/* {cart?<button onClick={this.handleCart} className="cart-btn">Add to Cart</button>:<button onClick={this.handleCart} className="cart-btn">Remove from cart</button>} */}
                            <button className="cart-btn" onClick={()=>{changeCart(movies)}}>{cart?"Add to Cart" : "Remove"}</button>
                        </div>
                    </div>

                </div>
                
            </div>
            
        )

    

}

export default MovieCard;