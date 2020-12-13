import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
        to="/"> Deep Kumar</Link>} scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/aboutme">AboutMe</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}
        to="/"> Deep Kumar</Link>}>
              <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
  );
}

export default App;
