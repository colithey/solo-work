import './СatalogCard.scss'

export const CardCatalog = ({image, title}) => {
    return (
        <>
            <div className="catalog__card">
                <div className="catalog__img">
                    <img src={image} alt="" />
                </div>
                <h4 className='catalog__title'>{title}</h4>
            </div>
        </>
    )
}