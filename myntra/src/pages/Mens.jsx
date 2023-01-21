import React from 'react'
import Navbar from '../Components/Navbar'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://blogscdn.thehut.net/wp-content/uploads/sites/32/2018/09/03174215/1200x672_205645746_MC_MK_Mankind_March_Bespoke_Shot5_1200x672_acf_cropped.jpg',
      caption: ''
    },
    {
      url: 'https://scontent.fccu1-2.fna.fbcdn.net/v/t1.6435-9/123796432_10159307310348221_4351058473770506895_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f09vaIWQpjgAX9NAchy&_nc_ht=scontent.fccu1-2.fna&oh=00_AfBwkBFjGLisE1BdWDJNog8OlUrd9f0gT-w5PMFLONxdCQ&oe=63F1EF00',
      caption: ''
    },
    {
      url: 'https://blog.myntra.com/wp-content/uploads/2016/10/Myntra-BBD-2.jpg',
      caption: ''
    },
  ];

const Mens = () => {

   


  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div key={index} style={{alignItems:"center", padding:"50px", width:"100%",height:"500px" ,borderRadius:"100px"}}>
          <div style={{ ...divStyle,width:"100%", 'backgroundImage': `url(${slideImage.url})` }}>
            <span style={{width:"100%"}}>{slideImage.caption}</span>
          </div>
        </div>
      ))} 
    </Slide>
    <hr style={{color:"gold"}}/>
    <div>
       
    </div>
    <div>
        <h1 style={{color:"gray",fontFamily:"monospace",fontSize:"30px"}}>BIGGEST DEALS ON BIG BRANDS</h1>
    </div>
  </div>
)
}
  


export default Mens
