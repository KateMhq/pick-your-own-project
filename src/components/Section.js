import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/components/Section.scss';

class Section extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){

    this.props.receiver(this.props.subject);

  }

  render(){
    return(
      <Card className="sectionCard" onClick={this.handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={this.props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.subject}
            </Typography>
            <Typography component="p">
              Normal
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" >
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }


}

export default Section;
