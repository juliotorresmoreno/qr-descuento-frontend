
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const HomePageBase: React.FC<RouteComponentProps> = (props) => {
    return (
        <>Home</>
    );
}

const HomePage = withRouter(HomePageBase);

export default HomePage;
