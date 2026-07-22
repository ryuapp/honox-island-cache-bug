import { createRoute } from "honox/factory";
import { PageC } from "../components/PageC.js";

export default createRoute((c) => {
  return c.render(<PageC />);
});
