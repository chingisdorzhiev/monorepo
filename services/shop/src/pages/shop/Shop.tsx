import { shopRutes } from "@packages/shared/src/routes/shop";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div>
      <div>SHOP</div>
      <div>
        <Link to={shopRutes.second}>Go see second page</Link>
      </div>
    </div>
  );
}
