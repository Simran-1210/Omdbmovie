import React from "react";
import "./nominationRow.scss";
import ButtonClose from "../../ui/ButtonClose/ButtonClose";
import imagePlaceholder from "./movie-placeholder.jpg";

const NominationRow = (props) => {
  //   console.log(props.delay);
  const imgRender = props.img === "N/A" ? imagePlaceholder : props.img;

  let updatedGeneres = null;
  let propsArray = props.genres.split(" ");

  // Shortens generes to 3 items
  if (propsArray.length > 3) {
    updatedGeneres = propsArray.splice(0, 3).join(" ").slice(0, -1);
  } else {
    updatedGeneres = props.genres;
  }

  return (
    <div
      className={`nom-row__wrapper 
        ${props.delayNominationAnimation ? "nom-row__wrapper--delay" : "nom-row__wrapper--active"}`}
      style={{ "--delay": props.delay }}
    >
      <div className="nom-row__number">
        <p>{props.movieIndex}</p>
      </div>

      <img
        src={imgRender}
        className={`nom-row__img ${props.delayNominationAnimation ? "nom-row__img--delay" : "nom-row__img--active"}`}
        alt={`${props.title} poster`}
      />

      <div className="nom-row__body-wrapper">
        <div className="nom-row__movie-details">
          <h3 title={props.title} className="nom-row__title">
            {props.title}
          </h3>

          <div className="npm-row__meta-info">
            <a
              className="nom-row__imdb-link"
              href={`https://www.imdb.com/title/${props.imdbID.replace(/['"]+/g, "")}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                width="30"
                height="14"
                viewBox="0 0 30 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2861 0H1.71394C0.769854 0 0 0.734401 0 1.63501V12.365C0 13.2656 0.769854 14 1.71394 14H28.2861C29.2301 14 30 13.2656 30 12.365V1.63501C30 0.734401 29.2301 0 28.2861 0Z"
                  fill="#E6B91E"
                />
                <path
                  d="M6.53976 2.96471H4.31934V11.132H6.53976V2.96471Z"
                  fill="#010101"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2764 2.96468L10.7618 6.7797L10.4458 4.70405C10.3485 4.03922 10.2634 3.45557 10.1784 2.96082H7.29749V11.132H9.24238L9.25048 5.73994L10.069 11.132H11.4547L12.2367 5.62012L12.2408 11.1281H14.1816V2.96468H11.2764Z"
                  fill="#010101"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6337 11.1319C18.1645 11.1319 18.5616 11.1048 18.829 11.0507C19.0883 10.9966 19.3152 10.9 19.4935 10.757C19.6718 10.6178 19.8014 10.4246 19.8703 10.1772C19.9432 9.93367 19.9878 9.44279 19.9878 8.70839V5.84423C19.9878 5.07118 19.9554 4.55323 19.9108 4.29039C19.8622 4.02756 19.7366 3.78791 19.5381 3.57532C19.3436 3.36273 19.0518 3.20812 18.675 3.11149C18.2982 3.01486 17.6742 2.96848 16.6005 2.96848H14.9432V11.1319H17.6337ZM17.6539 4.43727C17.739 4.48366 17.7998 4.56096 17.8241 4.66532C17.8484 4.76969 17.8606 5.00547 17.8606 5.37267V8.53445C17.8606 9.07945 17.8241 9.41186 17.7471 9.53555C17.6742 9.65924 17.4797 9.71722 17.1596 9.71722V4.36383C17.4027 4.36383 17.5688 4.38703 17.6539 4.43727Z"
                  fill="#010101"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.7415 2.96471V11.132H22.7431L22.8849 10.6141C23.0632 10.8228 23.2617 10.9774 23.4805 11.0856C23.6993 11.19 24.0235 11.2402 24.2787 11.2402C24.6272 11.2402 24.9351 11.1552 25.1863 10.9735C25.4457 10.7996 25.6077 10.5909 25.6726 10.3512C25.7415 10.1116 25.7779 9.74437 25.7779 9.25735V6.96525C25.7779 6.4705 25.7698 6.14968 25.7455 5.99894C25.7252 5.84819 25.6523 5.69358 25.5429 5.5351C25.4254 5.37663 25.2633 5.25294 25.0486 5.1679C24.8298 5.08287 24.5745 5.03649 24.2787 5.03649C24.0275 5.03649 23.6993 5.08287 23.4765 5.18337C23.2617 5.28 23.0632 5.42301 22.8849 5.62014V2.96471H20.7415ZM23.6345 9.15299C23.6345 9.54338 23.6142 9.79849 23.5737 9.90285C23.5332 10.0072 23.3549 10.0575 23.2171 10.0575C23.0834 10.0575 22.9983 10.0111 22.9538 9.90671C22.9133 9.80622 22.8889 9.57817 22.8889 9.2187V7.06188C22.8889 6.69082 22.9092 6.4589 22.9457 6.36614C22.9862 6.27337 23.0753 6.22699 23.2009 6.22699C23.3387 6.22699 23.521 6.2811 23.5656 6.38546C23.6102 6.49369 23.6345 6.71787 23.6345 7.06188V9.15299Z"
                  fill="#010101"
                />
              </svg>
            </a>

            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.58163 0.927066C4.88098 0.00575554 6.18439 0.00575715 6.48374 0.927068L7.10428 2.8369C7.23816 3.24892 7.62211 3.52788 8.05534 3.52788H10.0635C11.0322 3.52788 11.435 4.7675 10.6512 5.3369L9.02664 6.51724C8.67615 6.77188 8.5295 7.22325 8.66337 7.63527L9.28391 9.5451C9.58326 10.4664 8.52878 11.2325 7.74507 10.6631L6.12047 9.4828C5.76998 9.22815 5.29539 9.22815 4.9449 9.4828L3.3203 10.6631C2.53659 11.2325 1.48211 10.4664 1.78146 9.5451L2.402 7.63527C2.53588 7.22325 2.38922 6.77188 2.03873 6.51724L0.414131 5.3369C-0.369583 4.7675 0.0331944 3.52788 1.00192 3.52788H3.01003C3.44326 3.52788 3.82721 3.24892 3.96109 2.8369L4.58163 0.927066Z"
                fill="#008060"
              />
            </svg>
            <p className="npm-row__meta-text">
              {`${props.imdbRating}   •  ${props.runtime}`}
            </p>
            <h4>{updatedGeneres}</h4>
          </div>
        </div>
        <div className="buttonCloseContainer">
          <ButtonClose remove={props.remove} />
        </div>
      </div>
    </div>
  );
};

export default NominationRow;
