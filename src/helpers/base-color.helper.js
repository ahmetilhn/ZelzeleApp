import { magnitudeLevels } from "../constants/magnitude.constants";
import colors from "../theme/colors";
export const baseColorCalc = (mag) => {
  if (mag <= magnitudeLevels.LITTLE.limit)
    return { normal: colors.GRAY_TWO, light: colors.GRAY_ONE };
  else if (
    mag > magnitudeLevels.LITTLE.limit &&
    mag < magnitudeLevels.MUCH.limit
  )
    return { normal: colors.ORANGE, light: colors.ORANGE_LIGHT };
  else return { normal: colors.RED, light: colors.RED_LIGHT };
};
