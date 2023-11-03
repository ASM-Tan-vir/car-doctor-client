import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <h2>home</h2>
      <Footer></Footer>
    </div>
  );
};

export default Home;
