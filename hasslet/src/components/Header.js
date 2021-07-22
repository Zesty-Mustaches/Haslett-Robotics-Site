import React from 'react'
import './Header.css'


const Header = () => {
    return (
            <div className = 'header'>
                <div className="left">
                <h2>Haslett</h2>
                </div>
                <div className="header_center">
                    <button class="about_teams">
                        Teams
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class = "about_teams_content">
                        <button class="vrc_teams">
                            <p>VRC Teams</p>
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <button class="iq_team">
                            IQ Teams
                            <i class="fa fa-caret-down"></i>
                        </button>
                    </div>
                    <div class="iq_indv_teams">
                        <a href=".">
                            <p>10452A</p>
                        </a>
                        <a href=".">
                            <p>10452W</p>
                        </a>
                        <a href=".">
                            <p>10452Q</p>
                        </a>
                        <a href=".">
                            <p>10452</p>
                        </a>
                    </div>
                    
                    <div class="vrc_teams">
                        <a href=".">
                            <p>7684a</p>
                        </a>
                        <a href=".">
                            <p>10452A</p>
                        </a>
                    </div>

                    <div class ="concact">
                        <button class="concat_btn">
                            <a href=".">
                                <p> Concat </p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
    )
}


export default Header