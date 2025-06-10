import React from "react";

const About = () => {
    return (
        <section id="about" className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                    alt="hero"
                    src="https://dummyimage.com/720x600"
                />
                <div className="text-center lg:w-2/3 w-full">
                   <h1 className="title-font text-white sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    Empowering Minds at Luxe Institute
</h1>
<p className="mb-8 leading-relaxed">
    At Luxe Institute, we believe in building a strong foundation for every learner. Our expert-led coaching programs are 
    designed to develop technical skills, boost confidence, and prepare students for real-world success. Join us to master coding, 
    sharpen your logic, and achieve your academic and career goals with hands-on training and personalized mentorship.
</p>

                    <div className="flex justify-center">
                        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
