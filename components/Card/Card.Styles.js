import styled from "styled-components";
import { mediaQueries } from "../../shared/styles/mediaQueries";

export const CardContainer = styled.div`
  width: ${(props) => props.width || "inherit"};
  height: ${(props) => props.height || "inherit"};
  max-width: ${(props) => props.maxWidth || props.width || "inherit"};
  max-height: ${(props) => props.maxHeight || props.height || "inherit"};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 15px 10px 10px;
  ${mediaQueries("phone-lg")`
    width: 80%;
    margin-bottom: 20px;
  `}
`;

// 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
