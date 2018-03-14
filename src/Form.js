import React, { Component } from 'react';

const TextField = ({ onChange, edit, value }) => {
  const isViewMode = !edit;

  return (
    <div>
      <input type="text" onChange={(evt) => onChange(evt.target.value)} value={value} disabled={isViewMode}/>
    </div>
  )
};

class IntField extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.value, cls: "valid" }
  }
  onChange(e) {
    console.log("event", e)
    if (e.target.value.match(/^ *\d* *$/)) {
      this.setState({value: e.target.value, cls: "valid"})
      if (this.props.onChange)
        this.props.onChange(parseInt(e.target.value))
    }
    else
    {
      this.setState({value: e.target.value, cls: "invalid"})
    }
  }
  render() {
    const isViewMode = !this.props.edit;

    return (
      <div>
        <input type="text" className={this.state.cls} onChange={this.onChange.bind(this)} value={this.state.value} disabled={isViewMode}/>
      </div>
    )
  }
}

class Form extends Component {
  renderFormField(field) {
    return (
      <div>
        <label>{field.props.label}</label>
        {field}
      </div>
    )
  }
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
        {React.Children.map(childrenWithProps, (child) => { return this.renderFormField(child) } ) }
      </form>
    )
  }
}

export {Form, IntField, TextField};
