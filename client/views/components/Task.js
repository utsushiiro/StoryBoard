import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 20
  },
  title: {
    fontSize: 14,
  },
  date: {
    marginBottom: 20
  },
  pos: {
    marginBottom: 12,
  },
};

const Task = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography  color="textSecondary">
          {`created at ${props.createdAt}`}
        </Typography>
        <Typography component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Done</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Task);
