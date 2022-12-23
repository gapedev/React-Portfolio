
const Separator = ({text}) => {
    return (
        <div className="separator">
            <div className="separator_line"></div>
            <div className="separator_text">
                <h2>{text}</h2>
            </div>
            <div className="separator_line"></div>
        </div>
    )
}

export default Separator;