import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";

const Checkout = () => {
  const services = useLoaderData();
  const { _id, title, price, img } = services;
  const { user } = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      customerName: name,
      email,
      date,
      services: title,
      service_id: _id,
      img_url: img,
      price: price,
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <NavBar />
      <h2>CheckOut: {title}</h2>
      <div className="w-full">
        <form className="card-body" onSubmit={handleCheckOut}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultChecked={user?.displayName || ""}
                id="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email || ""}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="date" className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="price" className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder={"$" + price}
                id="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block bg-orange-700 hover:bg-orange-800"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
