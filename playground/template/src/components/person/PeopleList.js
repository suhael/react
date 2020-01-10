import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {deletePerson} from "../../redux/actions/personActions";

const PeopleList = ({people, deletePerson}) =>
    <>
    {(people.length === 0) ?
        <p>No People Listed</p> :
        <table className="table">
        <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Author</th>
          <th>delete</th>
        </tr>
        </thead>
        <tbody>
        {people.map(person =>
              <tr key={person.id}>
                <td>
                  <Link to={"/person/" + person.id}>{person.id}</Link>
                </td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td><button onClick={() => deletePerson(person)}>delete</button></td>
              </tr>
        )}
        </tbody>
    </table>
    }
    </>

PeopleList.propTypes = {
  people: PropTypes.array,
  deletePerson: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

const mapDispatchToProps = {
  deletePerson
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleList);
