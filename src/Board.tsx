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

const Board: React.FC = () => {
  const { styles } = useStyles();

  return (
    <Box className='font-link'>    
      <Grid container spacing={0} sx={{ '&': { width: "100%", height: "100vh" }, }} >
        <Grid sx = {styles.leftItem} item xs={12} sm={6} md={2} lg={2}>
          <Box sx = {styles.boxForm}>
            TaskPR
          </Box>
          <Box sx = {styles.AddProjects}>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                Projects
              </Grid>
              <Grid item xs={4}>    
                <Button variant='outlined'
                  sx={{
                    '&': {
                        padding: '0', color: 'white', borderColor: 'white'
                      },
                    '&:hover': {
                        color: 'blue', borderColor: 'blue'
                      }
                  }}>
                  <AddIcon />
                </Button> 
              </Grid>
            </Grid>
          </Box>
          <Box>
            <List>
              <ListItemText sx={styles.listProjects}>Design
                <Notification sx={{ float: 'right' }}/>
              </ListItemText>
              <ListItemText sx={styles.listProjects}>FrontEnd
                <Notification sx={{ float: 'right' }}/>
              </ListItemText>
              <ListItemText sx={styles.listProjects}>BackEnd
                <Notification sx={{ float: 'right' }}/>
              </ListItemText>
              <ListItemText sx = {styles.listProjects}>Marketing</ListItemText>
              <ListItemText sx = {styles.listProjects}>Finance</ListItemText>
            </List>
          </Box>
          <Box p = {'40px 16px'}>
            Members
            <Box p = {'15px 16px'}>
              <Account sx = {{ textAlign: "left", pr: '10px', fontSize:'40px'}} />
              <Account sx = {{ textAlign: "left", pr: '10px', fontSize:'40px' }}/>
              <Account sx = {{ textAlign: "left", pr: '10px', fontSize:'40px' }} />
              <Button sx={{ float: 'right', padding: '0', color: 'white'}}><AddIcon sx={{fontSize:'40px'}} /></Button>
            </Box>
          </Box>
        </Grid>   
        <Grid item xs={12} sm={6} md={10} lg={10} sx={{ backgroundColor: '#F5F6FA' }}>
          <AppBar position="static" sx = {styles.appBar}>
            <Toolbar>
              <Button sx = {{textTransform:'none', color:'black'}}><Typography sx = {styles.toolBarComp}>Cards</Typography></Button>
              <Button sx = {{textTransform:'none', color:'black'}}><Typography sx = {styles.toolBarComp}>Reports</Typography></Button>      
              <Box sx = {styles.container1}>
                <Account sx={styles.image} />        
              </Box>
            </Toolbar>
          </AppBar>
          <Box>
            <Box sx={styles.cardBack}>
              <Box>
                <Typography display={'inline-block'}>To Do</Typography>
                <Button sx={{ display: 'block', float: 'right', padding: 0, color: 'black'}}><MoreVertIcon /></Button>
              </Box>
              <Card sx={styles.cardsBox}>
                <Box sx = {{padding: '10px', marginBottom:'10px'}}>
                  <Typography sx ={{display: 'inline-block'}}>21 Apr</Typography>
                  <Account sx={{ display: 'flex', float: 'right', fontSize:'40px' }} />
                </Box>
                <Divider sx={{marginRight: '10px', marginLeft: '10px'}}/>
                <Box sx={{ padding: '10px'}}>
                  <Typography>Web Desing and Interective map for Google</Typography>
                  <Box sx={{ position: 'absolute', bottom: 0 }}>
                    <Divider sx={{marginBottom: '20px'}} />
                    <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                    <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                    <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
                  </Box>
                </Box>
              </Card>
              <Card sx={styles.cardsBox}>
                <Box sx = {{padding: '10px', marginBottom:'10px'}}>
                  <Typography sx ={{display: 'inline-block'}}>21 Apr</Typography>
                  <Account sx={{ display: 'flex', float: 'right', fontSize:'40px' }} />
                </Box>
                <Divider sx={{marginRight: '10px', marginLeft: '10px'}}/>
                <Box sx={{ padding: '10px'}}>
                  <Typography>Web Desing and Interective map for Google</Typography>
                  <Box sx={{ position: 'absolute', bottom: 0 }}>
                    <Divider sx={{marginBottom: '20px'}} />
                    <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                    <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                    <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box sx={styles.cardBack}>
              <Box>
                <Typography display={'inline-block'}>To Do</Typography>
                <Button sx={{ display: 'inline-block', float: 'right', padding: 0, color: 'black'}}><MoreVertIcon /></Button>
              </Box>
              <Card sx={styles.cardsBox}>
                <Box sx = {{padding: '10px', marginBottom:'10px'}}>
                  <Typography sx ={{display: 'inline-block'}}>21 Apr</Typography>
                  <Account sx={{ display: 'flex', float: 'right', fontSize:'40px' }} />
                </Box>
                <Divider sx={{marginRight: '10px', marginLeft: '10px'}}/>
                <Box sx={{ padding: '10px'}}>
                  <Typography>Web Desing and Interective map for Google</Typography>
                  <Box sx={{ position: 'absolute', bottom: 0 }}>
                    <Divider sx={{marginBottom: '20px'}} />
                    <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                    <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                    <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
                  </Box>
                </Box>
              </Card>
              <Card sx={styles.cardsBox}>
                <Box sx = {{padding: '10px', marginBottom:'10px'}}>
                  <Typography sx ={{display: 'inline-block'}}>21 Apr</Typography>
                  <Account sx={{ display: 'flex', float: 'right', fontSize:'40px' }} />
                </Box>
                <Divider sx={{marginRight: '10px', marginLeft: '10px'}}/>
                <Box sx={{ padding: '10px'}}>
                  <Typography>Web Desing and Interective map for Google</Typography>
                  <Box sx={{ position: 'absolute', bottom: 0 }}>
                    <Divider sx={{marginBottom: '20px'}} />
                    <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                    <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                    <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box sx={styles.cardBack}>
              <Box>
                <Typography display={'inline-block'}>To Do</Typography>
                <Button sx={{ display: 'inline-block', float: 'right', padding: 0, color: 'black'}}><MoreVertIcon /></Button>
              </Box>
              <Card sx={styles.cardsBox}>
                <Box sx = {{padding: '10px', marginBottom:'10px'}}>
                  <Typography sx ={{display: 'inline-block'}}>21 Apr</Typography>
                  <Account sx={{ display: 'flex', float: 'right', fontSize:'40px' }} />
                </Box>
                <Divider sx={{marginRight: '10px', marginLeft: '10px'}}/>
                <Box sx={{ padding: '10px'}}>
                  <Typography>Web Desing and Interective map for Google</Typography>
                  <Box sx={{ position: 'absolute', bottom: 0 }}>
                    <Divider sx={{marginBottom: '20px'}} />
                    <Chip sx={styles.chips} label = 'TypeScript' color = 'primary'></Chip>
                    <Chip sx={styles.chips} label='HTML' color = 'secondary'></Chip>
                    <Chip sx={styles.chips} label  = 'SCSS' color = 'success'></Chip>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box sx={styles.cardBack}>
              <Box>
                <Typography display={'inline-block'}>To Do</Typography>
                <Button sx = {{ display: 'inline-block', float: 'right', padding: 0, color: 'black' }}><MoreVertIcon /></Button>
              </Box>
              <Box>
                <Button sx = {{margin: 'auto', display: 'block', color:'#d0d2e7', marginTop: 2}}><ControlPointIcon sx={{fontSize:'40px'}}/></Button>
              </Box>           
            </Box>
          </Box>    
        </Grid>
      </Grid>
    </Box>
    
)
}
const useStyles = makeThemedStyles()(() => ({

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    margin: "0"
  },

  leftItem: {
    color: 'white',
    backgroundColor: '#333939',
    fontSize: '30px'
  },

  boxForm: {
    padding: '16px 16px'
  },

  titleOfProjects: {
    padding: '8px 16px'
  },

  AddProjects: {
    padding: '60px 0px 30px 16px'  
  },

  listProjects: {
    padding: '15px 32px',
    margin: '0',
    fontSize: '40px'
  },

  toolBarComp: {
    paddingRight: '40px',
    fontSize: '20px'
  },

  container1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },

  image: {
    marginRight: 5,
    fontSize: '40px'
  },

  appBar: {
    backgroundColor: '#F5F6FA',
    boxShadow: 0,
    color: 'black'
  },

  cardsBox: {
    backgroundColor: 'white',
    width: 250,
    height: 250,
    marginTop: 2,
    position: 'relative',
  },
  
  cardBack: {
    backgroundColor: '#e9ebf8',
    width: 250,
    margin: 5,
    padding: 2,
    float: 'left',
    marginRight: '10px'
  },

  chips: {
    marginRight: '10px',
    marginBottom: '10px'
  },

  fontLink: {
    fontFamily: 'Montserrat'
  }
  
}))
export default Board;
