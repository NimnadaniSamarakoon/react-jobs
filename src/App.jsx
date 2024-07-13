
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCard from "./components/HomeCard.jsx";
import JobListing from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(<Route index element = {<h1>My App</h1>} /> )
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HomeCard/>
      <JobListing/>
      <ViewAllJobs/>
    </div>  
  );
};

export default App




