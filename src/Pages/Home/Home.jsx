
import Banner from "../../Components/Header/Banner/Banner";
import JobByCategory from "./JobByCategory";
import Process from "./Process";
import SearchCandidate from "./SearchCandidate";
import TopCompany from "./TopCompany";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Process></Process>
            <JobByCategory></JobByCategory>
            <TopCompany></TopCompany>
            <SearchCandidate></SearchCandidate>
        </div>
    );
};

export default Home;