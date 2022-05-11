import { useState, useEffect, startTransition } from 'react';
import { generateDummyResults } from './utils';
import { Results } from './components/Results';
import './App.css';

function App() {
  const [dummyResults, setDummyResults] = useState();
  const [dummyResultsCount, setDummyResultsCount] = useState(100000);
  const [searchResultWithST, setSearchResultWithST] = useState();
  const [searchResultWithoutST, setSearchResultWithoutST] = useState();
  const [searchResultWithSetTimeout, setSearchResultWithSetTimeout] = useState();

  useEffect(() => {
    if (dummyResultsCount) {
      const generatedDummyResults = generateDummyResults(dummyResultsCount);
      setDummyResults(generatedDummyResults);
    }
  }, [dummyResultsCount]);

  const handleChange = (searchValue: string, updateFn: () => void) => {
    if (searchValue === '') {
      updateFn(null);
      return;
    }

    const filteredResult = dummyResults.filter((address) => {
      const lowercaseAddress = address.toString().toLowerCase();
      const lowercaseSearch = searchValue.toString().toLowerCase();
      return lowercaseAddress.startsWith(lowercaseSearch);
    });

    updateFn(filteredResult);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React.startTransition</h1>
        <div>
          <div>Dataset count:</div>
          <div>
            <input
              type="number"
              min="1"
              value={dummyResultsCount}
              onChange={(e) => {
                const value = e.target.value ? parseInt(e.target.value) : 0;
                startTransition(() => {
                  setDummyResultsCount(value);
                });
              }}
            ></input>
          </div>
        </div>
        {/* Search section */}
        <div className="SearchEngineComparison">
          {/* Left: with startTransition */}
          <div className="SearchEngine">
            <div className="SearchEngineHeader">With</div>
            <div className="SearchInput">
              <input
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  startTransition(() => {
                    handleChange(value, setSearchResultWithST);
                  });
                }}
              />
            </div>
            <Results results={searchResultWithST} prefix="results-with-st" />
          </div>

          {/* Middle: without startTransition */}
          <div className="SearchEngine">
            <div className="SearchEngineHeader">Without</div>
            <div className="SearchInput">
              <input
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  handleChange(value, setSearchResultWithoutST);
                }}
              />
            </div>
            <Results results={searchResultWithoutST} prefix="results-without-st" />
          </div>

          {/* Right: with setTimeout */}
          <div className="SearchEngine">
            <div className="SearchEngineHeader">setTimeout</div>
            <div className="SearchInput">
              <input
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  setTimeout(() => {
                    handleChange(value, setSearchResultWithSetTimeout);
                  }, 0);
                }}
              />
            </div>
            <Results results={searchResultWithSetTimeout} prefix="results-with-settimeout" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
