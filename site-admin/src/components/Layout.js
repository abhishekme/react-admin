import React, { Component } from 'react';
import {HeaderPartial} from './Partial/HeaderPartial';
import {FooterPartial} from './Partial/FooterPartial';
import {Login} from './Login/Login';

export class Layout extends Component {
  render() {
    return (
      <>
        <HeaderPartial/>
            <Login/>
        <FooterPartial/>
      </>
    );
  }
}



