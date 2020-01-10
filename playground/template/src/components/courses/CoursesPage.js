import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CoursesPage = ({courses}) => {
  return (
      <>
        <h2>Courses</h2>
        {courses.map(course => (
            <div key={course.title}>{course.title}</div>
        ))}
      </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(
    mapStateToProps,
    null
)(CoursesPage);
