import PropTypes from 'prop-types';
import cl from './Reviews.module.css'

export default function Reviews ({options, handleReviewsOptions}) {
    return (
      
    options.map(el => (
      <ul className='cl.button__list' key={el}>
        <button className={cl.button}  type="button" onClick={() => handleReviewsOptions(el)}>{el}</button>
      </ul>
    ))
  );
}
Reviews.propTypesropTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleReviewsOptions: PropTypes.func.isRequired,
}


    

   