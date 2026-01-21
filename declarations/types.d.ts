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

  type BoneControl = {
    control_object: SandboxObject | null;
    alpha: number;
    position_offset: Vector;
    rotation_offset: Vector;
    scale_offset: Vector;
    control_child_bones: boolean;
    bone_name: string;
  };

  type Material = object;

  type SexToy = object;

  type KeyframeData = {
    value: number | boolean | string | Color | Vector;
    in_tangent: number;
    out_tangent: number;
    tangent_mode: string;
    in_tangent_type: string;
    out_tangent_type: string;
    time: number;
  };

  type ObjectTrackData = {
    guid: string;
    group_name: string;
  };

  type KeyframeTrackData = {
    type: string;
    tag: string;
  };

  type ObjectTrack = {
    guid: string;
    group_name: string;
    sub_tracks: Table;
  };

  type KeyframeTrack = {
    type: string;
    tag: string;
    num_tracks: number;
  };

  type EventData = {
    event_name: string;
    event_value: string;
  };
}
