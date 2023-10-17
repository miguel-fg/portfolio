const ApplicationIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="var(--dim-gray)"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M9.5 8.5L11 10l-3 3 3 3-1.5 1.5L5 13l4.5-4.5m5 9L13 16l3-3-3-3 1.5-1.5L19 13l-4.5 4.5M21 2H3a2 2 0 00-2 2v16a2 2 0 002 2h18a2 2 0 002-2V4a2 2 0 00-2-2m0 18H3V6h18v14z" />
        </svg>
    );
};

export default ApplicationIcon;
