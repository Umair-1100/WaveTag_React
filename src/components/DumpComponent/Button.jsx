import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
);

const IconButton = ({ icon, onClick, className, ariaLabel }) => (
  <button className={`icon-button flex items-center justify-center text-xl p-3 gap-2 ${className}`} onClick={onClick} aria-label={ariaLabel}>
    {icon} {ariaLabel}
  </button>
);

const Buttons = ({ type, label, icon, onClick, className, ariaLabel }) => {
  if (type === 'icon') {
    return <IconButton icon={icon} onClick={onClick} className={className} ariaLabel={ariaLabel} />;
  }

  return <Button label={label} onClick={onClick} className={className} />;
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  onClick: () => {},
  className: '',
};

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  onClick: () => {},
  className: '',
};

Buttons.propTypes = {
  type: PropTypes.oneOf(['button', 'icon']).isRequired,
  label: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Buttons.defaultProps = {
  label: '',
  icon: null,
  onClick: () => {},
  className: '',
  ariaLabel: '',
};

export default Buttons;
