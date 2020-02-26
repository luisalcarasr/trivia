import React, {useEffect, useState} from "react";
import {Card, Image} from "semantic-ui-react";
import {FadeLoader} from 'react-spinners';
import {getImageByKeyword} from "../services/images";
import {translate} from "../services/translator";
import {useSelector} from "react-redux";

const LOAD_IMAGES = false;

const Category = (props) => {
  const originalTitle = props.title.split(': ').pop();
  const languageCode = useSelector(state => state.language);
  const [title, setTitle] = useState(originalTitle);
  const [photo, setPhoto] = useState();
  useEffect(() => {
    if (LOAD_IMAGES) {
      getImageByKeyword(title).then(setPhoto);
    }
  }, []);

  useEffect(() => {
    translate(originalTitle, languageCode).then(setTitle);
  });

  return (
    <Card onClick={props.onClick}>
      {
        photo
          ? <Image src={photo.src.tiny} wrapped ui={false}/>
          : <FadeLoader height={15} width={5} radius={2} margin={2} color="#4d9de0" css={{margin: '30px auto'}}/>
      }
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Category;