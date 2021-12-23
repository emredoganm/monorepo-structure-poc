import { variables } from "@emredoganm/mono-core";

interface ButtonProps {
  text?: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button>{text || "hello world!"}</button>
      <code>
        <pre>{JSON.stringify(variables, null, 2)}</pre>
      </code>
    </div>
  );
};
