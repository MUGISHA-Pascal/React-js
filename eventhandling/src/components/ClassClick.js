// import React, { Component } from 'react'

// export class ClassClick extends Component {
//   render() {
//     function ClassClick(){
//         console.log("class click")
//     }
//     return (
//       <div>
//         <button onClick={ClassClick}>Class Click</button>
//       </div>
//     )
//   }
// }

// export default ClassClick
import React, { Component } from 'react'

export class ClassClick extends Component {
ClassClick(){
        console.log("class click")
    }
  render() {
    return (
      <div>
        <button onClick={this.ClassClick}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick

