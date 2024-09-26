
import React, { memo } from "react";

const SelectSize = ({ sizeList, size, setSize }) => {
  return (
    <>
      <select className="select select-info w-full max-w-xs select-md font-bold  text-white bg-red-500" value={size} onChange={(event) => {
        const newSize = event.target.value;
        setSize(newSize);
      }}>
        <option disabled className="text-lg text-white bg-red-600">
          شماره کفش خود را انتخاب کنید
        </option>
        {sizeList.map((item, index) => (
          <option value={item} key={index} className="text-xl">
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default memo(SelectSize);
