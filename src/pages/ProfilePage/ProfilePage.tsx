
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const ProfilePageBase: React.FC<RouteComponentProps> = (props) => {
    return (
        <>Profile</>
    );
}

const ProfilePage = withRouter(ProfilePageBase);

export default ProfilePage;
