import React from "react";

const DataFetchingComponent3 = () => {
  return (
    <div className="section" id="data-fetching">
      <div className="border-solid border-black border-b pb-8 flex justify-between items-end gap-4 flex-wrap">
        <div>
          <div className="uppercase">Sample Data</div>
          <div className="text-3xl font-bold">Static Data Display</div>
        </div>
        <div className="rounded-tr-[1rem] rounded-b-[1rem] bg-black text-white p-4 text-[0.85rem]">
          <div>No data loaded yet</div>
        </div>
      </div>
    </div>
  );
};

export default DataFetchingComponent3;
