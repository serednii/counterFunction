
import { createCounter } from "./model";
import { createView } from "./view";
const INITIAL_COUNTER = 0;

export const counter = createCounter(INITIAL_COUNTER);
export const view = createView();
view.render({counter: 54});


