
import React from "react";

const TextareaInput = () => {

    return (
        <div className="w-full md:w-[80%]">
            <label
                htmlFor="description"
                className="font-[400] dark:text-[#abc2d3] text-[15px] text-text"
            >
                Description <span className="text-red-500">*</span>
            </label>
            <textarea
                id="description"
                placeholder="Write something about zenUI"
                className="border-border dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-primary transition-colors duration-300"
            />
        </div>
    );
};

export default TextareaInput;
                