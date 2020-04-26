import React, { Component } from 'react';
import './App.css';
import CourseList from './components/courselist';
import CourseForm from './components/cousreform';

class App extends Component {
  state = {
    courses: [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JavaScript'}
    ],
    current: ''
  }
onChangeHandler = (e) => {
  this.setState({
    current: e.target.value
  })
}
SubmitHandler = (e) => {
  e.preventDefault();
  let courses = this.state.courses;
  let current = this.state.current;
  courses.push({name: current});
  this.setState ({
    courses,
    current: ''
  })
}
deleteCourse = (index) => {
  let courses = this.state.courses;
  courses.splice(index, 1)
  this.setState ({
    courses
  })
}
editCourse = (index, value) => {
  let {courses} = this.state;
  let course = courses[index];
  course['name'] = value;
  this.setState ({
    courses
  })
}
render () {
  const {courses} = this.state;
  const courseList = courses.map( (course, index) => {
    return <CourseList det={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse}/>
  })
  return (
    <div className="App">
      <h2>Course List App</h2>
      <CourseForm onChangeHandler = {this.onChangeHandler} SubmitHandler = {this.SubmitHandler} current = {this.state.current} deleteCourse = {this.deleteCourse}/>
      { this.state.courses.length  > 0 ? courseList : <p>There Is No Courses To Show</p> }
    </div>
  );
}
}

export default App;
