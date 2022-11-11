import React from "react";

class App extends React.Component{
    state = {date: new Date()}
    render() {
      return(
        <div className="date">
          <p>{this.state.date.toLocaleString()}</p>
        </div>
      )
    }
  }

  export default App