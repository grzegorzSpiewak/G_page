import React from 'react';
import PropTypes from 'prop-types';

const FieldSet = (props) => {
  return (
    <fieldset className={`${props.class}__fieldset`} name={'contact form'}>
      <label className={`${props.class}__fieldset__label`}>{props.label}</label>
      {
        props.type === 'textarea' ?
          <div className={`${props.class}__fieldset__case`}>
            <textarea
              className={`${props.class}__fieldset__case__input`}
              type={`${props.type}`}
              name={`${props.name}`}
              placeholder={props.placeholder}
              onChange={props.onChange}
            />
          </div>
        :
          <div className={`${props.class}__fieldset__case`}>
            <i
              className={`${props.class}__fieldset__case__icon ${props.icon}`}
              aria-hidden="true"
            />
            <input
              className={`${props.class}__fieldset__case__input`}
              type={`${props.type}`}
              name={`${props.name}`}
              placeholder={props.placeholder}
              onChange={props.onChange}
            />
          </div>
        }
    </fieldset>
  );
};

FieldSet.propTypes = {
  class: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FieldSet;
