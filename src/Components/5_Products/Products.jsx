
import React from 'react'
import './products.css'

import product_1 from '../../assets/product-1.jpg'
import product_2 from '../../assets/product-2.jpg'
import product_3 from '../../assets/product-3.jpg'
export default function Products() {
    return (
        <section className="product" id="store">
            <div className="section__container product__container">
                <p className="section__subheader">Products</p>
                <h2 className="section__header">Featured pet products</h2>
                <div className="product__grid">
                    <div className="product__card">
                        <img src={product_1} alt="product" />
                        <h4>Dog Trash Bag</h4>
                        <p>
                            Convenient and eco-friendly trash bags for easy pet waste
                            disposal.
                        </p>
                        <h3>$29.00 USD</h3>
                    </div>
                    <div className="product__card">
                        <img src={product_2} alt="product" />
                        <h4>Pet Accessories</h4>
                        <p>
                            Explore our range of stylish and functional accessories for your
                            furry friends.
                        </p>
                        <h3>$49.00 USD</h3>
                    </div>
                    <div className="product__card">
                        <img src={product_3} alt="product" />
                        <h4>Dog Food</h4>
                        <p>
                            Nutritious and delicious dog food to keep your pet healthy and
                            happy.
                        </p>
                        <h3>$79.00 USD</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
