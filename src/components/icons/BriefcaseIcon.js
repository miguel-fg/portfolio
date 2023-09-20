const BriefcaseIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="var(--dim-gray)"
            height="1em"
            width="1em"
            {...props}
        >
            <path
                fill="none"
                stroke="var(--dim-gray)"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M80 128 H432 A48 48 0 0 1 480 176 V400 A48 48 0 0 1 432 448 H80 A48 48 0 0 1 32 400 V176 A48 48 0 0 1 80 128 z"
            />
            <path
                fill="none"
                stroke="var(--dim-gray)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
            />
        </svg>
    );
};

export default BriefcaseIcon;
