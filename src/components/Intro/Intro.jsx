import { Box, Card, CardActions, CardContent, Collapse, Typography } from '@mui/material'
import React, {useState} from 'react'
import IntroCard from './IntroCard'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Intro({headerFont, nonHeaderFont}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="center" padding="20px">
      <Typography variant="h5" sx={{fontFamily: headerFont}}>Intro to Currante</Typography>
      <Card sx={{ border: "none", boxShadow: "none", padding: 0}}>
        <CardContent>
          <IntroCard headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={false} title="Welcome to Currante" body="Your go-to platform for hassle-free home services! Discover the convenience of hiring skilled workers like cleaners, plumbers, and carpenters with just a click." image={"https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_ECUeQiPF65h2Bhl6-6731-NOC.jpg?itok=pNs1_bl2"}/>
          <IntroCard headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={true} title="Unlock the power of Currante" body="Homeowners connect seamlessly with a dynamic pool of skilled workers. Say goodbye to stress and hello to efficient, short-term service solutions." image={"https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} />
          <IntroCard headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={false} title="Step into the future of home services " body="The app that empowers homeowners to effortlessly find and hire skilled workers." image={"https://cdn.tatlerasia.com/tatlerasia/i/2021/11/11100944-psa-warns-imprisonment-web_cover_1800x1203.jpg"} />
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <IntroCard headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={true} title="Revolutionizing the way you hire short-term workers" body="Join our community of homeowners and skilled professionals, where quality service meets convenience." image={"https://images.pexels.com/photos/6921969/pexels-photo-6921969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
          <IntroCard headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={false} title="Discover Currante" body="From cleaners to plumbers, our platform ensures a seamless connection between homeowners and reliable, short-term workers." image={"https://images.pexels.com/photos/7342998/pexels-photo-7342998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        </Collapse>
        <CardActions sx={{textAlign: "center"}} >
          <Box
            onClick={handleExpandClick}
            sx={{ cursor: 'pointer'}}
            margin="0 auto"
          >
            <Typography sx={{ fontSize: '10px', fontFamily: nonHeaderFont }}>{expanded ? 'Show Less' : 'Show More'}</Typography>
            {expanded ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Intro