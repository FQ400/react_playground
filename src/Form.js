import React, { Component } from 'react';

const TextField = ({ onChange, edit, value, label, className }) => {
  const isViewMode = !edit;

  return (
    <div>
      <label>{label}</label>
      <input type="text" className={className} onChange={(evt) => onChange(evt.target.value)} value={value} disabled={isViewMode}/>
    </div>
  )
};

class IntField extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.value, cls: "valid" }
  }
  onChange(value) {
    const className = this.props.validate(value) ? 'valid' : 'invalid';

    this.setState({ value, cls: className})
  }
  render() {
    const props = {
      edit: this.props.edit,
      label: this.props.label,
      onChange: this.onChange.bind(this),
      value: this.state.value,
      className: this.state.cls
    }

    return <TextField {...props}/>
  }
}

class Form extends Component {
  changeAttribute(attribute, value) {
    let newValue = Object.assign({}, this.props.value)
    newValue[attribute] = value
    console.log("form data change", newValue)
    if (this.props.onChange)
      this.props.onChange(newValue)
  }
  render(children) {
    let childrenWithProps = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        value: this.props.value[child.props.attr],
        onChange: (newValue) =>  this.changeAttribute(child.props.attr, newValue),
        edit: this.props.edit
      })
    }.bind(this));

    return (
      <form>
        {childrenWithProps}
      </form>
    )
  }
}

export {Form, IntField, TextField};
