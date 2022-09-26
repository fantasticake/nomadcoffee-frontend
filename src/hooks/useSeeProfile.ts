import { gql } from "@apollo/client";
import { useSeeProfileQuery } from "../generated/graphql";

gql`
  query SeeProfile {
    seeProfile {
      ok
      result {
        id
        username
        email
        coffeeShop {
          id
        }
      }
      error
    }
  }
`;

export default useSeeProfileQuery;
