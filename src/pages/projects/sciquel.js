import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import SciquelComponent from "../../components/pages/sciquel"
import Header from "../../components/header"

const Sciquel = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="Sciquel" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    <SciquelComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <SciquelComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default Sciquel
