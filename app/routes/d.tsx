import { createRoute } from "honox/factory";
import { PageD } from "../components/PageD.js";

export default createRoute((c) => {
  return c.render(<PageD />);
});
