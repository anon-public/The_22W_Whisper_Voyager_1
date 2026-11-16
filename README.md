
<div align='center'>

<img width="535" height="570" alt="image" src="https://github.com/user-attachments/assets/37c078eb-6a95-4564-aab3-cd4fbf21bf72" ></img>

### The 22W Whisper Voyager 1
<i>
24.7 Billion Km Away & Still Going...
</i>



https://github.com/user-attachments/assets/6f8edcab-eef2-48b0-81ff-89c7e80504f5


</div>


# Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)


# Overview
An interactive, browser-based multimedia broadcast exploring the legacy of humanity's deep space missions. Built for the NASA Space Apps Challenge, this project synchronizes procedural space visuals, dynamic telemetry data, and ambient audio into a continuous cinematic web experience.

<b>Live Project Link:</b> https://the22wwhispervoyager1.netlify.app 

# Features
* **Interactive Timeline:** Scrubber-controlled chapter navigation with live telemetry decoding and synchronized UI updates.
* **Procedural Canvas Rendering:** Dynamic, math-driven visual reconstructions of cosmic events, including Voyager's trajectory, Apollo lunar lasers, and planetary atmospheric particle physics. 
* **Dynamic Sonification:** Real-time dual-harmonic radar chimes, atmospheric space drones, and synthesized data transitions generated natively in the browser.
* **Multi-Speed Narration:** Integrated voiceover engine with real-time speed controls (1x to 1.5x) and automatic background audio ducking.


# Tech Stack
- HTML 5
- CSS 3
- JavaScript

# Architecture
This project is built using a zero-dependency, local-first architecture for maximum performance and portability:
* **Frontend:** Vanilla HTML5, CSS3, and JavaScript (No external frameworks).
* **Graphics:** Native HTML5 `<canvas>` API for 2D rendering, masking, and particle systems.
* **Audio:** Web Audio API for custom oscillator synths, delay nodes, and alongside standard HTML5 `<audio>` for background tracks.
* **Speech:** Web Speech API for localized, on-the-fly text-to-speech narration.
* **Storage:** IndexedDB (`VoyagerBroadcastVaultV4`) for persistent, offline asset caching and blob conversion.


