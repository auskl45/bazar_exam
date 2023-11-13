import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Rating = (props) => {
  const { value } = props;

  // Calcula la parte entera y decimal del valor
  const intValue = Math.floor(value);
  const decimalValue = value - intValue;

  // Crea un array con estrellas llenas hasta la parte entera
  const ratingArr = Array(intValue).fill(true);

  if (decimalValue > 0) {
    ratingArr.push(decimalValue);
  }

  while (ratingArr.length < 5) {
    ratingArr.push(false);
  }

  return (
    <div className="Rating">
      {ratingArr.map((isFilled, index) => (
        isFilled ? (
          // Si es una estrella parcial, muestra una porción de la estrella
          <StarIcon key={index} style={index === intValue ? { clipPath: `polygon(0 0, ${decimalValue * 100}% 0, ${decimalValue * 100}% 100%, 0 100%)` } : {}} />
        ) : (
          <StarOutlineIcon key={index} />
        )
      ))}
    </div>
  );
};

export default Rating;
