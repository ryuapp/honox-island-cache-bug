import { createRoute } from "honox/factory";
import { PageB } from "../components/PageB.js";

export default createRoute((c) => {
  return c.render(<PageB />);
});
