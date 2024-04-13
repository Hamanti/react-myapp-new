import Slider from "../components/Slider/Slider";

import Display from "../components/Display/Display";
import Catalog from "../components/Catalog/Catalog";

export default function HomePage() {
  return (
    <>
      {/* Главный экран */}
      <Display></Display>

      {/* Слайдер */}
      <div className="title section">Популярные товары</div>
      <Slider></Slider>

      {/* Каталог */}
      <div className="title section">Каталог</div>
      <Catalog></Catalog>
    </>
  );
}
