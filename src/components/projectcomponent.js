import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import * as homepage from './homepage.css';
import PropTypes from 'prop-types';

// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

import {Helmet} from "react-helmet";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import sciquelScreenshot from "../images/sciquelhomepage1.png"
import urbanearthScreenshot from "../images/urbanearthlogo.png"
import jeffreykozikScreenshot from "../images/jeffreykozikwebsitescreenshot.png"
import oneworldbrowserextensionScreenshot from "../images/1worldscreenshot.png"
import smrtnrllbrowserextensionScreenshot from "../images/smrtnrllscreenshot.png"
import searchengineutilitybeltScreenshot from "../images/searchengineutilitybeltscreenshot.png"
import totalcostScreenshot from "../images/totalcostscreenshot.png"
import multitabsearchScreenshot from "../images/multitabscreenshot.png"
import seobrowserextensionScreenshot from "../images/seoscreenshot.png"

let imageArray = [sciquelScreenshot, urbanearthScreenshot, jeffreykozikScreenshot, oneworldbrowserextensionScreenshot, smrtnrllbrowserextensionScreenshot, searchengineutilitybeltScreenshot, totalcostScreenshot, multitabsearchScreenshot, seobrowserextensionScreenshot]


// <html>
//   <head>
//       <link
//       rel="stylesheet"
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//       integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//       crossOrigin="anonymous"
//       />
//   </head>
//   <body>
//       <a href={link}>
//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src={imagePath} className="img-fluid rounded-start" alt="..."/>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">{name}</h5>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </a>
//   </body>
// </html>

// function ProjectComponent({ name, link, tags, startDate, endDate, imagePath, description }) {
//   return(
//       <a href={link} className="itemList">
//           <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//               title={name}
//               subheader={startDate}
//             />
//             <CardMedia
//               component="img"
//               image={imageArray[imagePath]}
//               height="194"
//             />
//             <CardContent>
//                 {description}
//             </CardContent>
//           </Card>
//       </a>
//   )
// }
// ProjectComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
//   tags: PropTypes.array.isRequired,
//   startDate: PropTypes.string.isRequired,
//   endDate: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// }

function ProjectComponent({ name, link, tags, startDate, endDate, imagePath, description }) {
  return(
      <>
          <Helmet>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
          </Helmet>
          <a href={link} className={homepage.itemList}>
          <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
            <div className="col-md-4">
              <img src={imageArray[imagePath]} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{startDate}</small></p>
              </div>
            </div>
            </div>
            </div>
          </a>
     </>
  )
}
ProjectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


export default ProjectComponent;
