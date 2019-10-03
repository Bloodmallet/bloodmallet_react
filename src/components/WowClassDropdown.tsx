import React from 'react';
// import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import './bootstrap_styles/base.scss';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';


interface WowClassDropdownProps {
    wowClass: string;
    setWowClass: Function;
};


interface Dict {
    [key: string]: string | boolean | number | string[] | boolean[] | number[];
};

class WowClassDropdown extends React.Component<WowClassDropdownProps> {

    constructor(props: WowClassDropdownProps) {
        super(props);

        this.setWowClass = this.setWowClass.bind(this);
    }

    setWowClass(name: string) {
        this.props.setWowClass(name);
    }

    render() {

        // wow classes that can be found in the drop down
        const wow_classes: string[] = [
            'death_knight',
            'demon_hunter',
            'druid',
            'hunter',
            'mage',
            'monk',
            'paladin',
            'priest',
            'rogue',
            'shaman',
            'warlock',
            'warrior'
        ];

        return (
            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} id="wow_class_selection" className={this.props.wowClass + "-color " + this.props.wowClass + "-menu-border"}>{this.props.wowClass}</Dropdown.Toggle>
                <Dropdown.Menu className={this.props.wowClass + "-border-top"}>
                    {wow_classes.map((wow_class) =>
                        <Dropdown.Item eventKey={wow_class} key={wow_class} className={wow_class + "-button"} onClick={this.setWowClass.bind(this, wow_class)}>{wow_class}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}


export default WowClassDropdown;
