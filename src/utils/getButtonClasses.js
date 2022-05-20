
var getButtonClasses = (props) => {
    var styleClass = props.variant ? props.variant : "default";
    styleClass = props.color ? props.color : styleClass;
    styleClass = props.disableShadow ? "disableShadow" : styleClass;
    styleClass = props.disabled ? "disabled" : styleClass;
    styleClass = props.disabled && props.variant === "text" ? `${props.variant} disabled` : styleClass;
    styleClass = props.size ? props.size : styleClass;
    styleClass = props.startIcon || props.endIcon  ? 'button-icon' : styleClass;

    return styleClass;
};

export default getButtonClasses;