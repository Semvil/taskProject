import React, {FC} from 'react';
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
import Cards from './Cards'
import LeftBR from './LeftBoard';
import NavBar from './NavBar';

const Board: React.FC = () => {
  const { styles } = useStyles();

  return (
  <Box className='font-link' >    
    <Grid container spacing={0} sx={styles.container} >
        <><LeftBR></LeftBR></>  
         <Grid item xs={12} sm={6} md={10} lg={10} sx = { styles.bgColor }>
          <><NavBar></NavBar></>
          <><Cards></Cards></>
         </Grid>     
    </Grid>
  </Box>
    
    
)
}
const useStyles = makeThemedStyles()(() => ({
  container: {
    width: '100%',
    height: '100vh'
  },
  bgColor: {
    background: theme.palette.secondary.main
  }
}))

const theme = createTheme({
  palette: {
    secondary: {
      main: '#F5F6FA',
    }
  }
})
export default Board;
