import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditPost from "../EditPost/EditPost";
import DeletePost from "../DeletePost/DeletePost";
import React from 'react'

type Props = {
  id: string,
  title: string,
  name: string,
  subject: string,
  number:string,
  location: string,
  description: string,
  vaccines: number,
  visit: boolean,
  createdAt: string,
  index: number
}

const PostItem: React.FC<Props> = ({
  id,
  title,
  name,
  subject,
  number,
  location,
  description,
  vaccines,
  visit,
  createdAt,
  index
}) => {
  return (
    <Accordion key={id} sx={{ mt: 1 }}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography variant="h6" fontWeight={600}>{title}</Typography>
            <Typography ml={3} component='span' variant="h6" fontWeight={600} >[{visit ? '可上門' : '不上門'}] </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
              <Typography sx={{ mb: 2 }} variant="h6" component='h1'>
                Name: {name}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component='h1'>
                Subject: {subject}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component='h1'>
                Subject: {location}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component="h1">
               Tutor Description:
            </Typography>
            <Box component='div' sx={{ p: 2, mb:3, border: '1px dashed grey' }}>
                  <Typography component='p'>
                      {description}
                  </Typography>
            </Box>
              <Typography sx={{ mb: 2 }} variant="h6" component='p'>
               Contact No.: {number}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component='p'>
               Vaccination Record: {vaccines}
            </Typography>
            <Typography variant="h6" component='p'>
              Created At: {createdAt.substring(0, 10)}
            </Typography>

          
            {/* Button Group */}
            <Box component='div' sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <EditPost id={id} index={index} />
                <DeletePost id={id} index={index}/>
            </Box>

        </AccordionDetails>
    </Accordion>
  )
}

export default PostItem