export function renderMarkup( hits,  container) {
    const markup = hits.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
   return  `<a class="card" href=${largeImageURL}>
    <div class="photo">
    <div class="img-block">
    <img class="img-card" src=${webformatURL}  alt='${tags}' loading="lazy" width=300/>
    <div class="list-info">
      <p class="info-block">
        <b>Likes: ${likes}</b>
      </p>
      <p class="info-block">
        <b>Views: ${views}</b>
      </p>
      <p class="info-block">
        <b>Comments: ${comments}</b>
      </p>
      <p class="info-block">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
    </div>
  </div>
  </a>
          `
      }).join('');
      container.insertAdjacentHTML("beforeend", markup);
  }