import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import SeoBrowserExtensionComponent from "../../../components/pages/seobrowserextension"

const SeoBrowserExtension = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="SEO Browser Extension" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <SeoBrowserExtensionComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <SeoBrowserExtensionComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default SeoBrowserExtension
