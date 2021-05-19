import React from 'react';
import './styles/Badges.css'
import './styles/BadgeHome.css'
import confLogo from '../images/badge-header.svg'

class BadgeHome extends React.Component{
  render(){
    return(
      <>
        <div className="Badge__home">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <img width="100%" src={confLogo} alt="Conf Logo"/>
                <h3 className="Badge__title">Badges</h3>
              </div>
            </div>
          </div>          
        </div>
      </>
    )    
  }
}
export default BadgeHome