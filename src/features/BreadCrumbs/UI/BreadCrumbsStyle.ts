import styled from "styled-components";

const BreadCrumbsWrapperSC = styled("div")`
  display: flex;
  width: 100%;
  max-width: 1522px;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  background: var(--gray-a3);
`;

export const BreadCrumbsStyle = () => ({ BreadCrumbsWrapperSC });
