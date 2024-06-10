import { useEffect, useState } from 'react'
import './Catalog.scss'
import axios from 'axios'
import { CardCatalog } from '../../components/CatalogCard/CardCatalog'


export const Catalog = () => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState('')

    const getProducts = async () => {
        try {
            const resp = await axios(`https://jsonplaceholder.typicode.com/photos`)
            console.log(resp.data);
            setProduct(resp.data)
        } catch (err) {

            switch (err.response.status) {
                case 500:
                    setError('Ошибка системы, обратитесь в службу поддержки!')
                    break
            }
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="container">
                <div className="grid">
                {
                    product.map((el) => (
                        <CardCatalog key={el.id} image={el.thumbnailUrl} title={el.title} />
                    ))
                }
                </div>
            </div>
        </>
    )
}