import React from 'react';

function ComponenteFilho(props) {
  return <div>
    <p>{props.quinta}</p>
    <div>{props.sexta}</div>
  </div>;
}

export default ComponenteFilho;