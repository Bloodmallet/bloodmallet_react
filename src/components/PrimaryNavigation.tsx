import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './bootstrap_styles/base.scss';

import bloodmallet from './bloodmallet.svg';

interface PrimaryNavigationProps {
  page: string;
  setPage: Function;
}

class PrimaryNavigation extends React.Component<PrimaryNavigationProps> {

  constructor(props: PrimaryNavigationProps) {
    super(props);

    this.setPage = this.setPage.bind(this);
  }

  setPage(name: string) {
    this.props.setPage(name);
  }

  render() {
    // links to valid subpages
    const pages: string[] = [
      'login',
      'register',
      'settings'
    ];

    const categories: string[] = [];

    return (
      <Navbar variant="dark" fixed="top" expand="lg" className="border-bottom">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={bloodmallet}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {'bloodmallet'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primaryMenu" />
        <Navbar.Collapse id="primaryMenu">
          {[categories, pages].map((list, id) =>
            <Nav key={list.toString()} className={id > 0 ? "ml-auto" : ""}>
              {list.map((name) =>
                <Nav.Link key={name} active={this.props.page === name} onClick={this.setPage.bind(this, name)}>{name}</Nav.Link>
              )}
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar >
    );
  }
}


export default PrimaryNavigation;
