// contains all elements in a card
import React, {Suspense, useState} from "react";

import DateLabel from './product/DateLabel';
import Price from './product/Price';
import Category from './product/Category';
import Deal from './product/Deal';
import ProductBookmark from "./product/ProductBookmark";

const Image = React.lazy(() => import ('./product/Image'));

function ProductCard(props) {

  const [isOpen, setIsOpen] = useState(false);

  // FIXME niet netjes, lostrekken
  const convertProductToLink = (product) => {

    product = product.trim();
  
    var parsedProduct = product.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
    .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
    .replace(/(^-+|-+$)/g, ''); 
    parsedProduct = parsedProduct.toLowerCase(); 

    return parsedProduct;
  }

  const toggleOverlay = () => {
    setIsOpen(isOpen => !isOpen)
  }

    return (
      <article className="flex-item" data-cat={props.item['category']}>
        {/* product card banner  */}
        <div className={"product-header " + props.item['shop']}>
          <span className="product-shop">{props.item['shop']}</span>
          <DateLabel dateEnd={props.item['dateEnd']} dateStart={props.item['dateStart']}/>
        </div>
        {/* categorty label */}
        <Category category={props.item['category']}/>
        <Price newPrice={props.item['price']} />
        <Suspense fallback={<div className="even-geduld-image"></div>}>
          <Image image={props.item['image']} />
        </Suspense> 
        <summary className="product-name">
          <a href={props.item['link']} target="blank">
            <span className="product-title">{props.item['product']}</span>
            <span className="product-info"> {props.item['productInfo']}</span>
          </a>
        </summary>
        <Deal deal={props.item['deal']} />
        <ProductBookmark id={props.item['productId']}/>
      </article>
    )
}

export default ProductCard;
