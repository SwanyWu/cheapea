## npm
- `npm init` will set up an empty project, hit enter to agree on default setting
- `npm start` will run locally. If it's first time cloned from remote repo, run `npm install` first

## 4 main page
- src/pages/Main.js (main/home page)
- src/pages/SearchProduct.js (zoek) --> ProductContainer.js (found/not found)
- src/pages/Bookmarks.js (bewaard)

## common feature in each page
- GoHomeButton.js
- SearchButton.js
- BookmarkButton.js
- ShareButton.js
- ShareDialog.js pop-up after clicking on 'kopier' and 'deel', text will be different depending on current page
- Offer.json of below format, parsed by /parse_offer.*
    - "productId": "6606010-B-1",
    - "product": "The jordans en ryvita company",
    - "productInfo": "325 - 850 gram",
    - "category": "ontbijt",
    - "image": "https://www.jumbo.com/img.png",
    - "deal": "2e halve prijs",
    - "price": 0.0,
    - "percentage": 25,
    - "dateStart": "2022-11-01",
    - "dateEnd": "2022-12-06",
    - "link": "https://jumbo.com/aanbiedingen/6606010-B-1",
    - "shop": "jumbo",
    - "id": 142

## other elements
- App.js displays the landing page and defines interactions with filter on the left.
  - Footer.js
  - Main.js
  - SearchProduct.js
  - Bookmarks.js
  - SingleProduct.js
  - ListProduct.js
  - Offers.js
  - NotFound.js (when random url is entered)
- src/components/ProductCard.js
  - DateLabel.js
  - Price.js
  - Category.js
  - Deal.js
  - ProductBookmark.js
- ProductContainer.js
  - NoProduct.js (if search res is empty)
  - ProductCard.js (all search res)