import ReactGA from "react-ga";

ReactGA.initialize("G-WSVYWR5R0Z");
ReactGA.pageview(window.location.pathname + window.location.search);

export default ReactGA;
