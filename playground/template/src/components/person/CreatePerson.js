import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import CreatePersonForm from "./CreatePersonForm";
import { createPerson } from "../../redux/actions/personActions";
import { v4 } from 'uuid'

function CreatePerson({createPerson}) {

  function handleSave(first, last) {
    console.log("Save person")
    createPerson({id: v4(), firstName: first, lastName: last})
  }

  return (
      <CreatePersonForm onSubmit={handleSave}/>
  );

}

CreatePerson.propTypes = {
  createPerson: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
 return {

 };
}

const mapDispatchToProps = {
  createPerson
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePerson);
