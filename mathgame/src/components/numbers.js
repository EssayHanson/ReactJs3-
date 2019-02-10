import React from 'react';
// import _ from 'lodash/has'; 

const Numbers = (props) => {

    // const arrayOfNumbers = _.range(1, 9);

    return (
        <div className="card text-center">
            <div>
                {/* {arrayOfNumbers.map((number, i) => 
                    <span key={i}>{number}</span>
                    )} */}
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    );
}

export default Numbers;