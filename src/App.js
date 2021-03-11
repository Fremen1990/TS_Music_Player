import './styles.css'

function Heading(){

const showHello = 1+1 === 5 || (2*2 ===4  && "Hello Song!")

  return    <h1>{showHello}</h1>
}

function SongPlayer(){
  const showControls = false ||true;
  const audioURL= 'http://devthomas.pl/CoolProjects/MusicPlayer/MusicPlayer/MP3/T.S.%20-%20Lazare%20-%20Stell%20For%20Humans%20+%20Vocal%20v1.mp3';
  return(
 <section>
    <Heading/>
    <audio controls={showControls}>
      <source src={audioURL} />
    </audio>
 </section>
  )
}

function getStatusMessage(isLoading, hasErrors){
  let message = null;
  if(isLoading){
    message = "Loading......"
  }
  if(hasErrors){
    message = "Errors occured!! "
  }
  return message;
}
export default function App () {
const isLoading = false;
const hasErrors = false;
const showPlayer = !isLoading && !hasErrors;
const statusMessage = getStatusMessage(isLoading, hasErrors);

  return (
    <div className='App'>
   {showPlayer? <SongPlayer/> :  statusMessage} 
    </div>
  )
}
