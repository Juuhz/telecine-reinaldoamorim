// Import Redux
import { connect } from 'react-redux';

// Import Components
import Page from '../components/page';
import Header from '../components/header';
import Modal from '../components/modal';
import Filmes from '../components/filmes';
import Dispositivos from '../components/dispositivos';
import Footer from '../components/footer';

const Home = ({ modalStatus }) => (
  <Page>
    <Header />
    <Filmes />
    <Dispositivos />
    <Footer />
    {/* {
      modalStatus &&
        <Modal />
    } */}
  </Page>
);

function mapStateToProps (state) {
  const { modalStatus } = state
  return { modalStatus }
}

export default connect(mapStateToProps)(Home)