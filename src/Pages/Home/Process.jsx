import photo1 from '../../../public/image/file.png'
import photo2 from '../../../public/image/pie-chart.png'
import photo3 from '../../../public/image/positive-comment.png'

const Process = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center mt-20 '>How It Works?</h1>
            <p className='text-center text-stone-400 mt-4 mb-20'>Job for anyone, anywhere</p>

            <div className='flex lg:flex-row md:flex-col flex-col  justify-around items-center mb-20'>
                <div data-aos="fade-up"
                    data-aos-duration="3000"><div className="card w-96 hover:bg-base-100 hover:shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={photo1} alt="Shoes" className="h-20 bg-amber-100 p-2 rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Free Resume Assessments</h2>
                            <p>Maximize Your Job Prospects with Our No-Cost Resume Assessments</p>

                        </div>
                    </div></div>
                <div data-aos="fade-up"
                    data-aos-duration="3000"><div className="card w-96 hover:bg-base-100 hover:shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={photo2} alt="Shoes" className="h-20 bg-red-100 p-2 rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Job Fit Scoring</h2>
                            <p>Unlocking the Potential of Job Fit Scoring: A Game-Changing HR Strategy</p>

                        </div>
                    </div></div>
                <div data-aos="fade-up"
                    data-aos-duration="3000"><div className="card w-96 hover:bg-base-100 hover:shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={photo3} alt="Shoes" className="h-20 bg-blue-100 p-2 rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Help Every Step of the Way</h2>
                            <p>Empowering Your Progress with Support Every Step of the Way</p>

                        </div>
                    </div></div>

            </div>
        </div>
    );
};

export default Process;