import React from 'react'
import Button from '@material-ui/core/Button';

import '../App.css'



export function Collection_Trending  () {

    const Collection = () => ({
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
    })

    return (
        <div className="collection">
            <div className="collectionText">
                <h4 className="collectionHeading"> SHOES FOR EVERYONE</h4>
                <p>Servis has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.</p>

                <div className="collectionHeading">
                    <Button variant="outlined" color="secondary" >
                        Know more about us
                </Button>
                    <Button variant="outlined" color="secondary">
                        Locate us near you
                </Button>
                </div>
            </div>

            <br />
            <span>Latest Collection </span>
            <br />


        </div>
    )
}
