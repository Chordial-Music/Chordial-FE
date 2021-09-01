import * as Tone from 'tone';

const synth = new Tone.PolySynth().toDestination();
synth.set({ detune: -1200 });

