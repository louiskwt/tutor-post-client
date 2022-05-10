import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditPost from "../EditPost/EditPost";
import DeletePost from "../DeletePost/DeletePost";


const PostItem = (props: any) => {
  return (
    <Accordion key={props.id} sx={{ mt: 1 }}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography variant="h6" fontWeight={600}>{props.title}</Typography>
            <Typography ml={3} component='span' variant="h6" fontWeight={600} >[{props.visit ? '可上門' : '不上門'}] </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
              <Typography sx={{ mb: 2 }} variant="h6" component='h1'>
                Name: {props.name}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component='h1'>
                Subject: {props.subject}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component='h1'>
                Subject: {props.location}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component="h1">
               Tutor Description:
            </Typography>
            <Box component='div' sx={{ p: 2, mb:3, border: '1px dashed grey' }}>
                  <Typography component='p'>
                      {props.description}
                  </Typography>
            </Box>
              <Typography sx={{ mb: 2 }} variant="h6" component='p'>
               Contact No.: {props.number}
            </Typography>
              <Typography sx={{ mb: 2 }} variant="h6" component='p'>
               Vaccination Record: {props.vaccines}
            </Typography>
            <Typography variant="h6" component='p'>
              Created At: {props.createdAt.substring(0, 10)}
            </Typography>

          
            {/* Button Group */}
            <Box component='div' sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <EditPost id={props.id} index={props.index} />
                <DeletePost id={props.id} index={props.index}/>
            </Box>

        </AccordionDetails>
    </Accordion>
  )
}

export default PostItem