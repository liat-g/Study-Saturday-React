import React, { Component } from 'react';
import axios from 'axios';
import StudentsList from './StudentList'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {}
    };
    this.getStudents = this.getStudents.bind(this)
  }
  componentDidMount() {
    this.getStudents();
  }

  async getStudents() { //need this to set state
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student){ //have to bind 'this' to pass it as props
      return this.setState({
          selectStudent: student,
      })
  }

 

  render() {
    <StudentsList students={this.state.students} selectStudent={this.selectStudent}/> //need to set a name to pass props
  }
}
