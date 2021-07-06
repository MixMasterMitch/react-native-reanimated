import { EasingFn } from '../Easing';

export type PrimitiveValue = number | string;

// TODO: maybe each type of animation should have own type of animation inherited from interface, and animated utils should use just these interface
export interface Animation {
  type?: string;
  onFrame: (animation?: Animation, timestamp?: number) => boolean; // TODO
  onStart: (
    nextAnimation: Animation,
    current: number,
    timestamp: number,
    previousAnimation: Animation
  ) => void; // TODO
  startValue?: number; // TODO number | string (?)
  toValue: number; // TODO number | string (?)
  current: number; // TODO
  callback?: AnimationCallback;
  isHigherOrder?: boolean; // TODO
  startTime?: number; // TODO
  easing?: EasingFn; // TODO
  lastTimestamp?: number; // TODO
  velocity?: number; // TODO
}

export interface AnimationConfig {
  tmp?: unknown;
} // TODO

export type AnimationCallback = (finished?: boolean) => unknown; // TODO

export type NextAnimation = Animation | (() => Animation);

export type SharedValue = {
  // TODO: just temporary mock
  value: unknown;
};

export type AnimationOnFrame = (animation: Animation, now: number) => boolean;
