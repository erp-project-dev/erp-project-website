import cfg from "./config";
import ReactGA from "react-ga";

ReactGA.initialize(cfg.GOOGLE_ANALYTICS_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

export default ReactGA;
