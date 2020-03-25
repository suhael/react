import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {loadCourses} from "../../redux/actions/courseActions";

class CoursesPage extends React.Component {

  componentDidMount() {
    const { loadCourses} = this.props;
    loadCourses();
  }

  render() {
    return (
        <>
          <h2>Courses</h2>
          {this.props.courses.map(course => (
              <div key={course.title}>{course.title}</div>
          ))}
        </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

const mapDispatchToProps = {
  loadCourses
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
