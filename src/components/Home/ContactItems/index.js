import './index.css'

const ContactItems = props => {
  const {contactItem} = props
  const {logo, title, displayText, link} = contactItem
  return (
    <a href={link} className='contact-item'>
      <img className='contact-logo-item' src={logo} />
      <h1 className='contact-title'>{title}</h1>
      <p className='contact-display'>{displayText}</p>
    </a>
  )
}

export default ContactItems