import styled from "styled-components"

export const P = styled.p`
  ${props => {
    switch (props.size) {
      case "small":
        return `@media only screen and ${props.theme.devices.phone}{
                    font-size: 19px;
                }
                @media only screen and ${props.theme.devices.tablet}{
                    font-size: 20px;
                }
                @media only screen and ${props.theme.devices.desktop}{
                    font-size 18px;
                }`

      default:
        break
    }
  }}
`
