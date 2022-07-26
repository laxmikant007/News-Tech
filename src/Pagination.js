import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return ( 
    <>
      <div className="pagination-btn">
        <button className="button"onClick={() => getPrevPage()}>PREV</button>
        <p id="para">
          {page + 1} of {nbPages}
        </p>
        <button class="button" onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;