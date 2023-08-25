import React from "react";

function InvestmentForm() {
  return (
    <form className="lg:w-1/3 bg-yellow-500 px-8 py-5 text-xs font-bold rounded">
      <div className="flex flex-wrap justify-between ">
        <div className="flex flex-col">
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" className="h-8 " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" className="h-8" />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="expected-return" className="">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" className="h-8 " />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" className="h-8" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 text-white">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="bg-purple-500 p-3 ml-10 rounded">
          Calculate
        </button>
      </div>
    </form>
  );
}

export default InvestmentForm;
