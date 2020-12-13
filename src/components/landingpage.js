import react, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from './circle-cropped.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={profile} alt="profile" className="profile-img" />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr/>
              <p>Java  |  Web Services  |  Spring Framework  |  React  |  Devops  |  AWS </p>
              <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/dsahu040/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/dsahu040/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
