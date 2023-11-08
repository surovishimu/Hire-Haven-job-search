

import { Helmet } from "react-helmet";
import Banner from "../../Components/Header/Banner/Banner";
import JobByCategory from "./JobByCategory";
import Process from "./Process";
import SearchCandidate from "./SearchCandidate";
import TopCompany from "./TopCompany";



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>
                    Hire Haven | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Process></Process>
            <JobByCategory></JobByCategory>
            <TopCompany></TopCompany>
            <SearchCandidate></SearchCandidate>

        </div>
    );
};

export default Home;