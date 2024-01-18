import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper, Typography} from "@mui/material";

export const Footer = () => {
  return (
    <Paper  sx={{position: 'fixed', bottom: 0, left: 0, right: 0 }}  elevation={3}>
      <Typography display="flex" justifyContent="center" mt={1}>Let's Connect :</Typography>
      <BottomNavigation>
      <BottomNavigationAction href="https://twitter.com/priyamrm?s=21&t=0yJ0KtSz7ojIUvpHah77nw" label="Twitter" target="_blank" rel="noopener noreferrer" icon={<X color="info"/>} />
      <BottomNavigationAction href="https://instagram.com/priyamrm?igshid=OGQ5ZDc2ODk2ZA==" label="Instagram" target="_blank" rel="noopener noreferrer" icon={<Instagram color="info"/>} />
      <BottomNavigationAction href="https://www.linkedin.com/in/priyam-more-838692170" label="LinkedIn"target="_blank" rel="noopener noreferrer" icon={<LinkedIn color="info"/>} />
      <BottomNavigationAction  href="https://github.com/morepriyam" label="Github" target="_blank" rel="noopener noreferrer" icon={<GitHub color="info"/>} />
      </BottomNavigation>
    </Paper>
  )
}

export default Footer;
