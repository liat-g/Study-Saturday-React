import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Main extends React.Component{
constructor(props){
super(props)
this.state = {
students: [], //this is the inital state
}
}

componentDidMount () { //this is not asyncronous
this.getStudents(); //we are referrencing the component itself with the get keyword
}
async getStudents(){ //wrote an async function to call the db
    try{
    const {data} = await axios.get('/student') //this is the route and fetched the students axios grabs data from the bakends
    this.setState({
        students: data
    })
}catch(e){
    console.log(e, "oopsie!");
}
}

render(){
return(
    <div><table><tbody>
        {this.state.students.map((student) =>{ //need to name array elements unique names
        return (
            <tr key={student.id}><td>
            {student.fullName} 
            </td></tr>
        )}
        )}
        
       </tbody> </table> </div>
)}
}
