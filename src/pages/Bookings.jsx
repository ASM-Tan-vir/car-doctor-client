import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import BookingTable from "../components/BookingTable";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <div>
      <NavBar />
      <h2>Booking {bookings.length}</h2>
      <div className="overflow-x-auto pr-0">
        <table className="table">
          <thead>
            <tr className="flex flex-row gap-12">
              <th></th>
              <th>Img</th>
              <th>Service</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>price</th>
              <th>details</th>
            </tr>
          </thead>

          <tbody className="w-full">
            {bookings.map((booking) => (
              <BookingTable
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
