import { PALLETTE } from "../reactcomponents/constants.js";
import {
  emailAtom,
  isEmailModalVisibleAtom,
  store,
} from "../reactcomponents/store.js";
import { opacityTrickleDown } from "../reactcomponents/utils.js";
import makeIcon from "./Icon.js";

export default function makeEmailIcon(
  k,
  parent,
  posVec2,
  imageData,
  subtitle,
  email
) {
  const [emailIcon, subtitleText] = makeIcon(
    k,
    parent,
    posVec2,
    imageData,
    subtitle
  );

  const emailSwitch = emailIcon.add([
    k.circle(30),
    k.color(k.Color.fromHex(PALLETTE.color1)),
    k.anchor("center"),
    k.area(),
    k.pos(0, 150),
    k.opacity(0),
  ]);

  emailSwitch.onCollide("player", () => {
    store.set(isEmailModalVisibleAtom, true);
    store.set(emailAtom, email);
  });

  opacityTrickleDown(parent, [subtitleText, emailSwitch]);

  return emailIcon;
}
