import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Form from '../../../layout/styled-components/form/form'
import Button from '../../../layout/styled-components/form/button'
import Error from '../../../layout/styled-components/form/error'
import inputText from '../../../layout/styled-components/form/inputText'

class GithubForm extends React.Component {

  render() {
    const {handleSubmit, submitting, error} = this.props;

    return (
      <Form>
        { !!error && <Error>{error}</Error> }
        <Field
          name="term"
          component={inputText}
          type="text"
          placeholder="Filter by Message"
          label='Filter:' />
        <Button onClick={handleSubmit} disabled={submitting}>
          <i className="fa fa-search" />
        </Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'commitsForm'
})(GithubForm)