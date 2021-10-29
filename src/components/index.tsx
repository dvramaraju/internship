import { lazy } from "react";
import { Persons } from "./interface";
import { Loading } from "./Loading";

// const Header = lazy(() => import("./Header"));
const Header = lazy(() => import("./Header").then(({ Header }) => ({ default: Header })));
// const Loading = lazy(() => import("./Loading").then(({ Loading }) => ({ default: Loading })));

export { Header, Loading };
export type { Persons }
