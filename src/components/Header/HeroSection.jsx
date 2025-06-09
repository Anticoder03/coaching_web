import React from "react";

const HeroSection = () => {
    return (
        <div className="w-full bg-[#fff] dark:bg-slate-900 rounded-md relative">

            {/* header */}
            <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">

                <div className="w-full dark:text-[#abc2d3] lg:w-[45%]">
                    <p>Welcome to Luxe Institute!</p>
                    <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
                        <span className="text-[#DC0155]">Luxe</span> helps you master computers & technology
                    </h1>
                    <p className="mt-2 text-[1rem]">
                        Learn everything from basics to advanced tech skills with expert guidance & hands-on training.
                    </p>
                </div>

                <div className="w-full lg:w-[55%]">
                    <img src="https://i.ibb.co/syHFhNy/image.png" alt="image" className=""/>
                </div>
            </header>

            <section className="px-8 pb-[30px] mt-8">
                <h1 className="text-[1.3rem] font-semibold">Our Courses</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-10 w-[70%]">
                    <div>
                        <img src="https://i.ibb.co/z721j8b/Vector.png" alt="Vector" className="w-[30px]"/>
                        <h4 className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Basic Computer Training</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">
                            Learn essential computer skills like MS Office, internet usage, typing, and email.
                        </p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Qn78BRJ/Ui-Design.png" alt="UI Design" className="w-[30px]"/>
                        <h4 className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Web Development</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">
                            HTML, CSS, JavaScript, React, and backend development with practical projects.
                        </p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/GcsvXxk/Product.png" alt="Product" className="w-[30px]"/>
                        <h4 className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Graphic Design</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">
                            Master tools like Photoshop, Illustrator, and Canva to create stunning visuals.
                        </p>
                    </div>
                </div>
            </section>

            {/* right blur shadow */}
            <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
        </div>
    );
};

export default HeroSection;
