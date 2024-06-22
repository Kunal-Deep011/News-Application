import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setPage } from './newsSlice';
import { addFavorite, removeFavorite } from './favoritesSlice';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import noImage from './assets/no-image.jpg';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.articles);
  const newsStatus = useSelector((state) => state.news.status);
  const newsError = useSelector((state) => state.news.error);
  const totalResults = useSelector((state) => state.news.totalResults);
  const currentPage = useSelector((state) => state.news.currentPage);
  const favorites = useSelector((state) => state.favorites);

  const [searchTerm, setSearchTerm] = useState('latest');
 
  useEffect(() => {
      dispatch(fetchNews({ keyword: searchTerm, page: currentPage }));   
  }, [dispatch, searchTerm, currentPage]);

  const handleSearch = () => {
    dispatch(setPage(1));  // Reset to first page on new search
    dispatch(fetchNews({ keyword: searchTerm, page: 1 }));
  };

  const handleAddFavorite = (article) => {
    dispatch(addFavorite(article));
  };

  const handleRemoveFavorite = (article) => {
    dispatch(removeFavorite(article));
  };

  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const totalPages = Math.ceil(totalResults / 10);  // Assuming pageSize is 10

  return (
    <div className="App">
      <header>
        <div className='headerBox'>
            <div className='hb1'><h1>News</h1></div>
            <div className='hb2'><h1>App</h1></div>
        </div>
        <div className='inputBox'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search news..."
          />
          <button onClick={handleSearch}>⌕</button>
          <select className='dropdown' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      </header>
      <main>
        {newsStatus === 'loading' && <p>Loading...</p>}
        {newsStatus === 'failed' && <p>Error: {newsError}</p>}

         <div className='news-list'>
         
             {news.filter((article) => !article.title.toLowerCase().includes('[removed]')).map((article) => (
                <div key={article.url} className="news-item">
                  <div className='nw1'>
                    <div>{article.title}</div>
                  </div>
                  <div className='nw2'>
                    <div className='c2b1'>
                       <p>{article.description && article.description.length > 200 ?
                       article.description.slice(0,200).trim()+ '...' : article.description}</p>
                       <p>Published At : {article.publishedAt}</p>
                       <a href={article.url}>Detailed View</a>
                       
                    </div>
                    <div className='c2b2'>
                       {
                          article.urlToImage === null ? 
                          <img src={noImage} alt="..."/>
                          : 
                          <img src={article.urlToImage} alt="..."/>
                        }
                    </div>
                    <div className='c2b2-button'><button className="btn btn-primary" onClick={() => handleAddFavorite(article)}>Add to Favorites ★</button></div>
                  </div>
                </div>
              ))}
         </div>

        <div className="pagination-controls">
          <button className="btn btn-primary" onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button className="btn btn-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </main>
      <aside>
            <h2>Favorites ★</h2>
            <div className="favorites-list">
              {favorites.map((article) => (
                <div key={article.url} className="favorite-item">
                  <h3>{article.title}</h3>
                  <p>{article.description && article.description.length > 100 ?
                           article.description.slice(0,100).trim()+ '...' : article.description}</p>
                           <p>Published At : {article.publishedAt}</p>
                  <p className='f2p'><a href={article.url}>Detailed View</a> <button className="btn btn-danger" onClick={() => handleRemoveFavorite(article)}>X</button></p>
                  
                </div>
              ))}
            </div>
      </aside>
    </div>
  );
}

export default App;
