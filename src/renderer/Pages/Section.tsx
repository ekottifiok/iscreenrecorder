import { FC, ReactElement } from "react";
import { Text } from "@fluentui/react-components";

export const Section: FC<{ title: string; content: ReactElement }> = ({ title, content }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Text weight="medium">{title}</Text>
            {content}
        </div>
    );
};
