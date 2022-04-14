import React, { useState, useEffect, useRef, useContext } from "react";
import "./DrumMachine.css";
import { MyAudioContext } from "./AudioPlayer";
import * as Tone from "tone";
import styled from 'styled-components';

//Button
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`; 

//Slider 
// excess height to improve interactive area / accessibility
const height = "26px";
const thumbHeight = 36;
const trackHeight = "16px";
// Slider colours
const upperColor = "#ffffff ";
const lowerColor = "#000000";
const thumbColor = "#000000";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
	let i = 16;
	let shadow = `${i}px 0 0 ${size} ${color}`;
	for (; i < 706; i++) {
	  shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
	}
	return shadow;
  };

const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
 
  max-width: 700px;
  width: 90%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: "#000000";
    border-radius: 0%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-10px")};
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }
`;



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


	
	const random = (min, max) => Math.random() * (max - min) + min;
	


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
			
				<Range
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
					type="range" 
				></Range>
		
			</span>
			<span className="vol-box2">
				<label htmlFor="vol">VolumeChannelTwo</label>
	
				<Range
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
					type="range" 
				></Range>
			
			</span>
			<span className="pitch-box">
				<label htmlFor="vol">Pitch1</label>

				<Range
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
					type="range" 
				></Range>

			</span>

			<span className="pitch-box2">
				<label htmlFor="vol">Pitch2</label>
			
				<Range
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
					type="range" 
				></Range>
			
			</span>
			<span className="filter-box">
				<label htmlFor="vol">Filter1</label>
		
				<Range
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
					type="range" 
				></Range>
			
			</span>
			<span className="filter-box2">
				<label htmlFor="vol">Filter2</label>
		
				<Range
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
					type="range" 
				></Range>
		
			</span>
		</div>
	);
}


