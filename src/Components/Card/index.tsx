import { Container, Content, Etherium, Image, Paragraph, Profilepic, Time, Title } from "./style";
import NFT_Logo from "../../assets/image-equilibrium.jpg";
import Eth from "../../assets/icon-ethereum.svg";
import Clock from "../../assets/icon-clock.svg";
import Profile from "../../assets/image-avatar.png";


export function Card()
{
    return(
        <Container>
            <Image src={NFT_Logo}/>
            <Title>Equilibrium #3429</Title>
            <Paragraph>Our Equilibrium collection promotes balance and calm.</Paragraph>
            <Content>
               <div><img src={Eth} alt="etherium logo" /><Etherium>0.041 ETH</Etherium></div> 
               <div><img src={Clock} alt="clock logo" /><Time>3 days left</Time></div> 
            </Content>
            <hr/>
            <Profilepic src={Profile} alt="profile picture"></Profilepic>
             <span className="creation">Creation of</span> <span className="name">Jules Wyvern</span>
        </Container>
    );
}