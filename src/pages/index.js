// Import Redux
import { connect } from 'react-redux';

// Import Components
import Page from '../components/template/page';
import Hero from '../components/organisms/hero';
import Movies from '../components/organisms/movies';
import Devices from '../components/organisms/devices';
import Footer from '../components/organisms/footer';
import Modal from '../components/organisms/modal';

const Home = ({ modalStatus }) => (
  <Page>
    <Hero />
    <Movies />
    <Devices />
    <Footer />
    {
      modalStatus &&
        <Modal />
    }
  </Page>
);

function mapStateToProps (state) {
  const { modalStatus } = state
  return { modalStatus }
}

export default connect(mapStateToProps)(Home)