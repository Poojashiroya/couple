import { AnimatedBgContainer, Content, Description, ImgContainer, RoundImage, Title} from "./index.styles";
import Images from "../../assets/Images";

const AnimatedBg = () => {
    return (
        <AnimatedBgContainer>
            <ImgContainer>
             <RoundImage src={Images.Profile} alt="pooja" />
             <RoundImage src={Images.ZalakProfile} alt="zalak"/>
            </ImgContainer>
            <Content>
                <Title>MORE THAN I SHOULD</Title>
                <Description>A story about falling in and out of love</Description>
            </Content>
        </AnimatedBgContainer>
    )
}

export default AnimatedBg;