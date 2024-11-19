import React from 'react'
import ItemList from '../ItemListContainer/ItemList'
import products from '../../utils/data'

const Products = () => {
    return (
        <>
            <article className='title'>
                <h2>Nuestros destacados</h2>
                <figure className='divider tl'></figure>
            </article>
            <ItemList products={products} />
        </>
    )
}

export default Products