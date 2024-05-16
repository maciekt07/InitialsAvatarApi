import { getFontColor, isHexColor, lightenColor } from "../utils";
import { defaultAvatar } from "./defaultAvatar";

const createAvatarSvg = (bgColor: string, content: string) => `
 <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" fill="url(#paint0_linear_229_18)"/>
<defs>
<linearGradient id="paint0_linear_229_18" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
<stop stop-color="${bgColor}"/>
<stop offset="1" stop-color="${lightenColor(bgColor, 50)}"/>
</linearGradient>
</defs>
${content}
</svg>
`;

export const generateAvatar = (initials: string | null, bgColor: string) => {
  bgColor = isHexColor(bgColor) ? bgColor : "#595959";
  if (initials) {
    const formattedInitials = initials.substring(0, 3).toUpperCase();
    const textElement = `<text x="50%" y="50%" font-size="${
      formattedInitials.length === 3 ? 45 : 60
    }" text-anchor="middle" fill="${getFontColor(
      bgColor
    )}" dy=".3em" font-family="Arial" font-weight="600" >${formattedInitials}</text>`;
    return createAvatarSvg(bgColor, textElement);
  } else {
    // Use the default avatar SVG content directly
    return createAvatarSvg(bgColor, defaultAvatar(bgColor));
  }
};
