export const SERVICE_UUID = "4798e0f2-0000-4d68-af64-8a8f5258404e";
export const GESTURE_CHARACTERISTID_UUID =
  "4798e0f2-300b-4d68-af64-8a8f5258404e";
export const STROKE_CHARACTERISTID_UUID =
  "4798e0f2-300a-4d68-af64-8a8f5258404e";

export const getDataFromDataView = (dataView) => {
  let gestureString = "";

  for (let i = 0; i < dataView.byteLength; i++) {
    gestureString += String.fromCharCode(dataView.getUint8(i));
  }

  return gestureString;
};
