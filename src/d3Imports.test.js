import { select, local } from 'd3-selection';

// matrix.js relies on `selection.transition()`, which is NOT part of d3-selection --
// it is grafted onto selection.prototype as a side effect of importing d3-transition.
// Importing matrix.js here asserts that side-effect import is still in place; without
// it every tooltip fade in matrix.js throws "transition is not a function" at runtime.
import './matrix';

describe('d3 imports', () => {
  it('gives selections a transition() method', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);

    const sel = select(el).append('div').style('opacity', '0');
    expect(typeof sel.transition).toBe('function');

    // exercise the chain matrix.js actually uses for tooltip fades
    expect(() => sel.transition().delay(10).duration(150).style('opacity', 1)).not.toThrow();
  });

  it('provides the other d3 helpers matrix.js uses', () => {
    const el = document.createElement('div');
    expect(typeof local().set).toBe('function');
    expect(typeof select(el).raise).toBe('function');
  });
});
