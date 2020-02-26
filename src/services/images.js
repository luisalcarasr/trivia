import {images} from "./remotes";
import {shuffle} from "lodash";

const getImageByKeyword = async (keyword) => {
  return images.request({
    url: 'search',
    params: {
      query: keyword,
      per_page: 10,
      page: 1
    }
  }).then(response => {
    return shuffle(response.data.photos).pop();
  });
};

export {getImageByKeyword}