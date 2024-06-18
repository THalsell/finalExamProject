import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import styled from 'styled-components';


const StyledAppBar = styled(AppBar)`
  background-color: lightblue; 
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-evenly;
  background-color: #383871;
`;



const NavBar = () => {
    return (
        <StyledAppBar position="sticky">
            <StyledToolbar>
                
                <div>
                    
                        <Button color="inherit">MENS</Button>
                        <Button color="inherit">WOMENS</Button>
                        <Button color="inherit">SHOES</Button>
                        <Button color="inherit">ACCESSORIES</Button>
                        <Button color="inherit">CLEARANCE</Button>
                    
                </div>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default NavBar;