import React from "react";

interface SwitchButtonProps {
  name: string;
  values: string[];
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ name, values }) => {
  const [selectedValue, setSelectedValue] = React.useState(values[0]);

  const handleButtonClick = (value: string) => {
    setSelectedValue(value);
  };
  console.log(name);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      {values.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => handleButtonClick(value)}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            backgroundColor: selectedValue === value ? "lightblue" : "white",
            border: "1px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default SwitchButton;
