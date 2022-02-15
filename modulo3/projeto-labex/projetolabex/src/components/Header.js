import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #f5f5f5;
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    color: palevioletred;
    border: 1px solid #ddd;
    border-radius: 4px;
    `;

const Header = () => {
    return (
        <HeaderContainer>
        <h1>Labex Header</h1>
        </HeaderContainer>
    );
};

export default Header;