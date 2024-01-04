import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";

function Homepage() {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <Hero />
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
