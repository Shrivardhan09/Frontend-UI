import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box } from '@mui/material';


const CardTimeline = ({ number }) => {
    return (
        <Timeline>
            <TimelineItem color='primary'>
                <TimelineSeparator >
                    <TimelineDot color='primary' />
                    <TimelineConnector sx={{ backgroundColor: '#1976D2' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Box sx={{ px: 2, }}>
                        {number}.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloremque voluptatibus delectus id laboriosam, impedit fugit magnam numquam neque laborum hic architecto pariatur, sint tempora?
                    </Box>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default CardTimeline
