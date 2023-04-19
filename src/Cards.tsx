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

const Cards: React.FC = () => {
    const { styles } = useStyles();
    
    return (
        <Box>
        <Box sx={styles.cardBack}>
          <Box sx = {styles.cardTitle}>
            <Typography>To Do</Typography>
            <Button sx={styles.dotButton}><MoreVertIcon /></Button>
          </Box>
          <Card sx={styles.cardsBox}>
            <Box sx = {styles.avatarDataBox}>
              <Typography sx ={styles.dataCard}>21 Apr</Typography>
              <Account sx = {styles.avatarCard} />
            </Box>
            <Divider sx = {styles.dividerStyle}/>
            <Box sx = {styles.infoBox}>
              <Typography>Web Desing and Interective map for Google</Typography>  
            </Box>
            <Divider sx = {styles.labelDivider} />
            <Box sx={styles.labelBox}> 
                <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
            </Box>
          </Card>
          <Card sx={styles.cardsBox}>
            <Box sx = {styles.avatarDataBox}>
              <Typography sx ={styles.dataCard}>21 Apr</Typography>
              <Account sx = {styles.avatarCard} />
            </Box>
            <Divider sx = {styles.dividerStyle}/>
            <Box sx = {styles.infoBox}>
              <Typography>Web Desing and Interective map for Google</Typography>  
            </Box>
            <Divider sx = {styles.labelDivider} />
            <Box sx={styles.labelBox}> 
                <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
            </Box>
          </Card>
        </Box>
        <Box sx={styles.cardBack}>
          <Box sx = {styles.cardTitle}>
            <Typography>To Do</Typography>
            <Button sx={styles.dotButton}><MoreVertIcon /></Button>
          </Box>
          <Card sx={styles.cardsBox}>
            <Box sx = {styles.avatarDataBox}>
              <Typography sx ={styles.dataCard}>21 Apr</Typography>
              <Account sx = {styles.avatarCard} />
            </Box>
            <Divider sx = {styles.dividerStyle}/>
            <Box sx = {styles.infoBox}>
              <Typography>Web Desing and Interective map for Google</Typography>  
            </Box>
            <Divider sx = {styles.labelDivider} />
            <Box sx={styles.labelBox}> 
                <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
            </Box>
          </Card>
          <Card sx={styles.cardsBox}>
            <Box sx = {styles.avatarDataBox}>
              <Typography sx ={styles.dataCard}>21 Apr</Typography>
              <Account sx = {styles.avatarCard} />
            </Box>
            <Divider sx = {styles.dividerStyle}/>
            <Box sx = {styles.infoBox}>
              <Typography>Web Desing and Interective map for Google</Typography>  
            </Box>
            <Divider sx = {styles.labelDivider} />
            <Box sx={styles.labelBox}> 
                <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
            </Box>
          </Card>
        </Box>
        <Box sx={styles.cardBack}>
          <Box sx = {styles.cardTitle}>
            <Typography>To Do</Typography>
            <Button sx={styles.dotButton}><MoreVertIcon /></Button>
          </Box>
          <Card sx={styles.cardsBox}>
            <Box sx = {styles.avatarDataBox}>
              <Typography sx ={styles.dataCard}>21 Apr</Typography>
              <Account sx = {styles.avatarCard} />
            </Box>
            <Divider sx = {styles.dividerStyle}/>
            <Box sx = {styles.infoBox}>
              <Typography>Web Desing and Interective map for Google</Typography>  
            </Box>
            <Divider sx = {styles.labelDivider} />
            <Box sx={styles.labelBox}> 
                <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
            </Box>
          </Card>
        </Box>
        <Box sx={styles.cardBack}>
          <Box sx = {styles.cardTitle}>
            <Typography>To Do</Typography>
            <Button sx={styles.dotButton}><MoreVertIcon /></Button>
          </Box>
          <Box>
            <Button sx = {styles.addIcon}><ControlPointIcon sx={{fontSize:'40px'}}/></Button>
          </Box>           
        </Box>
      </Box>  
)
}
const useStyles = makeThemedStyles()(() => ({
    chips: {
        mr: 1.2,
        mb: 1.2,
        
  },
    cardBack: {
        backgroundColor: theme.palette.warning.main,
        width: 250,
        m: 5,
        p: 2,
        float: 'left',
        mr: 1.2
  },
    cardsBox: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '100%',
        mt: 2,
  },
  dotButton: { 
        p: 0,
        color: 'black'
  },
    avatarDataBox: {
        padding: 1.2,
        marginBottom: 1.2,
        mt: 1.2,
        display: 'flex',
        justifyContent: 'space-between',
       
  },
    dataCard: {
        
  },
  avatarCard: {
 
        fontSize: 40
  },
  dividerStyle: {
        mr: 1.2,
        ml: 1.2
        
  },
  infoBox: {
    p: 2,
    pd: 10
  },
  labelBox: {
    display: 'flex',
    justifyContent: "space-evenly",
    alignItems: 'flex-end',
    minHeight: '100%'
    
  },
  labelDivider: {
    mb: 1.2,
    mr: 1.2,
    ml: 1.2
  },
  addIcon: {
        margin: 'auto',
        display: 'block',
        color: theme.palette.secondary.main,
        mt: 2
  },
  cardTitle: {
        display: 'flex',
        justifyContent: 'space-between'
  }
}));
const theme = createTheme({
  palette: {
    secondary: {
      main: '#d0d2e7',
    },
    primary: {
      main: '#ffffff',
    },
    warning: {
      main: '#e9ebf8'
    }
  }
})

export default Cards;