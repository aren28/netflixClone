import { Box } from "@mui/material";

function PlainVideo({
  rankingNumber,
  rankingBackground,
}: {
  rankingNumber: any;
  rankingBackground: string;
}) {
  const rankingNumberProps = rankingNumber.props;
  const rankingNumberPropsChildren = rankingNumber.props.children.props;
  return (
    <>
      <svg
        width={rankingNumberProps.width}
        height={rankingNumberProps.height}
        viewBox={rankingNumberProps.viewBox}
        className={rankingNumberProps.className}
      >
        <path
          stroke={rankingNumberPropsChildren.stroke}
          strokeLinejoin={rankingNumberPropsChildren.strokeLinejoin}
          strokeWidth={rankingNumberPropsChildren.strokeWidth}
          d={rankingNumberPropsChildren.d}
        ></path>
      </svg>
      <Box
        component="img"
        src={rankingBackground}
        sx={{ borderRadius: "30px", width: "210px" }}
      />
    </>
  );
}

export default PlainVideo;
