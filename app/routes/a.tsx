import { createRoute } from "honox/factory";
import { PageA } from "../components/PageA.js";

export default createRoute((c) => {
  return c.render(<PageA />);
});
