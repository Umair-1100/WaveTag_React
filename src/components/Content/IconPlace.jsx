import React from "react";

export const IconPlace = () => {
  return (
    <>
      <p className=" mb-4 text-[0.9rem] text-[#5f5f5f] mt-[-1.5rem]">
        Drag and Drop the icons above to reorder them.
      </p>
      <h1 className="text-xl">Position</h1>
      <p className="text-[0.9rem] text-[#5f5f5f]">Display icons at</p>
      <span className="my-2 flex items-center gap-2">
        <input
          id="radio"
          defaultChecked
          type="radio"
          name="group"
          className="outline-none focus:border-none shadow-none"
        />
        <label htmlFor="radio">Top</label>
      </span>
      <span className="flex items-center gap-2">
        <input
          id="radio2"
          type="radio"
          name="group"
          className="outline-none focus:border-none shadow-none"
        />
        <label htmlFor="radio2">Bottom</label>
      </span>
    </>
  );
};
