import CardTimeline from './CardTimeline';
import '../../app/globals.css'

export default function TimelineBox() {
    return (
        <div className='overflow-y-scroll w-full max-h-[500px] flex flex-col justify-center items-center scroll-container'>
            <div className='mt-32'>
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />
                < CardTimeline />

            </div>
        </div>
    );
}