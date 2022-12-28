import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { Input } from "components/Input";
import React, { useRef, useState } from "react";
import { useField, ErrorMessage, useFormikContext } from "formik";
import { FormError } from "components/FormError";
import { RiUploadLine } from "react-icons/ri";
// import { css } from "@emotion/css";
// import SInput from "components/Select/SInput";
// import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & label {
    text-transform: uppercase;
    color: ${colors.darkGray};
    ${typography.regular.overline}
  }
`;
const Message = styled.p`
  color: ${colors.lightGray};
  text-align: start;
  ${typography.regular.caption}
`;

const FileInput = styled.label`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 0.5rem;
  & > p {
    ${typography.regular.body2}
    text-transform: none;
    color: ${colors.gray};
    text-overflow: ellipsis;
    overflow: hidden;
    width: 160px;
    white-space: nowrap;
  }
  & input {
    display: none;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  & label {
    text-transform: uppercase;
    color: ${colors.darkGray};
    ${typography.regular.overline}
  }
`;

const SelectInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & label {
    text-transform: uppercase;
    color: ${colors.darkGray};
    ${typography.regular.overline}
  }
`;

const Upload = styled.div`
  ${typography.regular.body2};
  width: fit-content;
  text-transform: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: white;
  & p {
    color: white;
  }
  background: ${colors.pink};
`;

// const Caption = styled.p`
//   ${typography.regular.caption}
//   color: ${colors.lightGray};
// `;

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
  & div {
    cursor: pointer;
  }
  & div:hover {
    background: ${colors.shallowPink};
  }
`;

export const FormInput = ({ label, caption, updateFile, ...props }) => {
  const [field] = useField({ ...props });
  const [filename, setFilename] = useState(null);
  const { setFieldValue } = useFormikContext();

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(props.value);

  const refInput = useRef(null);

  if (props.type === "file") {
    return (
      <Container>
        <FileInput htmlFor="inputTag">
          <label htmlFor={props.name}>{label}</label>
          <input
            {...field}
            {...props}
            value={undefined}
            onChange={(e) => {
              console.log(props.name);
              setFieldValue(props.name, e.target.files[0]);
              const fname = e.target.files[0].name;
              setFilename(fname || null);
              props.onChange && props.onChange();
            }}
            id="inputTag"
          />
          <Upload>
            <RiUploadLine size={"1.25rem"} />
            <p>Choose a file</p>
          </Upload>
          <p>{filename || "No file chosen."}</p>
        </FileInput>
        <Message>{caption}</Message>
      </Container>
    );
  } else if (props.type === "select") {
    const handleSelect = (option) => {
      setValue(option);
      setIsOpen(false);
    };
    return (
      <SelectInput>
        <label htmlFor={props.name}>{label}</label>
        <Input
          type="text"
          {...field}
          name={props.name}
          ref={refInput}
          onChange={(e) => {
            setValue(e.target.value);
            setFieldValue(props.name, e.target.value);
          }}
          value={value}
          rightIcon={<BsChevronDown />}
          onClick={() => setIsOpen(!isOpen)}
        />

        <NativeSelect className={isOpen ? "open" : ""}>
          {props.options.map((value, id) => (
            <div
              key={id}
              onClick={() => {
                handleSelect(value);
                setFieldValue(props.name, value);
              }}
              onMouseEnter={(e) => {
                setValue(value);
              }}
            >
              {value}
            </div>
          ))}
        </NativeSelect>
      </SelectInput>
    );
  }
  return (
    <Container className={props.type}>
      <label htmlFor={props.name}>{label}</label>
      <Input {...field} name={props.name} {...props} />
      <Message>{caption}</Message>
      <ErrorMessage name={props.name} component={FormError} />
    </Container>
  );
};
