function Button({ children, color, bgColor, borderRadius, fontSize }) {
  return (
    <button
      style={{
        color,
        bgColor,
        borderRadius,
        fontSize,
      }}
    >
      {{ children }}
    </button>
  );
}

export default Button;
