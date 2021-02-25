import React from "react";

import { useAllAvailablePetsQuery } from "./hooks/useAllAvailablePetsQuery";

export const SpecialList = () => {
  const {
    getAllAvailablePets,
    loading,
    error,
    pets,
  } = useAllAvailablePetsQuery();

  const loaderRender = loading && <p>Loading...</p>;
  const errorRender = error && <p>Error occured: {error.message}</p>;
  const petsRender =
    pets &&
    pets.map(({ id, name, weight }) => (
      <p key={id}>
        <span>Name: {name}</span> <span>Weight: {weight}</span>
      </p>
    ));

  return (
    <div>
      <button onClick={getAllAvailablePets}>Download</button>
      {loaderRender}
      {errorRender}
      {petsRender}
    </div>
  );
};
