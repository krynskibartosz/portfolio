import { useState, useEffect, ReactNode } from "react";
import {
  DangerButton,
  Portal,
  Column,
  OutlineButton,
  Row,
  MainButton,
} from "@components";
import useTranslation from "next-translate/useTranslation";

type Popup = {
  message: string;
  className: string;
};

//! Le composant a besoin d'être situer au dessus du layout pour qu'il puisse être correctement centrer

export const Popup = ({ message, className }: any) => {
  const { toggle, bottom } = usePopup({ visible: message?.length > 0 });

  return (
    <Row
      positionX="center"
      className={`transition-all cursor-pointer w-full ease-in-out fixed my-0 delay-300 ${bottom}`}
      onClick={() => toggle.hidde()}
    >
      <Row
        className={` px-4 py-2 border text-main border-gray-200 shadow-test bg-white rounded-md  ${className}`}
      >
        {message}
      </Row>
    </Row>
  );
};

type ConfirmationPopup = {
  show: boolean;
  Message: () => ReactNode;
  confirmAction: () => void;
  cancelAction: () => void;
  className?: string;
};

export const ConfirmationPopup = ({
  show,
  Message,
  confirmAction,
  cancelAction,
  className,
}: ConfirmationPopup) => {
  const { toggle, bottom } = usePopup({ visible: show });
  const { t } = useTranslation("common");
  return (
    <Portal>
      <Row
        positionX="center"
        className={`transition-all cursor-pointer w-full ease-in-out fixed my-0 delay-300 ${bottom}`}
      >
        <Column
          className={` px-4 py-5 gap-x-1 border  border-gray-200 shadow-test bg-white rounded-md  ${className}`}
          positionX="between"
        >
          <div className="mb-2">{Message()}</div>
          <Row positionX="between" className="gap-x-5">
            <MainButton
              className="w-full"
              text={t("Yes")}
              onClick={() => {
                toggle.hidde();
                confirmAction();
              }}
            />
            <DangerButton
              className="w-full"
              text={t("No")}
              onClick={() => {
                toggle.hidde();
                cancelAction();
              }}
            />
          </Row>
        </Column>
      </Row>
    </Portal>
  );
};

type usePopup = {
  visible: boolean;
};

const usePopup = ({ visible }: usePopup) => {
  const initialPosition = "-bottom-32";
  const visiblePosition = "bottom-8 max-md:bottom-1 max-md:px-4";
  const [bottom, setBottom] = useState(initialPosition);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setBottom(visiblePosition);
        setTimeout(() => {
          setBottom(initialPosition);
        }, 4000);
      }, 300);
    }
  }, [visible]);

  return {
    toggle: {
      hidde: () => setBottom(initialPosition),
      show: () => setBottom(visiblePosition),
    },
    bottom,
  };
};
