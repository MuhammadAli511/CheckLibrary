import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';

function VideoPlayer() {
  return (
    <div className="absolute w-[800px] h-[445px] top-[80px] left-[14vw] rounded-[10px] overflow-hidden">
      <div className='text-center font-bold text-2xl'>
      Uncover opportunity to explode your business here 👇
      </div>
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default VideoPlayer;
