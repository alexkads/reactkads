import React, { ComponentProps } from "react";
import { Story, Meta, storiesOf } from "@storybook/react";
import { InputText } from ".";
import { useState } from "@storybook/addons";

storiesOf("InputText", module).add("Login", () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <div style={{ width: "350px", backgroundColor: "grey", padding: "40px" }}>
      <InputText
        label="Nome do Usuário"
        name="username"
        onChange={handleOnChange}
        value={username}
      />

      <InputText
        type="password"
        label="Senha"
        name="password"
        onChange={handleOnChange}
        value={password}
      />
    </div>
  );
});

export default {
  title: "InputText",
  component: InputText,
} as Meta;

const Template: Story<ComponentProps<typeof InputText>> = args => (
  <div style={{ width: "350px", backgroundColor: "grey", padding: "40px" }}>
    <InputText {...args} />
    <InputText {...args} />
  </div>
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: "Nome",
  name: "teste",
  value: "teste",
};
