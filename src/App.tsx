import React, { Component } from 'react';
import BookBorrowApi from './api/BookBorrowApi';
import MockApi from './api/MockApi';
import BookList from './components/BookList';
import {
  WithStyles,
  withStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  app: {
    textAlign: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
}

class App extends Component<Props> {
  private api: BookBorrowApi = new MockApi;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <BookList books={this.api.getBooks()}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
