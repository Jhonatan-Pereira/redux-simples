import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';
import Card from './Card';

const Intervalo = props => {
  const { min, max } = props
  return (
    <Card red title='Intervalo de número'>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} 
            onChange={e => props.onMinChanged(+e.target.value)}/>
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max}
            onChange={e => props.onMaxChanged(+e.target.value)}/>
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Intervalo)