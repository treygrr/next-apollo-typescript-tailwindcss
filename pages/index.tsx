import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import serverApollo from "@/lib/serverApollo";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const QUERY = gql`
    query Countries {
      countries {
        code
        name
        emoji
      }
    }
  `;

  const client = serverApollo;
  const { data } = await client.query({ query: QUERY });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    }
  };
}


export default function Home({ countries }: any) {
  return (
    <div>
      {countries.map((country: any) => (
        <div key={country.code}>
          <span>{country.emoji}</span>
          <span>{country.name}</span>
        </div>
      ))}
    </div>
  )
}
