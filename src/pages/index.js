// Import Redux
import { connect } from 'react-redux';

// Import Components
import Page from '../components/page';
import Header from '../components/header';
import Modal from '../components/modal';
import Filmes from '../components/filmes';

const Home = ({ modalStatus }) => (
  <Page>
    <Header />
    <Filmes />
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