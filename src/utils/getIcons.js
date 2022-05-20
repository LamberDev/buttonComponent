import local_grocery_store from '../icons/local_grocery_store.svg';
import delete_icon from '../icons/delete_icon.svg';
import add_icon from '../icons/add_icon.svg';
import star_icon from '../icons/star_icon.svg';
import thumb_up from '../icons/thumb_up.svg';
import thumb_down from '../icons/thumb_down.svg';

const iconsURL = {
    local_grocery_store,
    delete_icon,
    add_icon,
    star_icon,
    thumb_up,
    thumb_down
};

var getIcon = (props) => {
    if(props.startIcon && !props.endIcon){
        return iconsURL[props.startIcon];
    }

    if(!props.startIcon && props.endIcon){
        return iconsURL[props.endIcon];
    }

    return null;
};

export default getIcon;
  