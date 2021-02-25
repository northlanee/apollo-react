import React from "react";

import { Counter } from "./Counter";
import { PetsList } from "./PetsList";
import { SpecialList } from "./SpecialList";

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <Counter />
      <PetsList />
      <SpecialList />
    </>
  );
};
