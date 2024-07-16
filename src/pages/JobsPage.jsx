import {Link} from 'react-router-dom';
import JobListings from '../components/JobListing';

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <Link to="/jobs">
         <jobListing></jobListing>
        </Link>
    </section>
  );
};

export default JobsPage;
