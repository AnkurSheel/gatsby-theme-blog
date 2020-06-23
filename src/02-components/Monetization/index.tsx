import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/use-site-meta-data';

const Monetization = () => {
    const siteMetaData = useSiteMetadata();

    if (!siteMetaData) {
        return <></>;
    }
    const { webMonetization } = siteMetaData;
    return (
        <Helmet>
            <meta name="monetization" content={webMonetization} />
        </Helmet>
    );
};

export default Monetization;
