import React, { Fragment } from 'react'

import GlobalStyles from '../styles/globalStyles'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <GlobalStyles />
            <Component {...pageProps} />
        </Fragment>
    )
}

export default MyApp
