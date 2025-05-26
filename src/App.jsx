import React from 'react'
import './App.css'


const images = [
  'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   'https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/372886/pexels-photo-372886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2377173/pexels-photo-2377173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/30484154/pexels-photo-30484154/free-photo-of-delicious-chocolate-pistachio-dessert-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/20767769/pexels-photo-20767769/free-photo-of-baklava-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  



]

  
  
  function App() {
  return (
    <>
      <h1>Image Gallery 📸</h1>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`img-${index}`} />
          </div>
        ))}
      </div>
    </>
  )
}


export default App

