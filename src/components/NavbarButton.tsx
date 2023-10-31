
interface NavbarButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    selected: boolean;
}

const NavbarButton = ({ text, onClick, selected }: NavbarButtonProps) => {
    return (
        <div className="cursor-pointer bg-inherit" onClick={onClick} data-testid="navbar-button">
            <h3 className={`${selected?"text-black underline":"text-gray-400"} hover:text-black hover:underline decoration-4 underline-offset-8 decoration-blue-500`}>{text}</h3>
        </div>
    )
};

export default NavbarButton;