import React from "react";

type Props = {
  //   iconsList: any[];
  iconsList: (
    | {
        tech: string;
        icon: JSX.Element;
      }
    | {
        tech: string;
        icon?: undefined;
      }
  )[];
};

const TechStack: React.FC<Props> = ({ iconsList }) => {
  return (
    <ul className="flex items-center gap-4 flex-wrap">
      {iconsList.map((icons) => (
        <li className="flex items-center gap-2 text-sm">
          <span className="text-xl">{icons.icon}</span>
          <span>{icons.tech}</span>
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
