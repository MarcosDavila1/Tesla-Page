import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={ backgroundImg }>
            <Zoom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Zoom>
            <Buttons>
                <Zoom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { rightBtnText && 
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }
                    </ButtonGroup>
                </Zoom>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url(/images/${props.bgImage})`};
    scroll-snap-align: start;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

    :hover {
        background-color: rgba(23, 26, 32, 1);
        transition: 0.4s ease;
    }
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

    :hover {
        background-color: lightgrey;
        transition: 0.4s;
    }
`;

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`

`;