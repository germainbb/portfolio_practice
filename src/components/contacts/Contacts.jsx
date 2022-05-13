import './contacts.scss'
import {useState} from 'react'

export default function Contacts () {
  const [message, setMessage] = useState(false)

  // const handleChange = e => {
  //     if (e.target.files[0]) {

  //     }
  // };

  // const handleUpload = () => {

  // }

  const handleSubmit = e => {
    e.preventDefault()
    setMessage(true)
  }

  return (
    <div className='contacts'>
      <div className='left'>
        <img src='/4in1.png' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}
