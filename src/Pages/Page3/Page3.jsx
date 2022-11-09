import React from "react";
import "../Page3/Page3.css";
import logo from "../../Assets/Images/logo3.png";

function Page3() {
  return (
    <div className="p3-body">
      <div className="mainsection">
        {/* <div className="section1">
          <div className="logo">
            <img className="logo" src={logo} />
          </div>
          <div>
            <ul className="navbar-nav justify-content-end flex-grow-1 ">
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Home</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Orders</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">All Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn px-4 ">Payments</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className=" s1-btn btn  px-4 ">Logout</button>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="section2">
          <nav
            class="s2-navabar navbar navbar-expand-lg "
            style={{ backgroundColor: "white" }}
          >
            <div class="container-fluid px-5">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <a className="fw-bold navbar-brand " href="#">
                All Orders
              </a>
              <button
                class="btn btn-outline-success btnround"
                type="submit"
              ></button>
            </div>
            <hr />
          </nav>
          <div className="d-flex justify-content-around">
            <div>
              <div className="p3-order-block p-5 ">
                <h6 className="fw-bold">Order ID #12345</h6>
                <div className="d-flex justify-content-between">
                  <h6>Today, 06:01 PM</h6>
                  <div>
                    <input
                      class="form-check-input s2-radio"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="Pending"
                      aria-label="..."
                    />{" "}
                    Pending
                  </div>
                </div>
                <div>
                  <p>DELIVERING NURSERY</p>
                  <p>Name of the nursery</p>
                  <p>Complete Address goes here with area, pincode</p>
                </div>
                <hr />
                <p>1 ITEM</p>
                <div className="d-flex ">
                  <div className="p3-order-item-block mx-4"> </div>
                  <div>
                    <p>Product/Client Name</p>
                    <p>Per Price</p>
                    <div className="d-flex justify-content-between">
                      <button className="btn bg-info">1</button> x 330
                      <div>330/-</div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex  justify-content-between">
                  <div>item Total</div>
                  <div>50/-</div>
                </div>
                <div className="d-flex  justify-content-between">
                  <div>Delivery</div>
                  <div>FREE</div>
                </div>
                <div className="d-flex  justify-content-between">
                  <div>GRAND TOTAL</div>
                  <div>380/-</div>
                </div>
              </div>
              <div className="p3-order-block">
                <div className="d-flex justify-content-between px-3">
                  <h6>Customer Detailes</h6>
                  <a>Edit</a>
                </div>
                <hr />
                <div className="d-flex justify-content-between px-5 my-2">
                  <div>
                    <label>Name</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <label>Number</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
                <div className="px-5 my-2">
                  <label>Email Id</label> <br />
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="px-5 my-2">
                  <label>Address</label> <br />
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="d-flex justify-content-between px-5 my-2">
                  <div>
                    <label>Area/Locality</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <label>Landmark</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
                <div className="d-flex justify-content-between px-5 my-2">
                  <div>
                    <label>City</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <label>Pincode</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
                <div className="d-flex justify-content-between px-5 my-2">
                  <div>
                    <label>State</label> <br />
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <label>Payment Method</label> <br />
                    <input type="text" placeholder="Cash on delivery" />
                    <button className="btn">COD</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p3-notes">
                <p> Notes</p>
                <div className="p3-notes-bg"></div>
              </div>
              <div className="p3-activity-bg">
                ACTIVITY
                <div>
                  <div>
                    <input
                      class="form-check-input bg-danger"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="Pending"
                      aria-label="..."
                    />{" "}
                    Order Placed
                    <p>Today, 06:10 PM</p>
                  </div>
                  <div>
                    <input
                      class="form-check-input bg-danger"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="Pending"
                      aria-label="..."
                    />{" "}
                    Assigned to
                    <p>Today, 06:10 PM</p>
                  </div>
                  <div>
                    <input
                      class="form-check-input bg-danger"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="Pending"
                      aria-label="..."
                    />{" "}
                    Order Packed
                    <p>Today, 06:10 PM</p>
                  </div>
                  <div>
                    <input
                      class="form-check-input bg-danger"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="Pending"
                      aria-label="..."
                    />{" "}
                    Order Delivered
                    <p>Today, 06:10 PM</p>
                  </div>
                </div>
              </div>
              <div className="p3-notes">
                <h5> CUSTOMER HELP</h5>
                <div className="p3-notes-bg">
                  <p6>I did not recieve my order</p6>
                  <hr className="p3-customer-hr-dotted" />
                  <p6 className="h6 text-right">
                    - Raised at 05:00 PM, 23rd Aug 2022
                  </p6>
                </div>
                <button className="btn  bg-info">close ticket</button>
              </div>
              <div className="p3-notes">
                <h5> CUSTOMER HELP</h5>
                <div className="p3-notes-bg">
                  <p6>I did not recieve my order</p6>
                  <hr className="p3-customer-hr-dotted" />
                  <p6 className="h6 text-right">
                    - Raised at 05:00 PM, 23rd Aug 2022
                  </p6>
                </div>
                <button className="btn  bg-info">close ticket</button>
              </div>
            </div>
          </div>
          <footer
            class="navbar navbar-expand-lg p-2 m-5 text-right "
            style={{ backgroundColor: "white" }}
          >
            <div class="container-fluid px-5 d-flex align-items-end">
              <button class="btn btn-outline bg-warning " type="submit">
                Ship Order
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Page3;
