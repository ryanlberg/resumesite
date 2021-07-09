import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons';
class Banner extends Component {
    render(){
        return(
            <div className="Banner">
                <div className="Social">
                    <span>
                    <SocialIcon url="https://www.linkedin.com/in/ryan-berg-94824856/"/> <a href="https://www.linkedin.com/in/ryan-berg-94824856/">Linkedin</a>                
                    </span>
                    <span>
                    <SocialIcon url="https://github.com/ryanlberg" /> <a href="https://github.com/ryanlberg">Github</a>
                    </span>
                    <span className="Name">
                        Ryan Berg
                    </span>
                </div>
                
            </div>
        )
    
    }
}

export default Banner;