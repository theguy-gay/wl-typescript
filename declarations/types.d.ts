/** @noSelfInFile */

declare namespace WildLife {
  type Table = object;

  type Data = string | Table;

  type SandboxObject = object;

  type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
  };

  type Vector = {
    x: number;
    y: number;
    z: number;
  };

  type ColorString = `r=${number},g=${number},b=${number},a=${number}`;

  type VectorString = `x=${number},y=${number},z=${number}`;

  type OptionColorString = `${string};${ColorString}`;

  type OptionVectorString = `${string};${VectorString}`;

  type RayCastHit = {
    did_hit: boolean;
    hit_point: WildLife.Vector;
    hit_normal: WildLife.Vector;
    time: number;
    distance: number;
    hit_sandbox_object: SandboxObject;
  };
}
