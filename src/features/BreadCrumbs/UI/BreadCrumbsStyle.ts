import styled from "styled-components";

const BreadCrumbsWrapperSC = styled("div")`
  display: flex;
  width: 100%;
  max-width: 1522px;
  align-items: center;
  gap: var(--space-3);
  padding: 0 var(--space-3);
  background: var(--gray-a3);
  height: 48px;
  margin-bottom: var(--space-5);
`;

export const BreadCrumbsStyle = () => ({ BreadCrumbsWrapperSC });
