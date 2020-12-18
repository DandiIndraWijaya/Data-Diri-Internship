import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

const StyledLogo = styled.span`
    margin: 20px;
    font-weight: bold;
    font-size: 20px;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

const Navbar = () => {
    return (
      <div>
        <AppBar style={{ background: `#48B165` }} position="fixed">
                <ToolBar >
                    <StyledLogo >
                        HRIS
                    </StyledLogo>
                </ToolBar>
          </AppBar>
      </div>
            
    )
}

export default Navbar;