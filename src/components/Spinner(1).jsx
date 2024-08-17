import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };

const Spinner = ({loading}) => {
  return (
    <div>
        <HashLoader
            color={'red'}
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
  </div>
  )
}

export default Spinner