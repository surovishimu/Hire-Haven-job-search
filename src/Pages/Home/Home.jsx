
import Banner from "../../Components/Header/Banner/Banner";
import Process from "./Process";
import SearchCandidate from "./SearchCandidate";
import TopCompany from "./TopCompany";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Process></Process>
            <TopCompany></TopCompany>
            <SearchCandidate></SearchCandidate>
        </div>
    );
};

export default Home;