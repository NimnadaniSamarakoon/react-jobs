import Hero from '../components/Hero';
import HomeCards from '../components/HomeCard';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <HomeCards/>
      <JobListings isHome={true} />
      <ViewAllJobs/>
    </div>
  );
};

export default HomePage;
