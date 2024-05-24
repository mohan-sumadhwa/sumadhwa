import '../styles/style.css';

function Card({imgSrc, iconClass, title, description}){

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 align-items-stretch d-flex mb-5 mb-lg-5">
            <div className="icon-box">
                {/* <!-- <div className="icon"><i className="bx bx-tachometer"></i></div> --> */}
                <div className="icon mb-4">
                    {iconClass ? <i className={iconClass}></i>: ""}                    
                    {imgSrc ? <img src={imgSrc} alt="" className="icon-img img-fluid" /> : ""}
                </div>
                <h4 className="title p-1">
                    {title}
                </h4>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card;