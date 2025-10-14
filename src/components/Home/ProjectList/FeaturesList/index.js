import './index.css'
import ThemeContext from '../../../../context/ThemeContext'

const FeaturesList = props => {
    const {featuresItem} = props
    const {feature} = featuresItem
    return (
        <ThemeContext.Consumer>
            {value => {
                const {isDark} = value;
                const FeatureItemColor = isDark ? 'dark-feature-item' : 'color-feature-item'
                return (
                    <li className={`feature-item ${FeatureItemColor}`}>{feature}</li>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default FeaturesList