import '../styles/style.css';

function HorizontalCard({title, imgSrc, description}){
    return (        
        <div className='row justify-content-center'>
            <div className='col-lg-11 col-md-10 col-sm-12'>
                <div className='row horizontal-card d-flex align-items-stretch justify-content-center mb-3'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <img className='img-fluid' src={imgSrc}/>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 mt-3 px-4 description'>
                        <h2 className='mb-4'>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard;