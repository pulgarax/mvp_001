import React, { useState, useEffect, useRef, useMemo } from "react";
import { Player } from "tone";
import Sound from "./weirdDrum.mp3";
import SecondSound from "./nuevo9.mp3";
import * as Tone from "tone";

export const MyAudioContext = React.createContext();

const initialFilterFrequencyOne = 5000;
const initialFilterFrequencyTwo = 5000;
const initialVolumeValueOne = 2;
const initialVolumeValueTwo = 2;
const initialPitchValueOne = 1;
const initialPitchValueTwo = 1;

export const AudioProvider = ({ children }) => {
	const playerOne = useMemo(() => new Player(Sound), []);
	const playerTwo = useMemo(() => new Player(SecondSound), []);

	const [volumeValueOne, setVolumeValueOne] = useState(initialVolumeValueOne);
	useEffect(() => {
		playerOne.volume.value = volumeValueOne;
	});

	const [volumeValueTwo, setVolumeValueTwo] = useState(initialVolumeValueTwo);
	useEffect(() => {
		playerTwo.volume.value = volumeValueTwo;
	});

	const [pitchValueOne, setPitchValueOne] = useState(initialPitchValueOne);
	useEffect(() => {
		playerOne.playbackRate = pitchValueOne;
	});

	const [pitchValueTwo, setPitchValueTwo] = useState(initialPitchValueTwo);

	useEffect(() => {
		playerTwo.playbackRate = pitchValueTwo;
	});

	useEffect(() => {
		playerOne.loop = true;
		playerTwo.loop = true;
	});

	const filter = useRef();

	const [filterFrequencyOne, setFilterFrequencyOne] = useState(
		initialFilterFrequencyOne
	);

	// this is the effect used for initializing all audio effects
	useEffect(() => {
		filter.current = new Tone.BiquadFilter(
			initialFilterFrequencyOne,
			"lowpass"
		).toDestination();
		playerOne.chain(filter.current);
	}, [playerOne]);

	// this effect updates the filter frequency when the filter state changes
	useEffect(() => {
		filter.current.set({ frequency: parseFloat(filterFrequencyOne) });
	}, [filterFrequencyOne]);

	const filterTwo = useRef();
	const [filterFrequencyTwo, setFilterFrequencyTwo] = useState(
		initialFilterFrequencyTwo
	);

	useEffect(() => {
		filterTwo.current = new Tone.BiquadFilter(
			initialFilterFrequencyTwo,
			"lowpass"
		).toDestination();
		playerTwo.chain(filterTwo.current);
	}, [playerTwo]);

	useEffect(() => {
		filterTwo.current.set({ frequency: parseFloat(filterFrequencyTwo) });
	}, [filterFrequencyTwo]);

	return (
		<MyAudioContext.Provider
			value={{
				playerOne,
				playerTwo,
				filterFrequencyOne,
				setFilterFrequencyOne,
				volumeValueOne,
				setVolumeValueOne,
				pitchValueOne,
				setPitchValueOne,
				volumeValueTwo,
				setVolumeValueTwo,
				filterFrequencyTwo,
				setFilterFrequencyTwo,
				pitchValueTwo,
				setPitchValueTwo,
			}}
		>
			{children}
		</MyAudioContext.Provider>
	);
};
