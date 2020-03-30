// This will import your function from lunchMatcher.js and call it with
// the data provided.
import "./styles.css";
import data from "./data.json";
import lunchMatcher from "./lunchMatcher";

document.getElementById("app").innerHTML = lunchMatcher(data);
