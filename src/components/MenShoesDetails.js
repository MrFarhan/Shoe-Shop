import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";
import StripeContainer from "../Stripe/StripeContainer";
import '../App.css';




export function MenShoesDetails() {
    const [buyNow, setBuyNow] = useState(false)
    const shoes = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            btn: <button>buy now</button>

        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            btn: <button>buy now</button>

        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            btn: <button>buy now</button>
        }
    };
    const { slug } = useParams();
    console.log(slug)
    const shoe = shoes[slug];

    if (!shoe) {
        return <h2>Not Found!</h2>;
    }

    const { name, img, btn } = shoe;

    return (
        <div style={{display: 'flex '}}>
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name} />
                <span onClick={() => setBuyNow(true)}>{buyNow ? "" : btn}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center", width:"400px"}}>
                {buyNow ? <StripeContainer /> : null}
            </div>
        </div>
    )
}
