import React, { useState, useEffect, useRef, useContext } from "react";
import "./DrumMachine.css";
import Poti from "./Poti";
import { MyAudioContext } from "./AudioPlayer";
import * as Tone from "tone";

const random = (min, max) => Math.random() * (max - min) + min;

export default function TonePlayer() {
	const {
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
		pitchValueTwo,
		setPitchValueTwo,
		filterFrequencyTwo,
		setFilterFrequencyTwo,
	} = useContext(MyAudioContext);

	useEffect(() => {
		Tone.start();
	}, []);

	return (
		<div className="machine">
			<div>
				<button
					type="button"
					onClick={() => {
						playerOne.start();
						playerTwo.start();
					}}
				>
					Start Ton
				</button>
				<button
					type="button"
					onClick={() => {
						playerOne.stop();
						playerTwo.stop();
					}}
				>
					Stop Ton
				</button>
			</div>
			<button
				onClick={() => {
					setPitchValueOne(random(0.001, 2));
					setPitchValueTwo(random(0.001, 2));
					setFilterFrequencyOne(random(0, 8000));
					setFilterFrequencyTwo(random(0, 8000));
				}}
			>
				randomizer
			</button>

			<span className="vol-box">
				<label htmlFor="vol">VolumeChannelOne</label>
				<Poti
					onChange={(event) => {
						setVolumeValueOne(event.target.value);
						console.log(event.target.value);
					}}
					value={volumeValueOne}
					id="volM"
					name="vol"
					min={-90}
					max={3}
					step="0.1"
				></Poti>
			</span>
			<span className="vol-box2">
				<label htmlFor="vol">VolumeChannelTwo</label>
				<Poti
					onChange={(event) => {
						setVolumeValueTwo(event.target.value);
						console.log(event.target.value);
					}}
					value={volumeValueTwo}
					id="volM2"
					name="vol2"
					min={-90}
					max={3}
					step="0.1"
				></Poti>
			</span>
			<span className="pitch-box">
				<label htmlFor="vol">Pitch1</label>
				<Poti
					onChange={(event) => {
						setPitchValueOne(event.target.value);
						console.log(event.target.value);
					}}
					value={pitchValueOne}
					id="pitchM"
					name="vol"
					min={0.001}
					max={2}
					step="0.1"
				></Poti>
			</span>

			<span className="pitch-box2">
				<label htmlFor="vol">Pitch2</label>
				<Poti
					onChange={(event) => {
						setPitchValueTwo(event.target.value);
						console.log(event.target.value);
					}}
					value={pitchValueTwo}
					id="pitchM2"
					name="vol2"
					min={0.001}
					max={2}
					step="0.1"
				></Poti>
			</span>
			<span className="filter-box">
				<label htmlFor="vol">Filter1</label>
				<Poti
					onChange={(event) => {
						setFilterFrequencyOne(event.target.value);
						console.log(event.target.value);
					}}
					value={filterFrequencyOne}
					id="filterM"
					name="fil"
					min={0}
					max={8000}
					step="0.1"
				></Poti>
			</span>
			<span className="filter-box2">
				<label htmlFor="vol">Filter2</label>
				<Poti
					onChange={(event) => {
						setFilterFrequencyTwo(event.target.value);
						console.log(event.target.value);
					}}
					value={filterFrequencyTwo}
					id="filterM2"
					name="fil2"
					min={0}
					max={8000}
					step="0.1"
				></Poti>
			</span>
		</div>
	);
}
