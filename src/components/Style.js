
const Style = () => {
    const hiStyle={
        background: "yellow",
        color:"black",
        border:"5px solid gray"
      }
  return (
    <div>
      <h1 className="title" style={{background:"red",color:"aqua"}}>Hello World</h1>
     <p style={hiStyle}>Greetings from mars</p>
     <p className="title" >Greetings from Jupiter</p>
    </div>
  )
}

export default Style
