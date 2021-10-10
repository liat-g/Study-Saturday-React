import React from 'react';
import ReactDOM, { render } from 'react-dom';

const StudentsList = (props) =>{ //this has to match the export name
    const students = props.students;
    const test = props.students.test
render(){
    
    return (
        <div>
          <h1>Students</h1>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
              </tr>
              {props.students.map(student => {
                return (
                  <tr key={student.id}>
                      <td>  {student.fullName} </td>
                    <td onClick={() => props.selectStudent(student)}>
                        </td>
                        <td>
                            Details
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
}


}

export default StudentsList;