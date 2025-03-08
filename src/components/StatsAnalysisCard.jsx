import React from "react";

const StatsAnalysisCard = ({gridArea, children}) => {
  return (
      <div className={`${gridArea} text-white bg-gradient-to-br to-blue-500 from-[#112152] rounded-lg border-black flex items-center justify-evenly lg:justify-center border mx-1 sm:mx-3`}>
        {children}
    </div>
  )
}

export default StatsAnalysisCard;