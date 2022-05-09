import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const PostItem = (props: any) => {
  return (
    <Accordion key={props.id}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>{props.title}</Typography>
            <Typography component='span'>[{props.visit ? '可上門' : '不上門'}] </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="h5" component='h1'>
                Name: {props.name}
            </Typography>
            <Typography variant="h5" component='h1'>
                Subject: {props.subject}
            </Typography>
            <Typography variant="h5" component='h1'>
                Subject: {props.location}
            </Typography>
            <Typography component='p'>
               {props.description}
            </Typography>
            <Typography variant="h5" component='p'>
               Contact No.: {props.number}
            </Typography>
            <Typography variant="h5" component='p'>
               Vaccination Record: {props.vaccines}
            </Typography>

        </AccordionDetails>
    </Accordion>
  )
}

export default PostItem