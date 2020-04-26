import React from 'react';
import ChuckjokesCategory from './chuckjokecategory';

class ChuckjokesCategoryList extends React.Component {
    
    constructor(params){
        super(params);
        this.params=params;
    }
    
    render() {
        
        let renderReturn = this.params.categories.map((item, i) => (
           <ChuckjokesCategory key={i} item={item} onClick={this.params.onClick} />
        ));

        return (
            <ul className="menu">
                {renderReturn}
            </ul>
        )
    }
};

export default ChuckjokesCategoryList;