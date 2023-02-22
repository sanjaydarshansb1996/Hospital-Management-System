import { Tree } from "antd";
import styled from "styled-components";

const SingleLevelTree = (props) => {
  return <StyledTree {...props} />;
};

const StyledTree = styled(Tree)`
  .ant-tree-switcher-noop {
    display: none;
  }
`;

export default SingleLevelTree;
