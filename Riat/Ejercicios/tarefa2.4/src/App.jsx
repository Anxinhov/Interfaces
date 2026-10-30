import Tarxeta from "./Tarxeta.jsx";
import Aviso from "./Aviso.jsx";
import ProductCard from "./ProductCard.jsx";

export default function App() {
  return (
    <>
      <Tarxeta />
      <Aviso />
      <ProductCard nombre="Monitor" precio={60}/>
    </>
  );
}
