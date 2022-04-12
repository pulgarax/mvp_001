import React from "react";
import "./Poti.css";
import styled from 'styled-components';

const random = (min, max) => Math.random() * (max - min) + min;

// excess height to improve interactive area / accessibility
const height = "30px";
const thumbHeight = 36;
const trackHeight = "16px";
// colours
const upperColor = "#ffffff ";
const lowerColor = "#000000";
const thumbColor = "#000000";
const thumbHoverColor = "#000000";
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

const Wrapper = styled.div`
  /* width:100%; */
`;
const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

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

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &:focus {
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

export default function Poti(props) {
  return (
    <Wrapper>
    <input
      value={props.value}
      type="range"
      onChange={props.volume}
      min={props.type === "vol"}
      {...props}
    ></input>
       </Wrapper>
  );
}
