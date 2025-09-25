function Send({ onClick, children}) {
    return (
      <>
          <div className="sendSelection">
          <button className="pageButton" onClick={()=>onClick()}> {children}</button>
          </div>
          
      </>
    )
  }
  export default Send