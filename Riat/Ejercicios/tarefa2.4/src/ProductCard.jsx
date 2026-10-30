import styles from "./ProductCard.module.css"

export default function ProductCard({nombre, precio}){
    return(<div className={styles.produto}>
        <p>{nombre}</p>
        <p>{precio}€</p>
    </div>)
}