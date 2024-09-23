// Must follow email client limitations (no CSS-in-JS or JavaScript interactions)
const calculate = (a: number, b: number) => a + b;

export const Welcome = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to our service. {calculate(1, 3)}</p>
    </>
  );
};
