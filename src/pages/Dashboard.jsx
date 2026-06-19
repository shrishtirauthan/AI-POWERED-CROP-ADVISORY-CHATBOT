import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <h1>Dashboard Page</h1>

      <p>
        Dashboard will display crop insights, weather updates, and farming
        information.
      </p>

      <Footer />
    </>
  );
}

export default Dashboard;