import { Box, Button, Card, CardActions, CardContent, Collapse, Typography } from '@mui/material'
import React, {useState} from 'react'
import Reason from './Reason'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Reasons({darkerBg, headerFont, nonHeaderFont}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display={"flex"} flexDirection="column" alignItems={"flex-start"} justifyContent="center" padding="20px" sx={{backgroundColor: darkerBg}}>
      <Typography sx={{fontFamily: headerFont}} variant="h5">Why Currante?</Typography>
      <Card sx={{ border: "none", boxShadow: "none", backgroundColor: darkerBg }}>
        <CardContent>
          <Reason headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={false} title="Wide Pool of Skilled Workers" body="Access a wide range of services including cleaners, plumbers, carpenters, and more, all in one convenient platform." image={"https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_ECUeQiPF65h2Bhl6-6731-NOC.jpg?itok=pNs1_bl2"}/>
          <Reason headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={true} title="Effortless Booking Process" body="Quick and secure booking process allows you to find and hire the perfect worker within minutes." image={"https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} />
          <Reason headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={false} title="Verified and Reliable Workers" body="Rest easy knowing that all workers on Currante undergo a thorough verification process by using Phisys ID." image={"https://cdn.tatlerasia.com/tatlerasia/i/2021/11/11100944-psa-warns-imprisonment-web_cover_1800x1203.jpg"} />
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Reason headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={true} title="Transparent Pricing" body="Access upfront pricing, ensuring transparency and flexibility to choose services within your budget." image={"https://images.pexels.com/photos/6921969/pexels-photo-6921969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
          <Reason headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={false} title="Real-Time Communication" body="Direct communication with your hired worker ensures clear and seamless coordination." image={"https://images.pexels.com/photos/7342998/pexels-photo-7342998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
          <Reason headerFont={headerFont} nonHeaderFont={nonHeaderFont} isImageFirst={true} title="Community Support and Ratings" body="Join a supportive community; user reviews aid worker selection, while your feedback contributes to building trust and reliability." image={"https://images.pexels.com/photos/9821386/pexels-photo-9821386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/> 
        </Collapse>
        <CardActions sx={{textAlign: "center"}} >
          <Box
            onClick={handleExpandClick}
            sx={{ cursor: 'pointer' }} 
            margin="auto"
          >
            <Typography sx={{ fontSize: '10px', fontFamily: nonHeaderFont }}>{expanded ? 'Show Less' : 'Show More'}</Typography>
            {expanded ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Reasons