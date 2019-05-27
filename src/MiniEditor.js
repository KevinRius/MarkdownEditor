import React from 'react';
import {Row, Container, FormGroup, Label, Input} from 'reactstrap';
import MarkdownView from './MarkdownView';

function MiniEditor() {
  return (
    <Container className="MiniEditor vh-100" style={{background: 'grey'}}>
      <Row className="h-25">
        <FormGroup className="w-50 text-center">
            <Label for="exampleText" className="">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" className="h-75" />
        </FormGroup>
      </Row> 
      <row>
        <MarkdownView />
      </row>
    </Container>
  );
}

export default MiniEditor;
