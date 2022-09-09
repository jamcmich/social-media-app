import type { GetServerSideProps, NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

import apolloClient from "../../apollo/apollo";

const GET_ALL_USERS = gql`
	query {
		users {
			username
			img
		}
	}
`;

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    img: string;
    username: string;
}

const Home: NextPage<any> = (props) => {
    if (props.loading) return <p>Loading...</p>;
    if (props.error)
        return <p>Oops, something went wrong {props.error.message}...</p>;

    return (
        <div>
            {props.data.users.map((user: User) => (
                <div key={user.id}>
                    <Image
                        src={user.img}
                        alt={`${user}'s image`}
                        width={50}
                        height={50}
                    />
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const {data} = await apolloClient.query({
        query: GET_ALL_USERS,
    });

    return {
        props: {
            data,
        },
    };
};

export default Home;
