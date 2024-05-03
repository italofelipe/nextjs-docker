interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactElement;
  variant: "success" | "error";
}

export const Button = ({ children, onClick, variant, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      style={{ background: variant === "success" ? "#70cc7d" : "#f14343" }}
    >
      {children}
    </button>
  );
};
