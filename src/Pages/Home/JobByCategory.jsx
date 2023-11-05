import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobByCategory = () => {
    return (
        <>
        <h1 className='text-3xl font-semibold text-center mt-20 ' >Most Popular Jobs</h1>
        <p className='text-center text-stone-400 mt-4 mb-10'>Know your worth and find the job that qualify your life</p>
            <div className='max-w-lg mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab>All Category</Tab>
                        <Tab>On Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part Time</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                </Tabs>
            </div></>
    );
};

export default JobByCategory;