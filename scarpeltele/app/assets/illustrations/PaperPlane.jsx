const PaperPlane = ({
  className,
  rotateMultiplayer = 1,
  translateX = 0,
  translateY = 0,
  translateXMultiplayer = 1,
  translateYMultiplayer = 1,
  rotate,
}) => {
  return (
    <svg
      style={{
        transform: `translate(${translateX * translateXMultiplayer}%, ${
          translateY * translateYMultiplayer
        }%) rotate(${rotate * rotateMultiplayer}deg)`,
      }}
      className={className}
      width="328"
      height="261"
      viewBox="0 0 328 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M288.512 23C87.5135 42 32 114.5 26.5078 245"
        stroke="#00031B"
        strokeDasharray="4 4"
      />
      <path
        d="M291.859 29.6462L297.479 22.884L300.258 26.3036L291.859 29.6462Z"
        fill="#0D3497"
      />
      <path
        d="M291.908 29.5188L297.453 22.8736L300.201 26.2621L291.908 29.5188Z"
        stroke="#155000"
        strokeLinejoin="round"
      />
      <path
        d="M327.004 15.7004L305.759 33.1184L297.478 22.902L291.875 29.4306L293.363 17.8244L285.43 8.03616L327.004 15.7004Z"
        fill="#B3E430"
        stroke="#155000"
        strokeLinejoin="round"
      />
      <path
        d="M305.759 33.1178L327.005 15.6997L297.599 22.7807L305.759 33.1178Z"
        fill="#BFFF15"
        stroke="#155000"
        strokeLinejoin="round"
      />
      <path
        d="M293.355 17.8428L327.003 15.7002L285.493 8.06057L293.355 17.8428Z"
        fill="#BFFF15"
        stroke="#155000"
        strokeLinejoin="round"
      />
      <path
        d="M66.4688 260.147L0.419922 247.38L22.0285 135.591L88.0773 148.358L66.4688 260.147Z"
        fill="url(#paint0_linear_446_7253)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_446_7253"
          x1="48.8114"
          y1="174.802"
          x2="55.0529"
          y2="141.975"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PaperPlane;
