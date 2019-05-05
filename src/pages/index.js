// Import Redux
import { connect } from 'react-redux';

// Import Utils
import fetch from 'isomorphic-unfetch';

// Import Components
import Page from '../components/template/page';
import Hero from '../components/organisms/hero';
import Movies from '../components/organisms/movies';
import Devices from '../components/organisms/devices';
import Footer from '../components/organisms/footer';
import Modal from '../components/organisms/modal';

const Home = ({ data, modalStatus }) => (
  <Page>
    <Hero {...data.heroData} />
    <Movies {...data.moviesData} />
    <Devices {...data.devicesData} />
    <Footer {...data.footerData} />
    {
      modalStatus &&
        <Modal data={data.modalData} />
    }
  </Page>
);

// Trás os dados da API
Home.getInitialProps = async ({ req }) => {
  
  // Pega os dados do HOST
  let host = req ? req.headers.host : window.location.hostname;

  // Hero
  const heroFetch = await fetch(`http://${host}/static/api/hero.json`);
  const heroData = await heroFetch.json();

  // Movies
  const moviesFetch = await fetch(`http://${host}/static/api/movies.json`);
  const moviesData = await moviesFetch.json();

  // Devices
  const devicesFetch = await fetch(`http://${host}/static/api/devices.json`);
  const devicesData = await devicesFetch.json();

  // Footer
  const footerFetch = await fetch(`http://${host}/static/api/footer.json`);
  const footerData = await footerFetch.json();

  // Footer
  const modalFetch = await fetch(`http://${host}/static/api/modal.json`);
  const modalData = await modalFetch.json();

  return {
    "data": {
      heroData,
      moviesData,
      devicesData,
      footerData,
      modalData
    }
  }
}

function mapStateToProps (state) {
  const { modalStatus } = state
  return { modalStatus }
}

export default connect(mapStateToProps)(Home)