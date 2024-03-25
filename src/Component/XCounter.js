import React from 'react'
import styles from "./styles.module.css"

export default class XCounter extends React.Component {
    constructor()
    {
        this.state={c:0}
    }
  render()
  {
    return (<div className={styles.container}>
       
            <h1 className={styles.counterHeading}>Counter App</h1>
            <p className={styles.counterDisplay}>Count: {this.state.c}</p>
            <div className={styles.btn}>
                <button onClick={()=>this.setState({c:this.state.c+1})}>Increment</button>
                <button onClick={()=>{
                    this.setState({c:this.state.c-1})
                }}>Decrement</button>
            </div>
      
    </div>
  )
            }
}
