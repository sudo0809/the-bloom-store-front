import React from 'react'
import { Link } from 'react-router-dom'
import { CardBottomDiv, CardBottomLeftDiv, CardContainer, CardImg, CardLink, CardUpperDiv, CartImg, ProductName } from './style';
import cart from '../../svgs/cart.svg'

function ProductCard() {
    return (
        <CardContainer>
            <CardLink>
                <CardUpperDiv>
                    <CardImg src='https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8=' alt='plant img' />
                </CardUpperDiv>
                <CardBottomDiv>
                    <CardBottomLeftDiv>
                        <ProductName> Plant </ProductName>
                        <div className='price'> Rs. 1000 </div>
                    </CardBottomLeftDiv>
                    <div className='lower-right'>
                        <Link to='/cart'>
                            <CartImg src={cart} alt='cart' />
                        </Link>
                    </div>
                </CardBottomDiv>
            </CardLink>

        </CardContainer>
    )
}

export default ProductCard;