import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Affichage du plus ancien au plus recent OK
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1 );

  const nextCard = () => {
    setTimeout(
      
        // Ajout de +1 à l'index afin de supprimer l'element "undefined"
        // Ajout de "?" pour vérifier que "byDateDesc" existe bien
      () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
      5000);
  };

  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
 
      {byDateDesc?.map((event, idx) => (

        // Changement de la key en "date" pour qu'elle soit unique pour chaque slide
        <div key={event.date}> 
          <div            
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}>

            {/* Attribut "alt" modifié pour avoir les renseignements correspondants à l'image */}
            <img src={event.cover} alt={event.title} /> 
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input

                  // Changement de la key pour qu'elle corresponde à la slide en cours
                  key={_.date}
                  type="radio"
                  name="radio-button"
                  
                  // Remplacement de "idx" par "index" pour indiquer sur quelle image on se trouve 
                  checked={index === radioIdx}

                  // Ajout de "readOnly" pour retirer erreur console
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



export default Slider;
