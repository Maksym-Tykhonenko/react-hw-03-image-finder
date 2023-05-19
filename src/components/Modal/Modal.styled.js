import styled from "styled-components";

export const Overlay = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(242, 237, 237, 0.883);
      z-index: 1200;
`;
export const ModalPopUp = styled.div`
      max-width: calc(100vw - 48px);
      max-height: calc(100vh - 24px);
`;

export const Btn = styled.button`
      width: 45px;
      height: 45px;
      border-radius: 5px;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      color: white;
      font-size: 30px;
      cursor: pointer;
      :hover {
               font-size: 35px;
      }
`;