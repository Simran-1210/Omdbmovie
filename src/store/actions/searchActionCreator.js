import * as actionTypes from "./actionTypes";
import axios from "axios";

// Removes error messages and results
export const clearResults = () => {
  return {
    type: actionTypes.SEARCH_EMPTY,
  };
};

// Lets the reducer know the search has started
export const searchStarted = () => {
  //   console.log(true);
  return {
    type: actionTypes.SEARCH_STARTED,
  };
};

// Receives the results from OMDB API Call
export const searchSucceeded = (results) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    omdbResults: results,
  };
};

// Fires if there is an error from the API
export const searchFailed = (error) => {
  //   console.log(true);
  return {
    type: actionTypes.SEARCH_FAILED,
    error: error,
  };
};

// Searches the API asynchronously
export const searchOmdb = (searchTerm, seriesToggle) => {
  return (dispatch) => {
    dispatch(searchStarted());
    // console.log(seriesToggle);

    // OMDB Movie API
    let omdbUrl = null;
    const apiKey = import.meta.env.VITE_OMDB_KEY;
    // console.log(apiKey);
    if (seriesToggle) {
      omdbUrl = `https://www.omdbapi.com/?s=${searchTerm}&type=series&apikey=${apiKey}`;
    } else {
      omdbUrl = `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${apiKey}`;
    }
    // console.log(apiKey);
    axios
      .get(omdbUrl)
      .then((res) => {
        const response = res.data;
        // console.log(response);
        if (response.Response) {
          let resultList = response.Search;

          // Checks if the results list is an array
          if (Array.isArray(resultList)) {
            // If it is more then 3 items it limits to 3
            resultList =
              resultList.length > 5 ? resultList.slice(0, 5) : resultList;

            // Loop to ensure series have an end date if it is a series only
            resultList.forEach((result) => {
              // Creates an array of the year
              let resultYearArray = result.Year.split("");

              // If there is no end date this will add a "Present"
              if (resultYearArray.length < 6 && result.Type === "series") {
                let updatedResultYear = resultYearArray.concat("Present");

                return (result.Year = updatedResultYear.join(""));
              }

              // If a movie has "-Present", this will remove it from the year
              if (resultYearArray.length > 4 && result.Type === "movie") {
                let updatedResultYear = resultYearArray.slice(0, 4);

                return (result.Year = updatedResultYear.join(""));
              }
            });
          }

          dispatch(searchSucceeded(resultList));
        } else if (res.data.Error) {
          dispatch(searchFailed(res.data.Error));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(searchFailed(error));
      });
  };
};
