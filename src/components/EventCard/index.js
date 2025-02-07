import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  events = [], // Liste complète des évènements
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => {
  
  // CORRECTIONS
  // Si une liste d'évènements est passé, on définit le dernier évènement
  const lastEvent = events 
  ?.filter((event) => event.date) // Garder uniquement les évènements avec une date valide
  .sort((a, b) => new Date(b.date) - new Date(a.date))[0]; // Trier par date décroissante
  

  const eventDate = lastEvent ? new Date(lastEvent.date) : date;
  
    // Vérification de la date  
    const validDate = date instanceof Date ? date : new Date(eventDate);


    return (
      <div
        data-testid="card-testid"
        className={`EventCard${small ? " EventCard--small" : ""}`}
        {...props}
      >
        <div className="EventCard__imageContainer">
          <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
          <div className="EventCard__label">{label}</div>
        </div>
        <div className="EventCard__descriptionContainer">
          <div className="EventCard__title">{title}</div>
          <div className="EventCard__month">{getMonth(validDate)}</div>
        </div>
      </div>
    );
  };


// Ajout Proptypes
EventCard.propTypes = {
  events: PropTypes.arrayOf (
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),


  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  events: [],
  imageAlt: "image",
  small: false,
}

export default EventCard;
