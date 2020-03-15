import { YARDEX_TRANSLATOR_KEY } from "./keys";
import { translator } from "./remotes";


const translate = async (text, languageCode) => {
  if (languageCode !== 'en') {
    const response = await translator.request({
      url: 'translate',
      params: {
        key: YARDEX_TRANSLATOR_KEY,
        text: text,
        lang: `en-${languageCode}`,
      }
    });
    console.log(response);
    return response.status === 200 ? response.data.text.join('') : text;
  } else {
    return text;
  }
};

const getLanguages = async (languageCode) => {
  let languages = [];
  const response = await translator.request({
    url: 'getLangs',
    params: {
      key: YARDEX_TRANSLATOR_KEY,
      ui: `${languageCode}`,
    }
  });

  for (const code in response.data.langs) {
    if (response.data.langs.hasOwnProperty(code)) {
      const name = response.data.langs[code];
      languages.push({
        name: name,
        code: code
      });
    }
  }

  return languages;
};

export { translate, getLanguages };
