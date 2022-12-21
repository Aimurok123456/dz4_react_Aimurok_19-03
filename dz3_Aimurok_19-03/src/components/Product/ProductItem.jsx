import classes from './Product.module.css'
function ProductItem({ product }) {
    return (

        <div className={classes.productItem}>
            <div className={product.class}>
                <a target={'_blank'} href={product.url}>
                    <img className={classes.img} src={product.img} alt="" />
                </a>
                <h3> {product.name}</h3>
                <p className={classes.description}>{product.description}</p>
                <div className={classes.bottom}>
                    <span className={classes.price}>{product.price}</span>
                    <a target={'_blank'} href={product.url}>
                        <button className='btn'>купить</button>
                    </a>
                </div>

            </div>
        </div>

    )
}
export default ProductItem