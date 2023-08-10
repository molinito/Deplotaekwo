import "./Component.css";

interface Props {
    className: any;
}

export const Component = ({ className }: Props): JSX.Element => {
    return (
        <div className={`component ${className}`}>
            <div className="text-wrapper">Inicar sesión con Google</div>
        </div>
    );
};
