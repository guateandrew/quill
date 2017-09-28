import Parchment from 'parchment';
import { ColorAttributor } from './color';

let BlockBackgroundClass = new Parchment.Attributor.Class('background', 'ql-bg', {
  scope: Parchment.Scope.BLOCK
});
let BlockBackgroundStyle = new ColorAttributor('background', 'background-color', {
  scope: Parchment.Scope.BLOCK
});

export { BlockBackgroundClass, BlockBackgroundStyle };
