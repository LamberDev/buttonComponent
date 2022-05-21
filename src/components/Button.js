import '../styles/button_classes.css';
import getButtonClasses from '../utils/getButtonClasses';
import getIcon from '../utils/getIcons';

function Button(props){

    var buttonClasses = getButtonClasses(props);
    var icon = getIcon(props);
    var text = props.text ? props.text : 'Default';

    return (
        <div id='button' className={buttonClasses}>
            <img alt="icon" style={{display: props.startIcon ? 'inline-block' : 'none'}} src={icon} className='icon' ></img>
            <span>{text}</span>
            <img alt="icon" style={{display: props.endIcon ? 'inline-block' : 'none'}} src={icon} className='icon'></img>
        </div> 
    )
}

export default Button;
