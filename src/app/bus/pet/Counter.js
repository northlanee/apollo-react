import React from "react";

import { useCounterQuery } from "./hooks/useCounterQuery";

export const Counter = () => {
  const { loading, error, data } = useCounterQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occured: {error.message}</p>;

  return <p>Available pes: {data.availablePets}</p>;
};
