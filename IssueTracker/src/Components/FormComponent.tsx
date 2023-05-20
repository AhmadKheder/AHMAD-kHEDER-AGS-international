import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Av1 from "../Assets/Icons/Av1.png";
import Av10 from "../Assets/Icons/Av10.png";
import Av2 from "../Assets/Icons/Av2.png";
import Av3 from "../Assets/Icons/Av3.png";
import Av4 from "../Assets/Icons/Av4.png";
import Av5 from "../Assets/Icons/Av5.png";
import Av6 from "../Assets/Icons/Av6.png";
import Av7 from "../Assets/Icons/Av7.png";
import Av8 from "../Assets/Icons/Av8.png";
import Av9 from "../Assets/Icons/Av9.png";

import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import DJ2 from "../Assets/Icons/DJ2.png";
import Deye3 from "../Assets/Icons/Deye3.png";
import Exide3 from "../Assets/Icons/Exide3.png";
import FELICITY5 from "../Assets/Icons/FELICITY5.png";
import Growwat3 from "../Assets/Icons/Growwat3.png";
import INKEL3 from "../Assets/Icons/INKEL3.png";
import Lumi5 from "../Assets/Icons/Lumi5.png";
import MUST4 from "../Assets/Icons/MUST4.png";
import ORBIT3 from "../Assets/Icons/ORBIT3.png";
import RAMBO2 from "../Assets/Icons/RAMBO2.png";
import ROCKET5 from "../Assets/Icons/ROCKET5.png";
import SUPERPOWER2 from "../Assets/Icons/SUPERPOWER2.png";
import TUFFBULL3 from "../Assets/Icons/TUFFBULL3.png";
import UploadIcon from "../Assets/Icons/UploadIcon.png";
import Vector from "../Assets/Icons/Vector.png";
import _3k2 from "../Assets/Icons/_3k2.png";
import Button from "./Reusable/Button";
import ChecklistButton from "./Reusable/ChecklistButton";
import SwitchButton from "./Reusable/SwitchButton";

interface FormValues {
  issue: string;
  relatingDepartment: string;
  relatingTo: string[];
  directToWhom: string[];
  attachments: File[];
  deadline: Date;
}

