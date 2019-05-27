import React, {Component} from 'react';
import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import marked from 'marked';

class MarkdownView extends Component {
    state = {
        content: ''
    }
    render() {
        return (
            <div>
                <Card className="shadow h-100">
                    <CardBody className="min-h-100">
                        <CardTitle>Markdown Preview</CardTitle>
                        <CardText dangerouslySetInnerHTML={{__html: marked(this.props.textIn)}} className="border"></CardText>
                        <Row>
                            <Button color="primary" className="mx-5" onClick={this.props.copy}>Copy</Button>
                            <Button color="primary" onClick={this.props.clear}>Clear</Button>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MarkdownView;