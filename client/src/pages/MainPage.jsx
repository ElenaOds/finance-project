import TickersList from '../components/TickersList/TickersList';
import Footer from '../components/Footer/Footer';
import { Container, Text } from './MainPage.styled';


const MainPage = () => {
     return (
      <Container>
        <Text>Finance stock is a web-site where you can trace stocks of the most popular companies in the world using NASDAQ exchange</Text>
        <TickersList />  
        <Footer/>
      </Container>
     
    )
}

export default MainPage;