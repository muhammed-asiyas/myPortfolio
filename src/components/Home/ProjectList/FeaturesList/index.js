import './index.css'

const FeaturesList = props => {
    const {featuresItem} = props
    const {feature} = featuresItem
    return (
        <li className='feature-item'>{feature}</li>
    )
}

export default FeaturesList