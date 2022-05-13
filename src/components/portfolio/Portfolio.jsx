import { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { webApp, mobileApp, Design } from '../../data'

<a href='https://firebasestorage.googleapis.com/v0/b/portfolio-fd546.appspot.com/o/FPCZ-726b4b1d234b49daa25d74bbb673ab2e-signed.apk?
alt=media&token=f8901b70-27c2-4312-8556-b03a4db82745' download>Click to download</a>

export default function Portfolio () {
  const [selected, setSelected] = useState('web app')
  const [data, setData] = useState([])

  const list = [
    { id: 'web app', title: 'web app' },
    { id: 'mobile app', title: 'mobile app' },
    { id: 'Design', title: 'Design' }
  ]

  useEffect(() => {
    switch (selected) {
      case 'web app':
        setData(webApp)
        break
      case 'mobile app':
        setData(mobileApp)
        break
      case 'Design':
        setData(Design)
        break

      default:
        setData(webApp)
        break
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1 title='i am a header'>Portfolio</h1>
      <ul className='list'>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map(d => (
          <div className='items'>
            <img src={d.img} alt='' />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <a href='https://firebasestorage.googleapis.com/v0/b/portfolio-fd546.appspot.com/o/FPCZ-726b4b1d234b49daa25d74bbb673ab2e-signed.apk?
        alt=media&token=f8901b70-27c2-4312-8556-b03a4db82745' download>Click to download</a>

      <a href='#works'>
        <img src='/downArrow.png' alt='' />
      </a>
    </div>
  )
}
