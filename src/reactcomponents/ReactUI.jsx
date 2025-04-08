import CameraController from "./CameraController";
import EmailModal from "./EmailModal";
import ProjectModal from "./ProjectModal";
import SocialModal from "./SocialModal";
export default function ReactUI() {
  return (
    <>
      <p className="controls-message">Tap/Click around to move</p>
      <CameraController />
      <SocialModal />
      <EmailModal />
      <ProjectModal />
    </>
  );
}
