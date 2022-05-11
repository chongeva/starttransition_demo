import React from 'react';

export const Results = ({ results, prefix }) => {
    return (
        <div className="SearchResult">
            {results &&
                results.map((result, index) => {
                    return (
                        <div key={prefix + '-' + index}>
                            <div>
                                {index + 1}. {result}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
