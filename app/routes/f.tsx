import { createRoute } from "honox/factory";
import { PageF } from "../components/PageF.js";

export default createRoute((c) => {
  return c.render(<PageF />);
});
