import React from "react";

// marquee data
import { MarqueeData } from "../../assets/Data.js";
import "../../assets/style.css";

const HorizontalMarquee = () => {

    const doubledComponents = MarqueeData ? [...MarqueeData, ...MarqueeData] : [];

    return (
        <>
            <h1 className="text-center text-[2rem] font-semibold dark:text-[#abc2d3] text-[#424242] mt-12">
                Features
            </h1>
            <div
                className="mx-auto my-12 slider-container w-3/4 flex-nowrap relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                <div className="marqueeSliderLeft flex items-center gap-5">
                    {
                        doubledComponents.map((item, index) => (
                            <a
                                href='#'
                                className="py-2 px-6 dark:bg-[#0FABCA]/90 bg-[#0FABCA] capitalize border dark:border-[#0FABCA]/90 border-[#0FABCA] text-white rounded font-medium whitespace-nowrap"
                                key={index}
                            >
                                {item.title}
                            </a>
                        ))
                    }
                </div>

            </div>

            <div className="mx-auto my-12 slider-container w-3/4 slider-container  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <div className="marqueeSliderRight flex items-center gap-5 w-[50%] 1404px:w-[100%] justify-center">
                    {
                        MarqueeData?.map((item, index) => (
                            <a
                                href='#'
                                className="py-2 px-6 dark:bg-[#0FABCA]/90 bg-[#0FABCA] capitalize border dark:border-[#0FABCA]/90 border-[#0FABCA] text-white rounded font-medium whitespace-nowrap"
                                key={index}
                            >
                                {item.title}
                            </a>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default HorizontalMarquee;