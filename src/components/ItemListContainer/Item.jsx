import "./Item.css"

const Item = ({ product }) => {

    return (
        <div className="itemBox">
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
        </div>
    )
}

export default Item