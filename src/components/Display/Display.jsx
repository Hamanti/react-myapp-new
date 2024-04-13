
import "./Display.css";


export default function Display() {

  return (
    <>
       <div className="display">
               <div className="display-block section">
                   <div className="display-block__suptitle">#1 По продажам</div>
                   <div className="display-block__title">SAFQ</div>
                   <div className="display-block__content">SAFQ - уникальный магазин для ваших идей и вкусов. Наш большой выбор не оставит вас равнодушным. </div>
                   <a href="#catalog" className="main-btn">В каталог</a>
                   <div className="display-block__subtitle">продажа различного рода товаров для дома</div>
               </div>
           </div>
    </>
  );
}
