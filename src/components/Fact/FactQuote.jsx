import React from 'react'

const FactQuote = ({text,...props}) => {
  return (
    <q 
    style={{display:'block',fontSize:'var(--quote-size)',fontStyle:'italic',color:'var(--yellow)',marginTop:'8rem',wordBreak:'break-all',textAlign:'center'}} {...props}>
      {text}
    </q>
  )
}

export default FactQuote