import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { useEffect, useRef, useState } from "react";
import { BsCheck2 } from "react-icons/bs";

const Input = styled.div`
  border: 1px solid ${colors.pink};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &.select {
    background-color: ${colors.pink};
    border: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  &.select div {
    background-color: ${colors.pink};
    border: 0;
  }
`;

const Label = styled.label`
  ${typography.regular.body2}
  color: ${colors.gray};

  cursor: pointer;
`;

function CheckBox({ name, onHandleSelect, estado, ...props }) {
  const box = useRef(null);

  return (
    <Wrapper
      ref={box}
      onClick={(e) => {
        e.preventDefault();
        box.current.classList.toggle("select");
        onHandleSelect(box.current.classList.contains("select"), name);
      }}
    >
      <Input {...props} >
        <BsCheck2 color="white" width="11.31" height="8.01" />
      </Input>
      <Label htmlFor={name}>{name}</Label>
    </Wrapper>
  );
}

export default CheckBox;
