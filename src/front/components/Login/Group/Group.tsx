import "./Group.css";
interface Props {
className: any;
}
export const Group = ({ className }: Props): JSX.Element => {
return (
<div className={`group ${className}`}>
<div className="text-wrapper">Iniciar sesión</div>
</div>
);
};