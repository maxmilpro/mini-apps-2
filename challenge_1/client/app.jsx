import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Events from './components/Events.jsx';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('ritual');
  const [url, setUrl] = useState('http://localhost:3000/events?q=ritual');
  const [isError, setIsError] = useState(false);
  const [postsPerPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url);
        const data = result.data;
        const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)

        setData(slice);
        setPageCount(Math.ceil(data.length / postsPerPage));
      } catch (err) {
        setIsError(true);
      }
    }

    fetchData();
  }, [url, offset]);

  return (
    <>
      <h1>Historical Events Finder</h1>
      <Search setUrl={setUrl} query={query} setQuery={setQuery}/>

      {isError && <div>Something went wrong ...</div>}

      <Events data={data}/>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'paginate break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(event) => {
          const selectedPage = event.selected;
          setOffset(selectedPage + 1)
        }}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'paginate'}
      />
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
