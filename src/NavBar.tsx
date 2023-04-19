import React, { FC } from 'react';
import './App.scss';
import Typography from '@mui/material/Typography';
import { makeThemedStyles } from './hooks/useThemedStyles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Notification from '@mui/icons-material/NotificationsNoneOutlined';
import Account from '@mui/icons-material/AccountCircleOutlined';
import { fontSize } from '@mui/system';
import { AppBar, Toolbar } from "@mui/material";
import Card from '@mui/material/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const NavBar: React.FC = () => {
    const { styles } = useStyles();
    return (
        <AppBar position="static" sx = {styles.appBar}>
        <Toolbar>
          <Button sx = {{ '&': styles.buttonArticle, '&:hover': styles.buttonArticleHover }}><Typography sx = {styles.toolBarComp}>Cards</Typography></Button>
          <Button sx = {{ '&': styles.buttonArticle, '&:hover': styles.buttonArticleHover }}><Typography sx = {styles.toolBarComp}>Reports</Typography></Button>      
          <Box sx = {styles.container1}>
            <Account sx={styles.image} />        
          </Box>
        </Toolbar>
      </AppBar>
)
}
const useStyles = makeThemedStyles()(() => ({
    appBar: {
        backgroundColor: theme.palette.warning.main,
        boxShadow: 0,
        color: theme.palette.secondary.main
    },
    container1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
    image: {
        marginRight: 5,
        fontSize: 40
    },
    toolBarComp: {
        paddingRight: 4.8,
        fontSize: 20
    },
    buttonArticle: {
        textTransform: 'none',
        color: theme.palette.secondary.main
    },
    buttonArticleHover: {
        backgroundColor: theme.palette.primary.main
    }
}));
const theme = createTheme({
    palette: {
        secondary: {
            main: '#000000',
            
        },
        primary: {
            main: '#e9ebf8'
        },
        warning: {
            main: '#F5F6FA'
        }
    } 
})
export default NavBar;