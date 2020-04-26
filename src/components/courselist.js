import React, { Component } from 'react'

class CourseList extends Component {
    state = {
        isEdit : false
    }
    renderCourse = () => {
        return (
            <li className="course-item">
                <span>{this.props.det.name}</span>
                <button className='ed' onClick= {() => {this.toggleState()}}>Edit Course</button>
                <button className='del' onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState ({
            isEdit: !isEdit
        })
    }
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.toggleState();
    }
    renderUpdateForm = () => {
        return (
            <form className='updated' onSubmit= {this.updateCourseItem}>
                <input type="text" ref = {(v) => {this.input = v}} defaultValue={this.props.det.name}/>
                <button>Update Course</button>
            </form>
        )
    }
    render() {
        let {isEdit} = this.state
        return(
            <React.Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </React.Fragment>
        )
    }
}

export default CourseList;