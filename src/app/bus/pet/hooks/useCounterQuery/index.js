import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAvailablePets = loader("./queryAvailablePets.graphql");

export const useCounterQuery = () => {
  return useQuery(queryAvailablePets);
};
