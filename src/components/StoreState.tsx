import { useSelector } from "react-redux";
import { ObjectInspector, chromeLight } from "react-inspector";

export function StoreState() {
  const state = useSelector((state) => state);
  return (
    <ObjectInspector
      name="store"
      data={state}
      expandLevel={2}
      theme={{ ...chromeLight, ...{ TREENODE_FONT_SIZE: 18 } }}
    />
  );
}
