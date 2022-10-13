const HCHIcon = ({
  versionSimple,
  withBorder,
  className,
}: {
  versionSimple?: boolean;
  className?: string;
  withBorder?: boolean;
}) => (
  <div
    className={className}
    style={{
      width: "40px",
      height: "32px",
      color: versionSimple ? "var(--color-primario)" : "white",
      fontFamily: "var(--fuente-logotipo)",
      backgroundColor: versionSimple ? "white" : "var(--color-primario)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      border: withBorder ? "2px solid white" : "",
    }}
  >
    <h3
      style={{
        fontWeight: "bold",
      }}
    >
      DH
    </h3>
  </div>
);

export default HCHIcon;
