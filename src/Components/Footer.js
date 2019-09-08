import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

export class Footer extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                <Button label="Close" onClick={this.onHide} />
            </div>
        );

        return (
            <div>
                <div className="footer">
                    <Button label="Dev Team" onClick={this.onClick} className="p-button-raised p-button-rounded p-button-secondary"/>
                </div>
                <div className="content-section implementation">
                    <Dialog header="Okemonpay Dev Team" visible={this.state.visible} style={{width: '60vw', height: '50vhx', marginTop: '0vh' }} footer={footer} onHide={this.onHide}>
                            <div className='pics'>
                               
                        </div>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default Footer;