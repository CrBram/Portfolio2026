import Typography from "./Typography"

interface SidewaysTitleProps {
  children: React.ReactNode;
}

const SidewaysTitle = (props: SidewaysTitleProps) => {
  const { children } = props;

  return (
    <Typography variant="h2" sideways>
      {children}
    </Typography>
  )
}

export default SidewaysTitle