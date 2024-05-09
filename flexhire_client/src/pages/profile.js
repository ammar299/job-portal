import React from 'react';
// import Image from 'react-bootstrap/Image';
import { QueryRenderer } from 'react-relay';
import environment from '../utils/RelayEnvironment';
import UserQuery from '../graphql/UserQuery';
import ProfileComponent from "../components/ProfileComponent";

function Profile() {
    return (
        <QueryRenderer
            environment={environment}
            query={UserQuery}
            variables={{}}
            render={({ error, props }) => {
                if (error) {
                    return <div>Error: {error.message}</div>;
                }
                if (!props) {
                    return <div>Loading...</div>;
                }
                return <ProfileComponent
                    data={props.flexhireData}
                />;
            }}
        />
    );
}

export default Profile;
