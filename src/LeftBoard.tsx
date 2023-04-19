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
import { Divider } from '@mui/material';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const LeftBR: React.FC = () => {
    const { styles } = useStyles();
    
    return (
      <Grid sx = {styles.leftItem} item xs={12} sm={6} md={2} lg={2}>
        <Box sx = {styles.boxForm}>
          TaskPR
        </Box>
        <Box sx = {styles.AddProjects}>
              Projects
              <Button variant = 'text'
                sx={{
                  '&': {
                      color: theme.palette.success.main
                    },
                  '&:hover': {
                      color: theme.palette.warning.main
                    }
                }}>
                <AddCircleIcon />
              </Button> 
        </Box>
        <Box>
            <Box sx={styles.listProjects}>
               Design
              <Notification />  
            
              </Box>
            <Box sx={styles.listProjects}>
              FrontEnd
              <Notification/>
            </Box>
            <Box sx={styles.listProjects}>
              BackEnd
              <Notification/>
            </Box>
            <Box sx = {styles.listProjects}>Marketing</Box>
            <Box sx = {styles.listProjects}>Finance</Box>
        </Box>
        <Box sx = {styles.membersBox}>
          Members
          <Box sx = {styles.accBox}>
            <Account sx = {styles.accAvatar} /> 
            <Account sx = {styles.accAvatar}/>
            <Account sx={styles.accAvatar} />
            <Account sx = {styles.accAvatar} />
          </Box>
          <Box sx = {styles.addButtonBox}>
            <Account sx = {styles.accAvatar} />
            <Button sx={styles.addButton}><AddIcon sx={styles.memberAddIcon} /></Button>
          </Box>
        </Box>
      </Grid>    
)
}
const useStyles = makeThemedStyles()(() => ({
leftItem: {
    color: theme.palette.success.main,
    backgroundColor: theme.palette.primary.main,
    fontSize: 30
},
  
boxForm: {
    p: 2.4
},
    
AddProjects: {
    pt: 7.2,
    pb: 2.4,
    pl: 1,
    display: 'flex',
    justifyContent: 'space-between'
},
    
listProjects: {
    padding: 2.6,
    margin: 0,
    fontSize: 20,
    display: 'flex',
    justifyContent: 'space-between'
},
    
accAvatar: {   
    pr: 1.2,
    fontSize: 50
},
    
addButton: {
    color: theme.palette.success.main
},
    
memberAddIcon: {
    fontSize: 60
},
    
accBox: {
    display: 'flex',
    justifyContent: 'flex-start', 
    pt: 2.4,
    pl: 2.4,
      
},
    
membersBox: { 
    pt: 2.4,
    pl: 1
},
    
addButtonBox: {
    display: 'flex',
    justifyContent: 'space-between',
    pl: 2.4,
    pr: 2.4,
    pt: 1
}
  
}));
const theme = createTheme({
  palette: {
      secondary: {
          main: '#000000',
          
      },
      primary: {
        main: '#333939'
      },
      warning: {
          main: '#F5F6FA'
      },
    success: { 
          main: '#FFFFFF'
      },
  } 
})
export default LeftBR;