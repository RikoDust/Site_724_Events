export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth() +1 ]; // Ajout +1 à l'index pour l'aligner avec MONTH

// "date.getMonth()" retourne un index de 0 à 11, alors que MONTH commence à 1 et va jusqu'a 12

