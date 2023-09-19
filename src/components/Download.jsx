import styled from "@emotion/styled";
import { useState } from "react";

const Input = styled.input`
  width: 60px;
  text-align: center;
`;
const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
const Link = styled.a`
  text-decoration: none;
`;

function Download() {
  const [exampleSize, setExampleSize] = useState("10");

  function handleExampleSizeChange(event) {
    setExampleSize(event.target.value);
  }

  return (
    <>
      <InputWrapper>
        <label htmlFor="size">Enter the size number of the contacts </label>
        <Input
          id="size"
          value={exampleSize}
          onChange={handleExampleSizeChange}
        />
      </InputWrapper>

      <Link
        href={`https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/samples?size=${exampleSize}`}
      >
        Download example
      </Link>
    </>
  );
}
export default Download;
