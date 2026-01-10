import { EmptyStyled } from "./style";
import EmptyImage from "../../assets/no data.png";

type Props = {
  title: string;
  description?: string;
};

const Empty = ({ title, description }: Props) => {
  return (
    <EmptyStyled>
      <div className="empty-content">
        <div className="image-container">
          <img src={EmptyImage} alt="empty" className="image" />
        </div>
        <h3 className="title">{title}</h3>
        {description && <p className="description">{description}</p>}
      </div>
    </EmptyStyled>
  );
};

export default Empty;
