import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolbar } from './styled';
import Button from '@mui/material/Button';
import { goToPostListPage, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalContext';

export const Header = () => {
    const navigate = useNavigate()
    const { states, functions } = useContext(GlobalContext)

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToPostListPage(navigate)} color="inherit">Labeddit</Button>
                <Button onClick={() => functions.rightButtonAction(navigate)} color="inherit">{states.rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    );
}