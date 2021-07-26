import React from 'react'
import './Header.css'


const Header = () => {
    return (
            <div className = 'header'>

                <div className="left">
                    <h2>Haslett</h2>
                </div>


                <div className="header_center">
                    <div class="drop_down">
                        <button class="about_teams">
                            <p>Teams</p>
                            <i class="fa fa-caret-down"></i>
                        </button>

                    <div class = "about_teams_content">
                        <button class="vrc_teams_all">
                            <p>VRC Teams</p>
                            <i class="fa fa-caret-down"></i>
                        </button>
                        
                        <button class="iq_team">
                            <p>IQ Teams</p>
                            <i class="fa fa-caret-down"></i>
                        </button>
                    </div>
                    
                    <div class="iq_indv_teams">
                        <a href=".">
                            <p>Team Num</p>
                        </a>
                        <a href=".">
                            <p>Team Num</p>
                        </a>
                        <a href=".">
                            <p>Team Num</p>
                        </a>
                        <a href=".">
                            <p>Team Num</p>
                        </a>
                    </div>
                    
                    <div class="vrc_teams">
                        <a href=".">
                            <p>Team Num</p>
                        </a>
                        <a href=".">
                            <p>Team Num</p>
                        </a>
                    </div>
                    </div>
                    
                    <div class ="concact">
                        <button class="concat_btn">
                            <a href=".">
                                <p> Concat </p>
                            </a>
                        </button>
                    </div>
                   
                    <div class="join">
                        <button class="join">
                            <a href=".">
                                <p>Join</p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
    )
}


export default Header