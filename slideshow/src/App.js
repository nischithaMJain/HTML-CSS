import { useState } from "react"
import './App.css'
const img1 = `${process.env.PUBLIC_URL}\designer3.jpeg`;
const img2 = `${process.env.PUBLIC_URL}\designer4.jpeg`;
const img3 = `${process.env.PUBLIC_URL}\designer5.jpeg`;
const img4 = `${process.env.PUBLIC_URL}\designer6.jpeg`;
function App() {
  const [index, setIndex] = useState(0)
  const images = [img1, img2, img3, img4];
  const handlePrevious = () => {
    console.log('prev');
    if (index !== 0) {
      return setIndex(index - 1);
    } else {
      return setIndex(images.length - 1)
    }
  }
  const handleNext = () => {
    console.log('Next ');
    if (index !== images.length - 1) {
      return setIndex(index + 1);
    } else {
      return setIndex(0)
    }

  }
  return (
    <div className="App">
      <button onClick={handlePrevious}>{'<'}</button>
      <img src={images[index]} alt="" />
      <button onClick={handleNext}>{'>'}</button>
    </div>
  );
}

export default App;
