import React from "react";
import { AnimatedBgContainer, Content, ImgContainer, RoundImage} from "./index.styles";
import Images from "../../assets/Images";

const AnimatedBg = () => {
    return (
        <AnimatedBgContainer>
            <ImgContainer>
             <RoundImage src={Images.Profile} alt="pooja" />
             <RoundImage src={Images.ZalakProfile} alt="zalak"/>
            </ImgContainer>
            <Content>
                <h5>Title</h5>
                <p>check</p>
            </Content>
        </AnimatedBgContainer>
    )
}

export default AnimatedBg;