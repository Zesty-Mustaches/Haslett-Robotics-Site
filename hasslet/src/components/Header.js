import React from 'react'
import './Header.css'


const Header = () => {
    return (
        <div className = 'header'>
            <div className = 'header_logo'>
                <div className="header_center">
                    <button class="about_teams">
                        Teams
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class = "about_teams_content">
                        <button class="vrc_teams">
                            VRC Teams
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
                </div>
            </div>
        </div>
    )
}


export default Header