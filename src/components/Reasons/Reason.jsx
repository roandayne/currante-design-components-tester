import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Reason({isImageFirst, title, body, image, headerFont, nonHeaderFont}) {
  return (
    <Box style={{ display: 'flex', margin: "20px 0" }}>
      {isImageFirst ? (
      <>
        <Box style={{ flex: '1' }}>
          <Card>
            <CardMedia
              component="img"
              alt="Image Alt Text"
              height="160"
              width="160"
              image={image}
            />
          </Card>
        </Box>
        <Box style={{
          flex: '2',
          padding: "0 0 0 20px"
        }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold", fontFamily: headerFont }}>{title}</Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: nonHeaderFont }}>{body}</Typography>
        </Box>
      </>
      ) : (
        <>
          <Box style={{
            flex: '2',
            padding: "0 20px 0 0"
          }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold", fontFamily: headerFont }}>{title}</Typography>
            <Typography sx={{ fontSize: "12px", fontFamily: nonHeaderFont }}>{body}</Typography>
          </Box>
          <Box style={{ flex: '1' }}>
            <Card>
              <CardMedia
                component="img"
                alt="Image Alt Text"
                height="160"
                width="160"
                image={image}
              />
            </Card>
          </Box>
        </>
        )
    }
    </Box>
  )
}

export default Reason