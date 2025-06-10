
import React, {useState} from "react";
import {motion, AnimatePresence, LayoutGroup} from "framer-motion";

// data
const accordionData = [
    {
        id: 1,
        title: "Best Coaching",
        description:
            "Our coaching program ensures top-notch guidance, interactive teaching methods, and personalized support to help every student succeed.",
        imageUrl:
            "https://thriving-palmier-66f93b.netlify.app/feature1.jpg",
    },
    {
        id: 2,
        title: "Self-Practicals",
        description:
            "Practice makes perfect! With our structured self-practical sessions, students can reinforce concepts and build hands-on experience confidently.",
        imageUrl: "https://thriving-palmier-66f93b.netlify.app/feature2.jpg",
    },
    {
        id: 3,
        title: "Logic Building",
        description:
            "Sharpen your problem-solving abilities through logic-building exercises, coding challenges, and real-world scenarios.",
        imageUrl:
            "https://thriving-palmier-66f93b.netlify.app/feature3.jpg",
    },
    {
        id: 4,
        title: "Best Classes",
        description:
            "Engaging lessons, expert instructors, and a friendly learning environment make our classes the best choice for ambitious learners.",
        imageUrl:
            "https://thriving-palmier-66f93b.netlify.app/feature4.jpeg",
    },
];


const HorizontalExpanable = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className="w-full h-[380px] md:h-[450px]">
            <LayoutGroup>
                <div className="flex w-full h-full gap-2">
                    {accordionData.map((item, index) => {
                        const isExpanded = index === expandedIndex;

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                initial={false}
                                onMouseOver={() =>
                                    setExpandedIndex(index)
                                }
                                className="relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
                                animate={{
                                    flex: isExpanded ? 3 : 1,
                                }}
                                transition={{duration: 1.5, ease: [0.25, 1, 0.5, 1]}}
                            >
                                <motion.img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    animate={{
                                        scale: isExpanded ? 1 : 1.05,
                                        filter: isExpanded
                                            ? "brightness(0.9)"
                                            : "brightness(0.6)",
                                    }}
                                    transition={{duration: 0.5}}
                                />

                                <motion.div
                                    className="absolute inset-0 flex flex-col justify-end p-5 text-white z-20"
                                    layout="position"
                                    initial={false}
                                >
                                    <motion.h3
                                        layout="position"
                                        className="font-bold text-lg mb-1"
                                        animate={{fontSize: isExpanded ? "1.5rem" : "1.2rem"}}
                                        transition={{duration: 0.3}}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    {
                                        isExpanded && (
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-25% to-50% from-black/30 w-full to-transparent z-[-1]"/>
                                        )
                                    }

                                    <AnimatePresence mode="wait" initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                key="details"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={{
                                                    visible: {
                                                        transition: {
                                                            staggerChildren: 0.1,
                                                            delayChildren: 0.1,
                                                        },
                                                    },
                                                    hidden: {},
                                                }}
                                                className="relative"
                                            >
                                                <motion.p
                                                    className="text-sm mb-2"
                                                    variants={{
                                                        hidden: {opacity: 0, y: 50},
                                                        visible: {
                                                            opacity: 1,
                                                            y: 0,
                                                            transition: {type: "spring", stiffness: 150, damping: 12}
                                                        },
                                                    }}
                                                    transition={{duration: 0.3}}
                                                >
                                                    {item.description}
                                                </motion.p>

                                                <motion.button
                                                    className="px-4 py-2 mt-3 rounded bg-white text-black text-sm font-semibold"
                                                    variants={{
                                                        hidden: {opacity: 0, y: 50},
                                                        visible: {
                                                            opacity: 1,
                                                            y: 0,
                                                            transition: {type: "spring", stiffness: 150, damping: 12},
                                                        },
                                                    }}
                                                    transition={{duration: 0.3}}
                                                    whileHover={{scale: 1.05}}
                                                    whileTap={{scale: 0.95}}
                                                >
                                                    View Details
                                                </motion.button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </LayoutGroup>
        </div>
    );
};

export default HorizontalExpanable;
                    