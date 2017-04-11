import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        )
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>CoursesPage</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);