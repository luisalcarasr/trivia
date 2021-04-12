import { get } from 'axios';
import { chunk } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Grid } from 'semantic-ui-react';
import { getAmountByDifficulty } from '../services/trivia';
import './Categories.css';
import Category from "./Category";
import Difficulties from './Difficulties';


const Categories = ({ onChange }) => {
  const columns = 4;
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [showDifficultiesModal, setShowDifficultiesModal] = useState(false);
  const history = useHistory();

  useEffect(() => {
      setShowDifficultiesModal(!!category.name)
  }, [category])

  const cancelDifficultySelectionHandler = () => {
    setShowDifficultiesModal(false)
  }

  const changeDifficultyHandler = (selectedDifficulty) => {
    const amount = getAmountByDifficulty(selectedDifficulty);
    setShowDifficultiesModal(false)
    console.log(category);
    history.push({
      pathname: '/questions',
      search: `?difficulty=${selectedDifficulty}&category=${category.id}&amount=${amount}`
    })
  }

  const categoryChangeHandler = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  useEffect(() => {
    get('api_category.php')
      .then(response => {
        setCategories(response.data.trivia_categories);
      });
  }, []);

  return (
    <div>
      <Difficulties open={showDifficultiesModal} onCancel={cancelDifficultySelectionHandler} onChange={changeDifficultyHandler} />
      <Grid columns={columns}>
        {
          chunk(categories, columns).map(
            (group, index) => {
              return (
                <Grid.Row key={index}>
                  {
                    group.map(currentCategory => {
                      return (
                        <Grid.Column key={currentCategory.id}>
                          <Category title={currentCategory.name} onClick={() => categoryChangeHandler(currentCategory)} />
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
    </div>
  );

};

export default Categories;
