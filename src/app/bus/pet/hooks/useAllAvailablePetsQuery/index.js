import { useLazyQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllPets = loader("./queryAllAvailablePets.graphql");

export const useAllAvailablePetsQuery = () => {
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(
    queryAllPets
  );

  return {
    getAllAvailablePets,
    loading,
    error,
    pets: data && data.allAvailablePets,
  };
};
