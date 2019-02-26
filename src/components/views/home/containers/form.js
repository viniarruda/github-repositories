import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Form from '../components/form'
import LogoForm from '../components/logoForm'
import Icon from '../components/icon'
import Text from '../components/text'
import Button from '../components/button'
import Error from '../components/error'
import { required } from '../../../../utils/validators'
import inputText from '../components/inputText'
import { ClipLoader } from 'react-spinners'

class GithubForm extends React.Component {

  render() {
    const {handleSubmit, submitting, error} = this.props;

    return (
      <Form>
        { !!error && <Error>{error}</Error> }
        <Field
          validate={[required]}
          name="username"
          component={inputText}
          type="text"
          placeholder="User"
          label='User:' />
        <Button onClick={handleSubmit} disabled={submitting}>
          <i className="fa fa-search" />
        </Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'githubForm'
})(GithubForm)