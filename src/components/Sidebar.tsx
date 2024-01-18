import { Brightness6, Extension, Home, MoreHoriz, Newspaper, People, RemoveRedEye, School, SportsEsports } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

interface SidebarProps {
  isOpen: boolean;
}


const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <Box  flex={2} sx={{display:{xs: isOpen ? 'block' : 'none', sm: isOpen ? 'block' : 'none', md: isOpen ? 'block':'none', lg: isOpen ? 'none':'block'}}}  >
        <Box p={3}  pt={6} position="fixed" sx={{ width: '275px', maxWidth: 200, bgcolor: '#262522' , height:'100vh' , color:"text.primary" }}>
          
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home color='info'/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/1vs1">
              <ListItemIcon>
                <SportsEsports color='info'/>
              </ListItemIcon>
              <ListItemText primary="Play" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#puzzle">
              <ListItemIcon>
                <Extension color='info'/>
              </ListItemIcon>
              <ListItemText primary="Puzzle" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#learn">
              <ListItemIcon>
                <School color='info'/>
              </ListItemIcon>
              <ListItemText primary="Learn" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#watch">
              <ListItemIcon>
                <RemoveRedEye color='info'/>
              </ListItemIcon>
              <ListItemText primary="Watch" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#news">
              <ListItemIcon>
                <Newspaper color='info'/>
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#social">
              <ListItemIcon>
                <People color='info'/>
              </ListItemIcon>
              <ListItemText primary="Social" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#more">
              <ListItemIcon>
                <MoreHoriz color='info'/>
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#switch">
              <ListItemIcon>
                <Brightness6 color='warning'/>
              </ListItemIcon>
              <Switch color='warning'></Switch>
            </ListItemButton>
          </ListItem>
</List>
</Box>
  </Box>
  )
}


export default Sidebar;