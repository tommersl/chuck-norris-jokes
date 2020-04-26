import React from 'react';

class ChuckjokesCategoryDisplay extends React.Component {

    render() {
        console.log(this.props);
        return (
            this.props.categoryDisplay ? (
                <h3>{this.props.joke}</h3>
            ) : <h3>Chuck Norris</h3>
        )
    }

}

export default ChuckjokesCategoryDisplay;