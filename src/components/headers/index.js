import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo.svg'
import Profile from '../../assets/profile.svg'


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: 2,
            },
            title: {
              flexGrow: 1,
            },
          }
    }
    render() {
        return (
            <AppBar position="static" style={{backgroundColor: '#fff'}}>

                <Toolbar>
                    <img src={Logo} alt="Logo"/>
                    <Typography edge="start" variant="h6" className={this.state.title} style={{color: '#271D18', fontWeight : '600'}}>
                        Intugine
                    </Typography>
                    <div style={{float:"right", margin:"auto", marginRight:"1%"}}>

                      <Typography variant="h6" style={{color: '#271D18', float : "left", fontWeight : '600', padding:'10px'}}>
                          Home
                      </Typography>
                   
                    
                      <Typography variant="h6" style={{color: '#271D18', float : "right", fontWeight : '600', padding:'10px'}}>
                          Brands
                      </Typography>
                     
                    
                      <Typography variant="h6" style={{color: '#271D18', float : "right", fontWeight : '600', padding:'10px'}}>
                          Transporters
                      </Typography>
                    </div>
                   
                    <img src={Profile} alt="profile"/>
                      
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header