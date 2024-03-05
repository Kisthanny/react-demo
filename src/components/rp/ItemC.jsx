import React, { Component } from "react";
import WithTooltip from "./withTooltip";
const ItemC = (props) => {
  return (
    <div className="container">
      <WithTooltip>
        {({ showTooltip, content }) => (
          <>
            <button className="btn btn-primary" type="btn">
              Item C
            </button>
            {showTooltip && (
              <span className="badge badge-pill badge-primary ml-2">
                {content}
              </span>
            )}
          </>
        )}
      </WithTooltip>
    </div>
  );
};

export default ItemC;
