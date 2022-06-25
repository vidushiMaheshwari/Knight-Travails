import React, {Component} from 'react';

class Marker extends Component {

    state= {
        index: [],
        number: ' '
    }

    render() {
        return(
            <div style={{
                "display": "flex",
                "width": this.props.radius,
                "height": this.props.radius,
                "backgroundColor": this.props.backgroundColor,
                "borderRadius": "50%"
            }}>

                <p style={{
                    "margin": "auto"
                }}>
                    number
                </p>

            </div>
        );
    }

}

export default Marker;