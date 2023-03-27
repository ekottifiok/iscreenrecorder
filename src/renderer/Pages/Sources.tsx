import { FC } from 'react';

// eslint-disable-next-line react/function-component-definition
const Sources: FC = () => {
  return <div>Hello</div>;
};

export default Sources;

// import { Dropdown, Option, Text } from "@fluentui/react-components";
// import React, { createRef, useEffect } from "react";
// import { FC } from "react";
// import { Section } from "./Section";
// import { DesktopCapturer } from "../../../main/src/DesktopCapturer"
// import { OptionOnSelectData, SelectionEvents } from "types/window";

// export const Sources: FC = () => {
//     // let videoElement;
//     const videoElement = createRef<HTMLVideoElement>()
//     const desktopSources: DesktopCapturer[] = window.ContextBridge.getDesktopSources()
//     useEffect(() => {
//         console.log(desktopSources);

//     }, [])
//     const handleSource = async (event: SelectionEvents, data: OptionOnSelectData) => {
//         const mediaStream = await window.ContextBridge.getSourcesStream(data.selectedOptions[0])
//         console.log(mediaStream)
//         if (!videoElement.current  ) return;

//         console.log(videoElement.current)
//         videoElement.current.srcObject = mediaStream;
//     }

//     return (
//         <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
//             <Text size={1000}>Sources</Text>
//             <Section
//                 title="Preview"
//                 content={
//                     <video ref={videoElement} controls muted style={{ width: "80%" }} ></video>
//                 }
//             />
//             <Section
//                 title="Source"
//                 content={
//                     <div style={{ display: "flex" }}>
//                         <Dropdown placeholder="Select a source" onOptionSelect={handleSource}>
//                             {desktopSources.map(({ name, id }) => (
//                                 <Option
//                                     key={id.replaceAll(":", '')}
//                                     id={id.replaceAll(":", '')}
//                                     value={id}
//                                 >
//                                     {name}
//                                 </Option>
//                             ))}
//                         </Dropdown>
//                     </div>
//                 }
//             />
//         </div>
//     )
// }
