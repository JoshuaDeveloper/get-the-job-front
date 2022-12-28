import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { Button } from "components/Button";
import { Field } from "formik";
import React, { useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";

const File = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & p {
    color: ${colors.darkGray};
    ${typography.regular.body2}
  }
`;

const Caption = styled.p`
  ${typography.regular.caption}
  color: ${colors.lightGray};
`;

const Label = styled.label`
  text-transform: uppercase;
  color: ${colors.darkGray};
  ${typography.regular.overline}
`;
function InpuFile({ label, caption }) {
  const [avatarPreview, setAvatarPreview] = useState("/avatars/default.png");
  return (
    <div>
      <Label htmlFor="cv">{label}</Label>
      <File>
        <Button
          color="white"
          leftIcon={<HiOutlineUpload fontSize="20" />}
          background={colors.pink}
          style={{
            width: "fit-content",
            textTransform: "none",
            letterSpacing: "0.25px",
          }}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // var file = e.target.files[0];
            // var reader = new FileReader();
            // reader.onload = function (event) {
            //   // The file's text will be printed here
            //   console.log(event.target.result);
            // };
          }}
        >
          Choose a file
        </Button>
        <p>ramon_cv.pdf</p>
      </File>

      <Caption>{caption}</Caption>
    </div>
  );
}

export default InpuFile;
