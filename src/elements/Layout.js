import styled from "styled-components"

export const LayoutWrapper = styled.div`
  section {
    position: relative;
    padding: 100px;
  }
  .btn {
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin-top: 30px;
    padding: 10px 30px;
    background: #fff;
    color: black;
    border: none;
  }
  ${props => props.theme.devices.phone} {
    section {
      padding: 40px;
    }
  }
`
