import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import WowClassDropdown from './WowClassDropdown';
import WowSpecSelection from './WowSpecSelection';
import './bootstrap_styles/base.scss';


interface SecondaryNavigationProps {
    page: string;
    wowClass: string;
    setWowClass: Function;
    wowSpec: string;
    setWowSpec: Function;
}

class SecondaryNavigation extends React.Component<SecondaryNavigationProps> {

    render() {

        if (this.props.wowClass === '') {
            return (
                <Navbar variant="dark" fixed="top" expand="lg" className="border-bottom" id="secondaryNavbar" hidden>
                    <Navbar.Toggle aria-controls="secondaryMenu" />
                    <Navbar.Collapse id="secondaryMenu">
                    </Navbar.Collapse>
                </Navbar >
            );
        } else {
            return (
                <Navbar variant="dark" fixed="top" expand="lg" className="border-bottom" id="secondaryNavbar">
                    <Navbar.Toggle aria-controls="secondaryMenu" />
                    <Navbar.Collapse id="secondaryMenu">
                        <WowClassDropdown wowClass={this.props.wowClass} setWowClass={this.props.setWowClass} />
                        <WowSpecSelection wowClass={this.props.wowClass} wowSpec={this.props.wowSpec} setWowSpec={this.props.setWowSpec} />
                    </Navbar.Collapse>
                </Navbar >
            );
        }


    }
}


export default SecondaryNavigation;
