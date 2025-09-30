import "./Search.css"

const Search = () => {
    return (
        <div class="container">
            <div class="header">
                <h1>🎬 Movie Search Results</h1>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search for movies..." value="Joker" />
                        <button class="search-button">Search</button>
                </div>
                <div class="results-info">
                    Total Results: 201 | Showing: 10 movies
                </div>
            </div>

            <div class="movie-grid">
                {/* <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg" alt="Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2019</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt7286456</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_SX300.jpg" alt="Joker: Folie à Deux">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Joker: Folie à Deux</div>
                        <div class="movie-meta">
                            <span class="movie-year">2024</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt11315808</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg" alt="Batman Beyond: Return of the Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Batman Beyond: Return of the Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2000</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt0233298</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BMjE0NjIxODMxN15BMl5BanBnXkFtZTcwMjM5MDcxOA@@._V1_SX300.jpg" alt="Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2012</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt1918886</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BODAwNWQ1ZjgtZTRiOC00MTcwLTg2ZjEtNjRhNzI5ODFkZjNlXkEyXkFqcGc@._V1_SX300.jpg" alt="Mera Naam Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Mera Naam Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">1970</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt0066070</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BNWEzNDBiNzItMDQwMy00ZDAwLWExOGUtNDJhNGYwNjA2OTJlXkEyXkFqcGc@._V1_SX300.jpg" alt="Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2021–2024</span>
                            <span class="movie-type">series</span>
                        </div>
                        <div class="movie-id">IMDb: tt16409108</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTg3NzU5Mzg1MF5BMl5BanBnXkFtZTgwODIxMDg4MDI@._V1_SX300.jpg" alt="Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2016</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt5611648</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BMjU0MzBkNTctNjUyOC00YTU3LTg5YTctNDA1ZGE0NzI3MDIzXkEyXkFqcGc@._V1_SX300.jpg" alt="Jack & Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">Jack & Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2024–2025</span>
                            <span class="movie-type">series</span>
                        </div>
                        <div class="movie-id">IMDb: tt33054648</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BMWM5NTEyMWQtZmZiYS00NDJjLThlNGUtNTMyNTA0NjA0Yjk5XkEyXkFqcGc@._V1_SX300.jpg" alt="The Joker Is Wild">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">The Joker Is Wild</div>
                        <div class="movie-meta">
                            <span class="movie-year">1957</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt0050569</div>
                    </div>
                </div>

                <div class="movie-card">
                    <div class="poster-container">
                        <img src="https://m.media-amazon.com/images/M/MV5BZTA2YWYxYWUtODA3Ni00MTI4LTkxYjktMDQ2M2M3MzZmZGU4XkEyXkFqcGc@._V1_SX300.jpg" alt="The People's Joker">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">The People's Joker</div>
                        <div class="movie-meta">
                            <span class="movie-year">2022</span>
                            <span class="movie-type">movie</span>
                        </div>
                        <div class="movie-id">IMDb: tt21651430</div>
                    </div>
                </div> */}

            </div>
        </div>

    )
}

export default Search