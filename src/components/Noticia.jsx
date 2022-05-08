import { Link } from "react-router-dom";

const Noticia = ({ noticia }) => {
  const { author, title, description, url, urlToImage, publishedAt } = noticia;

  return (
    <div className="card">
      <img
        className="card__img"
        src={urlToImage}
        alt={`Nombre del autor ${author}`}
      ></img>
      <div className="card__texts">
        <h4 className="card__title">
          <a href={url} target="_blank">
            {title}
          </a>
        </h4>
        {/* <h5 className="card__author">{`Por: ${author}`}</h5> */}

        {/* <p className="card__description">{description}</p> */}

        
      </div>
      <span className="card__publishedAt">{publishedAt}</span>
    </div>
  );
};

export default Noticia;
