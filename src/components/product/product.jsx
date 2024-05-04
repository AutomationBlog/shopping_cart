import "./product.css";
import "../styles.css";
import ProductItems from "../commonComponenets/productItems/productItems.jsx";
import PropTypes from "prop-types";

const ProductDetails = [
  {
    id: 1,
    name: "Fancy Product1",
    isOffer: false,
    price: "$40.00 - $80.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: true,
    review: false,
  },
  {
    id: 2,
    name: "Special Item1",
    isOffer: true,
    actualPrice: "$20.00",
    offerPrice: "$18.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: false,
    review: true,
  },
  {
    id: 3,
    name: "Sale Item1",
    isOffer: true,
    actualPrice: "$50.00",
    offerPrice: "$25.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: true,
    review: true,
  },
  {
    id: 4,
    name: "Popular Item1",
    price: "$40.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: false,
    review: false,
  },
  {
    id: 5,
    name: "Sale Item2",
    isOffer: true,
    actualPrice: "$50.00",
    offerPrice: "$25.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: false,
    review: false,
  },
  {
    id: 6,
    name: "Fancy Product2",
    isOffer: false,
    price: "$120.00 - $280.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: true,
    review: true,
  },
  {
    id: 7,
    name: "Special Item2",
    isOffer: true,
    actualPrice: "$20.00",
    offerPrice: "$18.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: true,
    review: false,
  },
  {
    id: 8,
    name: "Popular Item2",
    isOffer: false,
    price: "$40.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sales: false,
    review: true,
  },
];

export default function Product({ cart, setCart }) {
  return (
    <>
      {/*<!-- Section-->*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductItems
              items={ProductDetails}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </section>
    </>
  );
}

Product.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
