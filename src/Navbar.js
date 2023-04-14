import styled from "styled-components";

function Navbar(props) {


              const {cartCount}=props;
        return (
            <>
            <Nav>
                <Title>
                    MY-MOVIES
                </Title>
                <div>
                    <Cart src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart icon" />
                    <ItemCount show={true}>{cartCount}</ItemCount>
                </div>

            </Nav>
            <hr/>
            </>

        )
    }



const Nav = styled.div
    `
        position: relative;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background: linear-gradient(79deg, rgba(21,148,0,1) 0%, rgba(97,246,249,1) 100%);
        margin: auto;
        padding: 0px 10px;
        &:hover{
            border-bottom: 2px dashed black;
          

         }
    `;

const Title = styled.div`
    font-size: 50px;
    background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(255,35,35,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: cursive;
    font-weight: bolder;
    margin: 0px 30px;

    &:hover{
        background: -webkit-radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;

    }

    `;

const Cart = styled.img`
    height: 30px;
    width: auto;
    position: relative;
    top: 18px;
    right: 65px;
    `;

const ItemCount = styled.span`
    position: absolute;
    border-radius: 50%;
    background-color: #ff4d4d;
    width: 20px;
    bottom: 40px;
    right: 64px;
    color: white;
    text-align: center;
    visibility: ${(props) => props.show ? "visible" : "hidden" };
    
    `;


export default Navbar;