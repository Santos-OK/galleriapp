function Star(props) {
  

    return (
      <>
          <span className={props.star>props.rating ? "star" : 'active'} ><a onClick={()=>(props.warnRate(props.star))}>{'\u2605'}</a></span>
      </>
    )
  }
  
  export default Star