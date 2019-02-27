import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Form from '../components/form'
import Button from '../components/button'
import Error from '../components/error'
import { required } from '../../../../utils/validators'
import inputText from '../components/inputText'

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