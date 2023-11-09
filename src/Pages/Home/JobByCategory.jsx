import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const JobByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [showAllCards, setShowAllCards] = useState({
        all: false,
        onSite: false,
        remote: false,
        hybrid: false,
        partTime: false,
    });

    useEffect(() => {
        fetch('https://job-service-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const renderCards = (categoryFilter) => {
        const filteredCategories = categories.filter((category) =>
            categoryFilter === "all" ? true : category.category === categoryFilter
        );
        const visibleCategories = showAllCards[categoryFilter] ? filteredCategories : filteredCategories.slice(0, 6);

        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-10'>
                    {visibleCategories.map(categoryy => (
                        <CategoryCard key={categoryy._id} categoryy={categoryy} />
                    ))}
                </div>
                {filteredCategories.length > 6 && (
                    <div className="text-center mt-4">
                        <button onClick={() => handleSeeMore(categoryFilter)} className="btn btn-primary normal-case text-lg ">
                            {showAllCards[categoryFilter] ? "Show Less" : "See More"}
                        </button>
                    </div>
                )}
            </>
        );
    };

    const handleSeeMore = (categoryFilter) => {
        setShowAllCards(prevState => ({ ...prevState, [categoryFilter]: !prevState[categoryFilter] }));
    };

    return (
        <>
            <h1 className='text-3xl font-semibold text-center mt-20'>Most Popular Jobs</h1>
            <p className='text-center text-stone-400 mt-4 mb-10'>Know your worth and find the job that qualifies your life</p>
            <div className=''>
                <Tabs>
                    <TabList className="flex lg:flex-row md:flex-row flex-wrap gap-5 mb-10 justify-center items-center ">
                        <Tab className="btn normal-case text-lg bg-blue-100">All Category</Tab>
                        <Tab className="btn normal-case text-lg bg-blue-100">On Site Job</Tab>
                        <Tab className="btn normal-case text-lg bg-blue-100">Remote Job</Tab>
                        <Tab className="btn normal-case text-lg bg-blue-100">Hybrid</Tab>
                        <Tab className="btn normal-case text-lg bg-blue-100">Part Time</Tab>
                    </TabList>

                    <TabPanel>
                        {renderCards("all")}
                    </TabPanel>

                    <TabPanel>
                        {renderCards("On Site Job")}
                    </TabPanel>
                    <TabPanel>
                        {renderCards("Remote Job")}
                    </TabPanel>

                    <TabPanel>
                        {renderCards("Hybrid")}
                    </TabPanel>

                    <TabPanel>
                        {renderCards("Part Time")}
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default JobByCategory;
