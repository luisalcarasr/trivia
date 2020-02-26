import React, {useEffect, useState} from 'react';
import {get} from 'axios';
import {chunk} from 'lodash';
import {Grid} from 'semantic-ui-react';
import './Categories.css'
import Category from "./Category";


const Categories = ({onChange}) => {
  const columns = 4;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    get('api_category.php')
      .then(response => {
        setCategories(response.data.trivia_categories);
      });
  }, []);

  return (
    <Grid columns={columns}>
      {
        chunk(categories, columns).map(
          (group, index) => {
            return (
              <Grid.Row key={index}>
                {
                  group.map(category => {
                    return (
                      <Grid.Column key={category.id}>
                        <Category title={category.name} onClick={() => onChange(category)}/>
                      </Grid.Column>
                    );
                  })
                }
              </Grid.Row>
            )
          }
        )
      }
    </Grid>
  );

};

export default Categories;
