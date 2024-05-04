import React from "react";
import PropTypes from "prop-types";

export default function ProductItems({ items, cart, setCart }) {
  const addToCart = (items) => {
    setCart([...cart, items]);
  };

  const removeFromCart = (items) => {
    setCart(cart.filter((c) => c.id !== items.id));
  };

  return (
    <>
      {items.map((items) => (
        <React.Fragment key={items.id}>
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              {items.sales ? (
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
              ) : (
                <></>
              )}
              {/*<!-- Product image-->*/}
              <img className="card-img-top" src={items.image} alt="..." />
              {/*<!-- Product details-->*/}

              <div className="card-body p-4">
                <div className="text-center">
                  {/*<!-- Product name-->*/}
                  <h5 className="fw-bolder">{items.name}</h5>
                  {/*<!-- Product reviews-->*/}
                  {items.review ? (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {/*<!-- Product price-->*/}
                  {items.isOffer ? (
                    <div>
                      <span className="text-muted text-decoration-line-through">
                        {items.actualPrice}
                      </span>
                      {items.offerPrice}
                    </div>
                  ) : (
                    <div className="fw-bolder">{items.price}</div>
                  )}
                </div>
              </div>
              {/*<!-- Product actions-->*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {items.sales ? (
                    <div>
                      {cart.includes(items) ? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                          onClick={() => removeFromCart(items)}
                        >
                          Remove cart
                        </a>
                      ) : (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                          onClick={() => addToCart(items)}
                        >
                          Add to cart
                        </a>
                      )}
                    </div>
                  ) : (
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

ProductItems.propTypes = {
  items: PropTypes.array.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  sales: PropTypes.boolean,
  isOffer: PropTypes.boolean,
  actualPrice: PropTypes.string.isRequired,
  offerPrice: PropTypes.string.isRequired,
  review: PropTypes.boolean,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
