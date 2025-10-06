import './index.css'

const TechnicalSkills = props => {
    const {skillsItem} = props
    const {id, icon, name} = skillsItem
    return (
        <li className='skill-item-container'>
            <img className='skill-icon' src={icon} />
            <p className='skill-item-name'>{name}</p>
        </li>
    )
}

export default TechnicalSkills