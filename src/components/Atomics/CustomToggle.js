import React from "react";

function CustomToggle({isStatusTrue, unable_disable}) {
  // console.log(isStatusTrue)
  // console.log(isStatusTrue ? 'active' : 'unactive')
  return (
    <div className="switch-toggle" onClick={() => unable_disable()}>
      <input type="checkbox" className={`${isStatusTrue}`} />
      <label></label>
    </div>
  );
}

export default CustomToggle;