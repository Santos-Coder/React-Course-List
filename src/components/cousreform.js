import React from 'react';

const CourseForm = (props) => {

        return (
            <form className='crs-frm' onSubmit={props.SubmitHandler}> 
                <input required type='text' value={props.current} onChange={props.onChangeHandler} />
                <button type='submit'>Add Course</button>
            </form>
        )
    }

export default CourseForm;
