import react, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from './profile.jpg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Deep Kumar</h2>
            <img src={avatar} alt="profile"
                 style={{height: '250px'}} />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> I am student at George Mason University, pursuing MS in Computer Science.  </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true" />
                  (571) 595-2107
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fa fa-home" aria-hidden="true" />
                  Fairfax, VA
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope-square" aria-hidden="true"/>
                  <a href="mailto:dkumar7@gmu.edu">dkumar7@gmu.edu</a>
                </ListItemContent>
              </ListItem>
            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
