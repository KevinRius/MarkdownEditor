import React, {Component} from 'react';
import {Container, FormGroup, Label, Input} from 'reactstrap';
import MarkdownView from './MarkdownView';

const placeHolder = 
  `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)`

class MiniEditor extends Component {
  state = {
    content: placeHolder
  }
  
  handleChange = (e) => {
    this.setState({content: e.target.value});
  }
  handleClear = () => {
    this.setState({content: ''});
  }
  handleCopy = () => {
    let copyText = document.getElementById('exampleText');
    copyText.select();
    document.execCommand('copy');
  }
  render() {
    return (
      <Container className="MiniEditor mb-4">
        <FormGroup className="mt-3" style={{height: '40vh'}}>
            <Label for="exampleText" className="text-center w-100 mt-3"><h1>Markdown Editor</h1></Label>
            <div className="d-flex justify-content-center h-100 row">
              <Input type="textarea" name="text" id="exampleText" className="mt-3 w-75 h-75 shadow" onChange={this.handleChange} value={this.state.content}/>
            </div>
        </FormGroup>
        <MarkdownView textIn={this.state.content} clear={this.handleClear} copy={this.handleCopy}/>
      </Container>
    );
  }
}

export default MiniEditor;