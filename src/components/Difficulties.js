import React from 'react';
import { Button, Grid, Icon, Modal } from 'semantic-ui-react';

const Difficulties = (props) => {
  return (
    <Modal open={props.open} dimmer="blurring" onClose={() => props.onCancel()}>
      <Modal.Header>Select a Level</Modal.Header>
      <Modal.Content>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button icon labelPosition={"left"} size="large" onClick={() => props.onChange('easy')} primary>
                <Icon name="bookmark"/>
                Easy
              </Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Button icon labelPosition={"left"} size="large" onClick={() => props.onChange('medium')}
                      color="green">
                <Icon name="trophy"/>
                Medium
              </Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Button icon labelPosition={"left"} size="large" onClick={() => this.props.onChange('hard')}
                      color="red">
                <Icon name="diamond"/>
                Hard
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default Difficulties;