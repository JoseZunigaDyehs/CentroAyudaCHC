import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

class RichText extends Component {

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  getTexto = () => {
    document.getElementById('agregarArticulo').dataset.richtext = this.state.value.toString('html')
  }

  componentWillMount = () => {
    if(this.props.texto.length>0){
      this.state.value = RichTextEditor.createValueFromString(this.props.texto,'html');
    }
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
      <div>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        />
        <button id='agregarArticulo' className='d-none' data-richtext='' onClick={(e) => this.getTexto(e)}>Agregar</button>
      </div>
    );
  }
}

export default RichText