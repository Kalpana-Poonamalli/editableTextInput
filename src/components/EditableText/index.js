import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {isSave: false, inputValue: ''}

  onButtonClick = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  onInputChange = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {isSave, inputValue} = this.state

    const saveButton = isSave ? 'Edit' : 'Save'

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="inner-conatainer2">
            {isSave ? (
              <p className="para">{inputValue}</p>
            ) : (
              <input
                type="text"
                className="input"
                onChange={this.onInputChange}
                value={inputValue}
              />
            )}
            <button
              type="button"
              className="button"
              onClick={this.onButtonClick}
            >
              {saveButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
