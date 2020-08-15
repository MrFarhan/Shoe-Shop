import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../App.css'


export function MenShoesIndex() {
    const shoes = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    };
    return (
        <div className="mensshoesiterate">
            <div> {Object.entries(shoes).map(([slug, { name, img }]) => (
                <div key={slug}>
                    <Link to={`/menshoes/${slug}`}>     
                    <Card className="cardmenstore" >
                        <CardActionArea>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {name}
                            </Typography>
                            <CardMedia
                                className="media"
                                image={img}
                                title={name}
                            />
                        </CardActionArea>
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                More details
                    </Button> */}
                        </CardActions>
                    </Card></Link>
                </div>
            ))}</div>
        </div>
    )
}
