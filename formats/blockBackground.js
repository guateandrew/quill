import Parchment from 'parchment';
import { ColorAttributor } from './color';

let BlockBackgroundClass = new Parchment.Attributor.Class('blockBackground', 'ql-bg', {
  scope: Parchment.Scope.BLOCK
});
let BlockBackgroundStyle = new ColorAttributor('blockBackground', 'background-color', {
  scope: Parchment.Scope.BLOCK
});

export { BlockBackgroundClass, BlockBackgroundStyle };
