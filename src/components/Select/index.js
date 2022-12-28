import { BsChevronDown } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { colors } from "assets/colors";
import CheckBox from "components/CheckBox";
import SInput from "./SInput";
import { typography } from "assets/typography";

const FormControl = styled.div``;

const NativeSelect = styled.div`
  background: ${colors.white};
  margin-top: 4px;
  display: none;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  &.open {
    display: flex;
  }
`;

const Label = styled.label`
  ${typography.regular.overline}
  color: ${colors.gray};
  text-transform: uppercase;
`;

const SFormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function Select({ label, placeholder, options }) {
  const [values, setValues] = useState([]);
  const select = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function onClickOption(isSelect, newValue) {
    if (!isSelect) {
      const newValues = values.filter((value) => value !== newValue);
      setValues(newValues);
    } else {
      setValues([...values, newValue]);
    }
  }

  function onDeleteOption(e) {
    const newValue = e.target.parentNode.parentNode.firstChild.textContent;
    // console.log(newValue);
    for (const option of select.current.children) {
      if (option.innerText === newValue) {
        option.classList.remove("select");
        const newValues = values.filter((value) => value !== option.innerText);
        setValues(newValues);
      }
    }
  }

  return (
    <FormControl>
      <SFormInput>
        <Label>{label}</Label>
        <SInput
          rightIcon={BsChevronDown}
          onClick={() => setIsOpen(!isOpen)}
          color={colors.lightGray}
          typography={typography.regular.body2}
        >
          {values.length === 0
            ? placeholder
            : values.map((value, id) => (
                <SInput
                  key={id}
                  rightIcon={AiOutlineClose}
                  background={colors.shallowPink}
                  color={colors.gray}
                  onClick={onDeleteOption}
                  style={{ width: "fit-content", padding: "4px 8px" }}
                  typography={typography.regular.caption}
                >
                  {value}
                </SInput>
              ))}
        </SInput>
      </SFormInput>
      <NativeSelect ref={select} className={isOpen ? "open" : ""}>
        {options.map((option) => (
          <CheckBox key={option} name={option} onHandleSelect={onClickOption} />
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default Select;
