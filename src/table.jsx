import React,{ Component} from 'react';  

import './table.css';


class Table extends Component {

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           students: [
              { id: 1, platform: 'Wasif', last_trade_price: 21, buysell: '12345/56789' , diffrence:'8.18%', savings:'9,87,654'},
              { id: 2, platform: 'Ali', last_trade_price: 19, buysell: '12345/56789', diffrence:'8.18%', savings:'9,87,654' },
              { id: 3, platform: 'Saad', last_trade_price: 16, buysell: '12345/56789' , diffrence:'8.18%', savings:'9,87,654'},
              { id: 4, platform: 'Asad', last_trade_price: 25, buysell: '12345/56789', diffrence:'8.18%', savings:'9,87,654' },
              { id: 5, platform: 'Asad', last_trade_price: 25, buysell: '12345/56789', diffrence:'8.18%', savings:'9,87,654' }
           ]
        }
     }
     renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, platform, last_trade_price, buysell, diffrence, savings } = student //destructuring
           return (
              <tr key={id} className="trr">
                 <td>{id}</td>
                 <td>{platform}</td>
                 <td>{last_trade_price}</td>
                 <td>{buysell}</td>
                 <td>{diffrence}</td>
                 <td>{savings}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div className="tablee">
              <table id='students'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }  
  }

  export default Table;