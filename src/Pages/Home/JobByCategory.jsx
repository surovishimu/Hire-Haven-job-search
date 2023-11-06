import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const JobByCategory = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <>
            <h1 className='text-3xl font-semibold text-center mt-20 ' >Most Popular Jobs</h1>
            <p className='text-center text-stone-400 mt-4 mb-10'>Know your worth and find the job that qualify your life</p>
            <div className=''>
                <Tabs>
                    <TabList className="flex lg:flex-row md:flex-row flex-wrap gap-5 mb-10 justify-center items-center ">
                        <Tab className="btn normal-case text-lg bg-purple-400">All Category</Tab>
                        <Tab className="btn normal-case text-lg bg-purple-400">On Site Job</Tab>
                        <Tab className="btn normal-case text-lg bg-purple-400">Remote Job</Tab>
                        <Tab className="btn normal-case text-lg bg-purple-400">Hybrid</Tab>
                        <Tab className="btn normal-case text-lg bg-purple-400">Part Time</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-10'>
                            {categories.map(categoryy => <CategoryCard
                                key={categoryy._id}
                                categoryy={categoryy}>
                            </CategoryCard>)}
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-10'>
                            {categories
                                .filter((categoryy) => categoryy.category === 'On Site Job')
                                .map((categoryy) => (
                                    <CategoryCard key={categoryy._id} categoryy={categoryy}></CategoryCard>
                                ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-10'>
                            {categories
                                .filter((categoryy) => categoryy.category === 'Remote Job')
                                .map((categoryy) => (
                                    <CategoryCard key={categoryy._id} categoryy={categoryy}></CategoryCard>
                                ))}
                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-10'>
                            {categories
                                .filter((categoryy) => categoryy.category === 'Hybrid')
                                .map((categoryy) => (
                                    <CategoryCard key={categoryy._id} categoryy={categoryy}></CategoryCard>
                                ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-10'>
                            {categories
                                .filter((categoryy) => categoryy.category === 'Part Time')
                                .map((categoryy) => (
                                    <CategoryCard key={categoryy._id} categoryy={categoryy}></CategoryCard>
                                ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div></>
    );
};

export default JobByCategory;