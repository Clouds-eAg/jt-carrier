import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import {
  OpenInNew,
} from "@mui/icons-material";
import * as React from "react";

const ads = [
  {
    img: 'https://www.stancoe.org/sites/default/files/styles/banner/public/banners/college%20ready.jpg?itok=MEVz3B7A',
    title: "College & Career Fair",
    info: "Sign up for IUSD's CCF at Woodbridge HS 11/07 5-8pm",
    url: "https://drive.google.com/file/d/1ULa1SohPLqEhmVVNbEi83s_mWQGZgFnX/view?usp=sharing",
  },
  {
    img: 'https://media.istockphoto.com/photos/white-wall-clock-on-blue-background-picture-id1289661784?b=1&k=20&m=1289661784&s=170667a&w=0&h=pNZcN6beC8ov_ZZGwFiFxqdFLR8GQUomjBpnz8vI_8k=',
    title: "Special Min Day Schedule",
    info: "Conference Week: Tue 10/18 & Fri 10/20",
    url: "https://docs.google.com/document/d/1X4CVrXRRRGvaHjspfkt2wWqzgi4HrBc_On3TaBquf6A/edit?usp=sharing",
  },
  {
    img: "https://api.army.mil/e2/c/images/2021/10/19/5ea578f1/max1200.jpg",
    title: "Red Ribbon Week",
    info: "October 24-28th Click for More Info",
    url: "https://drive.google.com/file/d/1CMHngfmFXpxFbBVN-SQv9goqWqKrqzax/view?usp=sharing",
  },
  {
    img: 'https://media.istockphoto.com/photos/white-wall-clock-on-blue-background-picture-id1289661784?b=1&k=20&m=1289661784&s=170667a&w=0&h=pNZcN6beC8ov_ZZGwFiFxqdFLR8GQUomjBpnz8vI_8k=',
    title: "Bell Schedule",
    info: "Click here >>>",
    url: "https://jeffreytrail.iusd.org/about/calendar-events/bell-schedule",
  },
  {
    img: 'https://drive.google.com/uc?id=16a3BXjQDtgg8uv2YjOka8kE6UDLrKrk0',
    title: "Rubik's Cube Club",
    info: "We turn colorful cubes quickly",
    url: "http://bit.ly/JTMSCubingClub",
  },
  {
    img: 'https://drive.google.com/uc?id=1UResVzqzEWMyKx6Xysc3hIRJ0hQ7E1iV',
    title: 'WE Team',
    info: "WE Team is dedicated to helping people in need of support.",
    url: "http://bit.ly/weteamweb",
  },
  {
    img: 'https://drive.google.com/uc?id=14vIn0blNYbOY-M5yiYmAZ2YcGpczEFk8',
    title: 'Editing Club',
    info: "Editing club is where you can learn to edit and have fun.",
    url: "",
  },
  {
    img: 'https://drive.google.com/uc?id=1G_4Oejf47D8UoXtch54ytl-P4gME_4Jw',
    title: 'Jet Gazette (Student News)',
    info: "Jet Gazette Student Newspaper",
    url: "",
  },
];

function Events() {
  return (
    <Box sx={{
      display: "flex",
      height: "100%",
      flexDirection: "column"
    }}>
      <Box sx={rowStyle}>
        <Typography variant="h5">What's Happening at JTMS?</Typography>
      </Box>

      <br />

      <Typography variant="h6">
        Advertise your club or event right here on JT Carrier! <a href="https://forms.gle/mWXPPqiaDCzEvRuu6" target="_blank" rel="noreferrer">Interest Form</a>
        <br />
        Reach ~600 students each week. All you need is an image and a tag line!
      </Typography>

      <ImageList variant="quilted" cols={3} gap={9}>
        {ads.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.info}
              actionIcon={item.url === "" ? "" :
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <OpenInNew />
                </IconButton>
              }
          />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const rowStyle = {
  width: "100%",
  flexGrow: "row",
  display: "flex",
  marginTop: 3,
};

export default Events;
