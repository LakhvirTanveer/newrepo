import styled from "styled-components";

export const Div = styled.nav`
/* border: 1px solid black; */
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 8vw 0 10vw;
 
  i {
    margin: 0 0.5vw;
  }
`;

export const Contain = styled.div`
  max-width: 100%; 
  background: url(/images/back-img.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Logo = styled.div`

  font-size: 5vh;
  padding: 10px 0;
`;
export const List = styled.div``;


export const Ul = styled.ul`

  justify-content: space-between;
  display: flex;
  list-style-type: none;
`;
export const Li = styled.li`
  padding: 0 1.5vw;
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
  font-family: 'Inter';
line-height: 24px;
`;
export const Button = styled.button`

  font-family: 'Inter';
  font-size: 500;
  font-style: normal;
  background-color: #f9c51c;
  padding: 1.5vh 1.5vw;
  gap: 10px;
  border: none;
  font-family: "Outfit";
  font-weight: bold;
  z-index: 1;
`;


// .menu-icon {
//   display: none;
// }
/* @media only screen and (max-width: 800px) {
    .List ul {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: lightgray;
      right: 0;
    }
    .btn {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 25px;
      padding: 20px;
      right: 0;
    }
    .logo {
      position: relative;
      right: 28vw;
    }
    .menu-icon {
      display: block;
    }
  } */
