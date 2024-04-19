import React, { memo } from 'react'

export default memo(function Alert(props) {
    const capital=(word)=>{
let msg=word;
return msg.charAt(0).toUpperCase()+msg.slice(1);
    }
  return (
    
     props.alerts && <div className={`alert alert-${props.alerts.type} fade show`} role="alert"> 
        {/* alert state ..object ka msg and type aara yha */}
  <strong>{capital(props.alerts.type)}</strong>:{props.alerts.message} 
</div>
    
  )
})
