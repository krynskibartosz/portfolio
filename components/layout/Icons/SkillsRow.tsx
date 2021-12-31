import { Row } from "components";
import { ReactIcon } from "./skills/React";
import { VsCodeIcon } from "./skills/VsCode";

export const SkillsRow = () => (
  <Row className="gap-x-2" positionY="center">
    <ReactIcon />
    <img
      src="/img/typescript.svg"
      className="w-12 h-12"
      style={{ minWidth: 48, minHeight: 48 }}
    />
    <img
      src="/img/nextjs.png"
      className="w-12 h-12"
      style={{ minWidth: 48, minHeight: 48 }}
    />
    <img
      src="/img/tailwindcss-icon.svg"
      className="w-12 h-12"
      style={{ minWidth: 48, minHeight: 48 }}
    />
    <VsCodeIcon />
  </Row>
);
