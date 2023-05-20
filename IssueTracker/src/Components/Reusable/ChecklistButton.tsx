import { Button } from "@chakra-ui/react";
import React from "react";

interface ChecklistButtonProps {
  children: React.ReactNode | any;
  options: string[];
  selectedItems: string[] | any;
  setSelectedItems: (selectedItems: string[]) => void;
}
const ChecklistButton: React.FC<ChecklistButtonProps> = ({
  children,
  options,
  selectedItems,
  setSelectedItems,
}) => {
  const isSelected = (item: string) => selectedItems.includes(item);
  console.log(options);
  const handleButtonClick = (item: string) => {
    let updatedSelectedItems: string[];

    if (isSelected(item)) {
      updatedSelectedItems = selectedItems.filter(
        (selectedItem: any) => selectedItem !== item
      );
    } else {
      updatedSelectedItems = [...selectedItems, item];
    }

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <Button
      type="button"
      onClick={() => handleButtonClick(children.toString())}
      colorScheme={isSelected(children.toString()) ? "blue" : "gray"}
      width="100%"
      // height="40px"
      borderRadius="25%"
      margin="5px"
      variant="outline"
      borderWidth="0"
      p="0"
      _hover={{
        backgroundColor: isSelected(children.toString()) ? "lightblue" : "gray",
      }}
    >
      {children}
    </Button>
  );
};
export default ChecklistButton;
