import React from "react";

import { useAllPetsQuery } from "./hooks/useAllPetsQuery";

export const PetsList = () => {
  const { loading, error, pets } = useAllPetsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occured: {error.message}</p>;

  const renderPets = pets.map(({ id, name, weight }) => (
    <p key={id}>
      <span>Name: {name}</span> <span>Weight: {weight}</span>
    </p>
  ));

  return <div>{renderPets}</div>;
};
