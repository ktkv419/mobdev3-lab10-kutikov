import "./MovieDetails.css"

const MovieDetails = () => {
    return (
        <div class="container">
            <a href="#" class="back-button">← Back to Search</a>

            <div class="movie-detail-card">
                <div class="movie-header">
                    <div class="poster-section">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Joker"
                            class="poster-image" />
                        <div class="rating-badge">⭐ 8.3</div>
                    </div>

                    <div class="info-section">
                        <h1 class="movie-title">Joker</h1>
                        <div class="movie-tagline">
                            <span class="tag">2019</span>
                            <span class="tag rated">R</span>
                            <span class="tag">122 min</span>
                            <span class="tag">Crime, Drama, Thriller</span>
                        </div>

                        <div class="movie-meta">
                            <div class="meta-item">
                                <span class="meta-label">Released:</span>
                                <span class="meta-value">04 Oct 2019</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">Language:</span>
                                <span class="meta-value">English, German</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">Country:</span>
                                <span class="meta-value">
                                    United States, Canada, Australia
                                </span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">IMDb ID:</span>
                                <span class="meta-value">tt7286456</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="movie-body">
                    <div class="section">
                        <h2 class="section-title">Plot Summary</h2>
                        <p class="plot-text">
                            Arthur Fleck, a party clown and a failed stand-up
                            comedian, leads an impoverished life with his ailing
                            mother. However, when society shuns him and brands
                            him as a freak, he decides to embrace the life of
                            chaos in Gotham City.
                        </p>
                    </div>

                    <div class="section">
                        <h2 class="section-title">Cast & Crew</h2>
                        <div class="info-grid">
                            <div class="info-box">
                                <div class="info-box-title">Director</div>
                                <div class="info-box-content">
                                    Todd Phillips
                                </div>
                            </div>
                            <div class="info-box">
                                <div class="info-box-title">Writer</div>
                                <div class="info-box-content">
                                    Todd Phillips, Scott Silver, Bob Kane
                                </div>
                            </div>
                            <div class="info-box">
                                <div class="info-box-title">Actors</div>
                                <div class="info-box-content">
                                    Joaquin Phoenix, Robert De Niro, Zazie Beetz
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-title">Ratings & Reviews</h2>
                        <div class="ratings-container">
                            <div class="rating-box">
                                <div class="rating-source">
                                    Internet Movie Database
                                </div>
                                <div class="rating-value">8.3/10</div>
                            </div>
                            <div class="rating-box">
                                <div class="rating-source">Rotten Tomatoes</div>
                                <div class="rating-value">68%</div>
                            </div>
                            <div class="rating-box">
                                <div class="rating-source">Metacritic</div>
                                <div class="rating-value">59/100</div>
                            </div>
                        </div>

                        <div class="awards-box">
                            <div class="awards-icon">🏆</div>
                            <div class="awards-text">
                                Won 2 Oscars. 120 wins & 246 nominations total
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-title">Box Office & Statistics</h2>
                        <div class="box-office-section">
                            <div class="box-office-card">
                                <div class="box-office-label">Box Office</div>
                                <div class="box-office-value">$335.5M</div>
                            </div>
                            <div class="box-office-card">
                                <div class="box-office-label">IMDb Votes</div>
                                <div class="box-office-value">1,637,986</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails