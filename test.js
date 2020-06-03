import * as React from 'React';
import PropTypes from 'prop-types';

const Shape = ({ name, x, y, width, height }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: `${width}px`,
        color: 'red',
        height: `${height}px`,
        backgroundColor: 'rgba(0,0,0,0.5)',
        task6: 'task6 added',
        task7: 'task7 added',
      }}
      data-name={name}
    ></div>
  );
};

//Validating props
Shape.propTypes = {
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export { Shape };
