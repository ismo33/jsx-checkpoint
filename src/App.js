import image2 from './image2.jpg'
import './App.css'

function App() {
  return (
    <>
    <div>
      <h1 className="title red">Ismail Ousji</h1>
      <br/>
      <br/>
      <img src={image2} alt="mypic"></img>
      <br/>
      <br/>
      <img src='/image1.png' alt='yourpic'width="400" height="300"></img>
    </div>
    <br/>
    <iframe className="frame"
      width="450"
      height="300"
      src="https://www.youtube.com/embed/m7OWXtbiXX8"
      title="YouTube video player"
    />
     
    </>
  );
}

export default App;
