import '../../css/Piece/select.css';
import isVowel from "../Utils/isvowel.js";

function SelectTitle(props) {
    return (
        <div className="select-comp">
            <h1 className="select-title">Choose {isVowel(props.name) ? `An ${props.name.charAt(0).toUpperCase() + props.name.slice(1)}` : `A ${props.name.charAt(0).toUpperCase() + props.name.slice(1)}`} </h1>
        </div>
    )
}

export default SelectTitle;