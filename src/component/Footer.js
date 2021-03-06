import React, {Component} from 'react'
import '../css/site.css';
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import snapchat from '../images/snapchat.png'
import Linkedin from '../images/in.png'
import youtube from '../images/youtube.png'
import google from '../images/google.png'
import pinterest from '../images/pinterest.png'
import aus from '../images/CountriesFlag/aus.png'
import ind from '../images/CountriesFlag/ind.png'
import ireland from '../images/CountriesFlag/ireland.png'
import uae from '../images/CountriesFlag/uae.png'
import usa from '../images/CountriesFlag/usa.png'
import JsonData from '../config/JsonData.json'
export default class Footer extends Component{
  render(){
      return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 cont-drop">
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" 
                    dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="true">
                    Dropdown
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider" />
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9 home-newsletter">
                <div className="row">
                  <div className="col-sm-5 news-subs-txt">
                    <h3>Subscribe to our Newsletter</h3>
                  </div>
                  <div className="col-sm-7">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <span className="input-group-btn">
                        <button className="btn btn-theme" type="submit">Subscribe</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row footer-links">
              <div className="col-sm-3">
                <h6>Help</h6>
                <ul>
                {JsonData.help.map((data) =>{
                      return(<li><a href="#">{data}</a></li>)
                  })}
                </ul>
              </div>
              <div className="col-sm-3">
                <h6>Company</h6>
                <ul>
                {JsonData.company.map((data) =>{
                      return(<li><a href="#">{data}</a></li>)
                  })}
                </ul>
              </div>
              <div className="col-sm-3">
                <h6>Popular Events</h6>
                <ul>
                {JsonData.popularEvents.map((data) =>{
                      return(<li><a href="#">{data}</a></li>)
                  })}
                </ul>
              </div>
              <div className="col-sm-3 country-flag-sec">
                <h6>Popular Events</h6>
                <ul>
                  <li><a href="http://www.kyazoonga.com.au/" target="_blank"><img src={aus} />Australia</a></li>
                  <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={ind} />India</a></li>
                  <li><a href="http://www.kyazoonga.ie/" target="_blank"><img src={ireland} />Ireland</a></li>
                  <li><a href="http://www.kyazoonga.ae/" target="_blank"><img src={uae} />United Arab Emirates</a></li>
                  <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={usa} />United States</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-social text-center">
              <h6>Follow Us</h6>
              <ul>
                <li><a className="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
                    <img src={facebook} alt="Facebook" width={32} height={32} /></a></li>
                <li><a className="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
                    <img src={twitter} alt="Twitter" width={32} height={32} /></a></li>
                <li><a className="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
                    <img src={instagram} alt="in" width={32} height={32} /></a></li>
                <li><a className="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
                    <img src={snapchat} alt="in" width={32} height={32} /></a></li>
                <li><a className="in" href="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
                    <img src={Linkedin} alt="Linkedin" width={32} height={32} /></a></li>
                <li><a className="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
                    <img src={youtube} alt="Youtube" width={32} height={32} /></a></li>
                <li><a className="g" href="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
                    <img src={google} alt="Google Plus" width={32} height={32} /></a></li>
                <li><a className="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
                    <img src={pinterest} alt="Pinterest" width={32} height={32} /></a></li>
              </ul>
              <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
            </div>
          </div>
        </footer>
      )
    }
  }