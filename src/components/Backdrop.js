// This is background for overlay / Modal

function Backdrop (props) {
    return (
        // since there is no content inside the div so we wrote this below backdrop div as a self closing tag
        <div className="backdrop" onClick={props.onCancel}/>
    );
}

export default Backdrop;