const MyForm: React.FC = () => {
  const initialValues: FormValues = {
    issue: "",
    relatingDepartment: "",
    relatingTo: [],
    directToWhom: [],
    attachments: [],
    deadline: new Date(),
  };

  const handleFormSubmit = (values: FormValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  const departmentButtons = [
    "Administrative",
    "Finance",
    "Accounting",
    "Sales",
    "Marketing",
    "Logistic",
    "Human Resources",
    "Supplier",
    "Security",
  ];
  const issueButtons = ["Urgent", "Typical"];
  const iconPaths = [
    _3k2,
    Deye3,
    DJ2,
    Growwat3,
    MUST4,
    Lumi5,
    ROCKET5,
    FELICITY5,
    SUPERPOWER2,
    RAMBO2,
    ORBIT3,
    Vector,
    INKEL3,
    Exide3,
    TUFFBULL3,
  ];
  const formBtnsCustomStyle = {
    borderRadius: "10px",
    fontSize: "1.2rem",
    fontWeight: "600",
    backgroundColor: "#D9D9D9",
    width: "10rem",
  };
  const avatarPaths = [Av1, Av2, Av3, Av4, Av5, Av6, Av7, Av8, Av9, Av10];
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <h2>ISSUE</h2>
          <Box>
            <SwitchButton name="issue" values={issueButtons} />
          </Box>
          <h3>Relating to what department?</h3>
          <Box>
            <SwitchButton
              name="relatingDepartment"
              values={departmentButtons}
            />
          </Box>
          <Box margin="2rem auto">
            <h3>Relating to which?</h3>
            <Flex
              border="1px solid lightgray"
              borderRadius={25}
              p="0.5rem 1rem"
              flexDirection="row"
              width="fit-content"
              margin="auto"
            >
              {iconPaths.map((iconPath, index) => (
                <ChecklistButton
                  key={index}
                  options={values.relatingTo}
                  selectedItems={values.relatingTo}
                  setSelectedItems={(selectedItems) =>
                    setFieldValue("relatingTo", selectedItems)
                  }
                >
                  <img src={iconPath} alt="Icon" />
                </ChecklistButton>
              ))}
            </Flex>
          </Box>
          <Box margin="2rem auto">
            <h3>Direct it to whom?</h3>
            <Flex flexDirection="row" width="fit-content" margin="auto">
              {avatarPaths.map((avatarPath, index) => (
                <ChecklistButton
                  key={index}
                  options={avatarPaths}
                  selectedItems={values.directToWhom}
                  setSelectedItems={(selectedItems) =>
                    setFieldValue("directToWhom", selectedItems)
                  }
                >
                  <img src={avatarPath} alt="Avatar" />
                </ChecklistButton>
              ))}
            </Flex>
          </Box>
          <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
            <Form>
              <Flex
                flexDirection="row"
                width="fit-content"
                margin="auto"
                alignItems="center"
              >
                <FormControl>
                  <FormLabel htmlFor="issue">Issue:</FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    id="issue"
                    name="issue"
                    w="300px"
                    h="50px"
                    borderRadius="10px"
                  />
                  <ErrorMessage name="issue" component={FormErrorMessage} />
                </FormControl>

                <Stack spacing={3} direction="row" display="flex">
                  {[1, 2, 3].map((index) => (
                    <FormControl key={index}>
                      <FormLabel htmlFor={`choices.${index - 1}`}>
                        Choices :
                      </FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        id={`choices.${index - 1}`}
                        name={`choices.${index - 1}`}
                        w="150px"
                        h="50px"
                        borderRadius="10px"
                      />
                      <ErrorMessage
                        name={`choices.${index - 1}`}
                        component={FormErrorMessage}
                      />
                    </FormControl>
                  ))}
                  <FormControl>
                    <FormLabel htmlFor="note">Note:</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="note"
                      name="note"
                      w="170px"
                      h="50px"
                      borderRadius="10px"
                    />
                    <ErrorMessage name="note" component={FormErrorMessage} />
                  </FormControl>
                  <FormControl display="flex" alignContent="center">
                    <ChecklistButton
                      options={[]}
                      selectedItems={values.attachments}
                      setSelectedItems={(selectedItems) =>
                        setFieldValue("attachments", selectedItems)
                      }
                    >
                      <label htmlFor="attachments">
                        <img src={UploadIcon} alt="Upload Icon" />
                      </label>
                      <input
                        type="file"
                        id="attachments"
                        name="attachments"
                        multiple
                        onChange={(event) =>
                          setFieldValue("attachments", event.target.files)
                        }
                        style={{ display: "none" }}
                      />
                    </ChecklistButton>
                  </FormControl>
                </Stack>
              </Flex>
            </Form>
          </Formik>
          <Box display="flex" flexDirection="column">
            <Flex
              flexDirection="column"
              alignItems="center"
              width="50%"
              m="1rem auto"
            >
              <FormLabel htmlFor="deadline" fontWeight={600} fontSize={20}>
                Deadline:
              </FormLabel>
              <DatePicker
                id="deadline"
                name="deadline"
                selected={values.deadline}
                onChange={(date) => setFieldValue("deadline", date)}
              />
            </Flex>
            <Flex
              justify="space-between"
              alignItems="center"
              w="50%"
              m="4rem auto"
            >
              <Button type="button" customStyle={formBtnsCustomStyle}>
                Delete
              </Button>
              <Button type="submit" customStyle={formBtnsCustomStyle}>
                Save
              </Button>
              <Button type="submit" customStyle={formBtnsCustomStyle}>
                Submit
              </Button>
            </Flex>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
