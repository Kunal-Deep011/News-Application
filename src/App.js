import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setCurrentPage } from './newsSlice';
import { addFavorite, removeFavorite } from './favoritesSlice';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import noImage from './assets/no-image.jpg';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.articles);
  const newsStatus = useSelector((state) => state.news.status);
  const newsError = useSelector((state) => state.news.error);
  const totalPages = useSelector((state) => state.news.totalPages);
  const currentPage = useSelector((state) => state.news.currentPage);
  const favorites = useSelector((state) => state.favorites);

  const [searchTerm, setSearchTerm] = useState('latest');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState(null);
 
  useEffect(() => {
      dispatch(fetchNews({ example: searchTerm}));   
  }, [dispatch, searchTerm]);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);
  
  const handleAddFavorite = (article) => {
    const isAlreadyFavorite = favorites.some(fav => fav.url === article.url);
    if(isAlreadyFavorite){
      setDuplicateMessage(article.url);
      setTimeout(() => setDuplicateMessage(null), 2000); // Clear message after 3 seconds
      return;
    }
    dispatch(addFavorite(article));
  };

  const handleRemoveFavorite = (article) => {
    dispatch(removeFavorite(article));
    setDuplicateMessage(null);
  };

 const handlePageChange = (page) => {
  dispatch(setCurrentPage(page));
};

const toggleTheme = () => {
  setIsDarkTheme((prevTheme) => !prevTheme);
};

const paginatedArticles = news.slice((currentPage - 1) * 3, currentPage * 3);

  return (
    <div className="App">
      <header>
        <div className='headerBox'>
            <div className='hb1'><h1>News</h1></div>
            <div className='hb2'><h1>App</h1></div>
        </div>
        <div className='inputBox'>
          <label className="theme-switch">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <input
          className='searchInput'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search news...             ⌕"
          />
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
        {newsStatus === 'loading' && <Loading/>}
        {newsStatus === 'failed' && <p className='errorMessage'>Error: {newsError}</p>}
        {newsStatus === 'succeeded' && (
         <div className='news-list'>
         
             {paginatedArticles.map((article) => (
                <div key={article.url} className="news-item">
                  <div className='nw1'>
                    <div>{article.title}</div>
                  </div>
                  <div className='nw2'>
                    <div className='c2b1'>
                       <p className='desc'>{article.description && article.description.length > 200 ?
                       article.description.slice(0,200).trim()+ '...' : article.description}</p>
                       <p className='datePara'>Published At : {article.publishedAt}</p>
                       <a href={article.url}>Detailed View</a>
                    </div>
                    <div className='c2b2'>
                       {
                          article.image === null ? 
                          <img src={noImage} alt="..."/>
                          : 
                          <img src={article.image} alt="..."/>
                        }
                    </div>
                    <div className='c2b2-button article-actions'>

                      <button className={favorites.some(fav => fav.url === article.url) ? 'btn favorited' : 'btn btn-primary'} onClick={() => handleAddFavorite(article)}>Add to Favorites ★</button>

                      {duplicateMessage === article.url && (
                        <span className="duplicate-message">This article is already in your favorites.</span>
                      )}

                    </div>
                  </div>
                </div>
              ))}
         </div> 
         )}

        {
             (newsStatus === 'failed' && <p className='errorMessage'>Error: {newsError}</p>) ?
              <div></div>
             :
             (
                  <div className="pagination pagination-controls">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={currentPage === index + 1 ? 'active' : ''}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
             ) 
        }
      </main>

      <aside>
            <h2>Favorites ★</h2>
            <div className="favorites-list">
              {favorites.map((article) => (
                <div key={article.url} className="favorite-item">
                  <h3>{article.title}</h3>
                  <p>{article.description && article.description.length > 100 ?
                           article.description.slice(0,100).trim()+ '...' : article.description}</p>
                           <p className='datePara'>Published At : {article.publishedAt}</p>
                  <p className='f2p'><a href={article.url}>Detailed View</a> <button className="btn btn-danger" onClick={() => handleRemoveFavorite(article)}>X</button></p>
                  
                </div>
              ))}
            </div>
       </aside>
    </div>
  );
}

export default App;
