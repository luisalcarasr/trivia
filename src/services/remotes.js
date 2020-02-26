import {create} from "axios";
import {PEXELS_KEY, YARDEX_TRANSLATOR_KEY} from "./keys";

const questions = create({
  baseURL: 'https://opentdb.com/api.php'
});

const categories = create({
  baseURL: 'https://opentdb.com/api_category.php'
});

const translator = create({
  baseURL: 'https://translate.yandex.net/api/v1.5/tr.json',
  params: {
    key: YARDEX_TRANSLATOR_KEY
  }
});

const images = create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: PEXELS_KEY
  }
});

export {translator, questions, categories, images};