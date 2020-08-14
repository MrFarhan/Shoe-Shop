import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../App.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footersocial">Copyrights 2020 © Farhan</div>
            <br/>
            <div className="footersocial">
                Follow us on 
                <FacebookIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>

            </div>
        </div>
    )
}
