import { createRoute } from "honox/factory";
import { PageE } from "../components/PageE.js";

export default createRoute((c) => {
  return c.render(<PageE />);
});
