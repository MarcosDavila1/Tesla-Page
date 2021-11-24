import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);


    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="Logo Tesla" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
            </RightMenu>
            <TheMenu onClick={() => setBurgerStatus(true)}>
                    <a href="#">Menu</a>
            </TheMenu>
            <BurguerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
            </BurguerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 150px;

    a {
        font-weight: 500;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    a:hover {
        border-radius: 100px;
        background: rgba(50,50,50, 0.1);
        transition: 0.4s;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    a {
        font-weight: 500;
        margin-right: 10px;
        padding: 0 10px;
    }
    a:hover {
        border-radius: 100px;
        background: rgba(50,50,50, 0.1);
        transition: 0.4s;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const TheMenu = styled.div`
    a {
        font-weight: 500;
        margin-right: 10px;
        padding: 0 10px;
    }
    a:hover {
        border-radius: 100px;
        background: rgba(50,50,50, 0.1);
        transition: 0.4s;
    }
`;

const BurguerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 10px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 500;
        }

        :hover {
        border-radius: 10px;
        background-color: rgb(240, 240, 240);
        transition: 0.4s;
    }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;

    :hover {
        border-radius: 200px;
        background-color: rgb(240, 240, 240);
        transition: 0.4s;
    }
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
