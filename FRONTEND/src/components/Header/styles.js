import styled from 'styled-components';



export const Box = styled.div`
    background-color: #f6f6f6;
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      margin: 10px;
      width: 35px;
      height: 35px;
    }

    button {
      background-color: #f6f6f6;
      border: none
    }

    h1{
      text-align: center;
      color: #c9c9c9;
      margin-top: 18px;
      font-family: 'Quicksand';
      font-size: 20px;
      font-size: 15px;

      :hover {
        color: #b6b6b6;

      }
    }
`;

// export const Content = styled.div`
//   height: 64px;
//   max-width: 900px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   nav {
//     display: flex;
//     align-items: center;

//     img {
//       margin-right: 20px;
//       padding-right: 20px;
//       border-right: 1px solid #eee;
//     }

//     a {
//       font-weight: bold;
//       color: #7159c1;
//     }
//   }

//   aside {
//     display: flex;
//     align-items: center;
//   }
// `;

// export const Profile = styled.div`
//   display: flex;
//   margin-left: 20px;
//   padding-left: 20px;
//   border-left: 1px solid #eee;

//   div {
//     text-align: right;
//     margin-right: 10px;

//     strong {
//       display: block;
//       color: #333;
//     }

//     a {
//       display: block;
//       margin-top: 2px;
//       font-size: 12px;
//       color: #999;
//     }
//   }

//   img {
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//   }
// `;
