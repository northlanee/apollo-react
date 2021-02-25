import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllPets = loader("./queryAllPets.graphql");

export const useAllPetsQuery = () => {
  const { data, loading, error } = useQuery(queryAllPets);

  const pets = data ? data.allPets : null;

  return { loading, error, pets };
};
