import './works.scss'
import { useState } from 'react';



export default function Work () {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: '2',
      title: `FPCZ app`,
      img: '/bible(2).png',
      desc: 
      <a className='link' href='https://firebasestorage.googleapis.com/v0/b/portfolio-fd546.appspot.com/o/FPCZ-726b4b1d234b49daa25d74bbb673ab2e-signed.apk?
      alt=media&token=f8901b70-27c2-4312-8556-b03a4db82745' download>Click to download</a>
    },
    {
      id: '1',
      title: 'business',
      img: '/business.jpg',
      desc: 'money related apps. What do you mean?'
    },
    {
      id: '2',
      title: 'personal',
      img: '/germain-2.png',
      desc: 'basketball'
    }
  ]

  const handleClick = way => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide- 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
   }


  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        
      >
        {data.map(d => (
          <div className='container'>
            <div className='item'>
              <img src={d.img} alt='' />

              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
      <img
        className='arrow'
        src='/leftArrow.png'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        className='arrow1'
        src='/rightArrow.png'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  )
}
