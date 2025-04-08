import { PALLETTE } from "../reactcomponents/constants.js";
import {
  isSocialModalVisibleAtom,
  selectedLinkAtom,
  selectedLinkDescriptionAtom,
  store,
} from "../reactcomponents/store.js";
import { opacityTrickleDown } from "../reactcomponents/utils.js";
import makeIcon from "./Icon.js";

export default function makeSocialIcon(
  k,
  parent,
  posVec2,
  imageData,
  subtitle,
  link,
  description
) {
  const [socialIcon, subtitleText] = makeIcon(
    k,
    parent,
    posVec2,
    imageData,
    subtitle
  );

  const linkSwitch = socialIcon.add([
    k.circle(30),
    k.color(k.Color.fromHex(PALLETTE.color1)),
    k.anchor("center"),
    k.area(),
    k.pos(0, 150),
    k.opacity(0),
  ]);

  linkSwitch.onCollide("player", () => {
    store.set(isSocialModalVisibleAtom, true);
    store.set(selectedLinkAtom, link);
    store.set(selectedLinkDescriptionAtom, description);
  });

  opacityTrickleDown(parent, [subtitleText, linkSwitch]);

  return socialIcon;
}
