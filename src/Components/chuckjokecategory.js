import React from 'react';

class ChuckjokesCategory extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.key = props.id;
    //     this.item = props.item;

    // }

    render() {

        return (
            <li>
                <button value={this.props.item} onClick={this.props.onClick}>{this.props.item}</button>
            </li>
        );
    }
}

export default ChuckjokesCategory;