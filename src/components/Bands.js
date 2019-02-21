import React from "react"
import Band from "./Band"

const Bands = props => {
  return props.bands.map(({name, id}) => <Band key={id} id={id} name={name} delete={props.delete}/>)
}

export default Bands
