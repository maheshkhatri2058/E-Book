import Banner from '../components/Banner'
import Bestsellerbook from '../components/Bestsellerbook'
import Favbooks from './Favbooks'
import Promobaner from './Promobaner'
import Review from './Review'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Bestsellerbook/>
      <Favbooks />
      <Promobaner />
      <Review/> 
    </div>
  )
}

export default Home
