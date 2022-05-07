import '../styles/styles.css';

function Button(props){
    var styleClass;

    styleClass = props.variant ? props.variant : "default";
    styleClass = props.color ? props.color : styleClass;
    styleClass = props.disableShadow ? "disableShadow" : styleClass;
    styleClass = props.disabled ? "disabled" : styleClass;
    styleClass = props.disabled && props.variant === "text" ? `${props.variant} disabled` : styleClass;
    styleClass = props.size ? props.size : styleClass;
    return (
        <div id='button' className={styleClass}>
            <span>Default</span>
        </div>
    )

}

export default Button;
