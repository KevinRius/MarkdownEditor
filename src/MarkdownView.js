import React, {Component} from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import marked from 'marked';

class MarkdownView extends Component {
    state = {
        content: ''
    }
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Markdown Preview</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText dangerouslySetInnerHTML={{__html: marked('# Marked in the browser\n\nRendered by **marked**.')}}></CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MarkdownView;