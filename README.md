# LDCE Noise Tracker

<p align="center">
  <img src="logo/Screenshot 2026-04-20 104105.png" alt="LDCE Noise Tracker Logo" width="140"/>
</p>

<p align="center">
  <strong>Real-Time Environmental Noise Measurement Application for Mobile Devices</strong>
</p>

<p align="center">
  <a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3"/></a>
  <img src="https://img.shields.io/badge/Platform-Android-green.svg" alt="Platform: Android"/>
  <img src="https://img.shields.io/badge/Angular-19-red.svg" alt="Angular 19"/>
  <img src="https://img.shields.io/badge/Ionic-8-3880FF.svg" alt="Ionic 8"/>
  <img src="https://img.shields.io/badge/Capacitor-7-119EFF.svg" alt="Capacitor 7"/>
</p>

---

## Table of Contents

- [Introduction](#introduction)
- [Background and Motivation](#background-and-motivation)
- [Screenshots](#screenshots)
- [Key Features](#key-features)
- [Technical Specifications](#technical-specifications)
- [Technology Stack](#technology-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Android](#building-for-android)
- [Calibration Guide](#calibration-guide)
- [Localization](#localization)
- [Privacy Policy](#privacy-policy)
- [Team](#team)
- [License](#license)
- [Contact](#contact)

---

## Introduction

**LDCE Noise Tracker** is an open-source, cross-platform mobile application designed to measure real-time environmental sound pressure levels using built-in device microphones. The application transforms standard smartphones into functional sound level meters, enabling users to capture, analyze, visualize, and share noise measurement data.

The application provides comprehensive acoustic analysis tools including real-time level monitoring, 1/3 octave band analysis, FFT-based frequency decomposition, and spectrogram visualization. Measurement data can be saved locally, exported in standard formats (CSV/TXT), and optionally shared with the LDCE Noise Tracker community to support collaborative noise pollution research.

LDCE Noise Tracker is developed as an educational and citizen science initiative by students at L.D. College of Engineering (LDCE), Ahmedabad, Gujarat, India. The project aims to democratize access to environmental noise assessment tools and promote awareness of noise pollution in urban and rural settings across India and beyond.

> **Important Notice:** This application is not intended for professional or regulatory use. It does not guarantee measurement accuracy equivalent to certified sound level meters. Calibration against a reference instrument is required before relying on any measurement values. The calibrations and measurements shared with the community are used for statistical and educational purposes only and cannot be used to verify compliance with legal noise limits.

---

## Background and Motivation

Environmental noise pollution is a growing public health concern globally, particularly in rapidly urbanizing areas of India. Prolonged exposure to elevated noise levels has been linked to hearing impairment, cardiovascular disease, sleep disturbance, reduced cognitive performance, and diminished quality of life.

Professional-grade sound level meters are expensive instruments that remain inaccessible to the general public, educators, and community organizations. Meanwhile, nearly every person carries a smartphone equipped with a microphone capable of capturing acoustic signals.

LDCE Noise Tracker bridges this gap by providing a free, open-source tool that leverages the ubiquity of smartphones to enable first-level noise assessments. While no substitute for professional instrumentation, the application serves several important purposes:

- **Educational use** — Students and educators can use the app to teach and learn fundamental concepts of acoustics, sound pressure levels, frequency analysis, and environmental noise assessment.
- **Citizen science** — Community members can contribute geolocated noise measurements to a shared dataset, helping to build a crowd-sourced picture of noise environments across different locations.
- **Personal awareness** — Individuals can monitor their daily noise exposure in workplaces, homes, transport, and recreational settings to make informed decisions about hearing protection.
- **Research support** — Researchers and local authorities can use aggregate community data as a supplementary resource for identifying noise hotspots and understanding spatial and temporal patterns of noise pollution.

The project draws inspiration from citizen science initiatives in environmental monitoring and seeks to promote a culture of acoustic awareness and data-driven environmental stewardship.

---

## Screenshots

<p align="center">
  <img src="assets/screenshots/1.jpeg" width="150" />
  <img src="assets/screenshots/2.jpeg" width="150" />
  <img src="assets/screenshots/3.jpeg" width="150" />
  <img src="assets/screenshots/4.jpeg" width="150" />
  <img src="assets/screenshots/5.jpeg" width="150" />
</p>

---

## Key Features

### Real-Time Noise Measurement

The core functionality of LDCE Noise Tracker is the real-time measurement of sound pressure levels. The application captures audio input from the device microphone and computes instantaneous and time-averaged noise levels. Supported acoustic parameters include:

- **LAeq(1s)** — A-weighted equivalent continuous sound pressure level over the last one second
- **LAeq(t)** — A-weighted equivalent continuous sound pressure level from the start of the measurement
- **LAmin** — Minimum A-weighted sound pressure level since measurement start
- **LAmax** — Maximum A-weighted sound pressure level since measurement start
- **LZeq(1s)** — Z-weighted (unweighted) equivalent level over the last second
- **LZeq(t)** — Z-weighted equivalent level from measurement start
- **LZmin / LZmax** — Minimum and maximum Z-weighted levels

Users can start, pause, resume, and reset measurements at any time. An optional configurable countdown timer (0 to 10 seconds) provides a delay before measurement begins, allowing time to position the device.

### Frequency Analysis and Visualization

LDCE Noise Tracker provides four distinct visualization modes for analyzing noise data:

1. **Global Level Chart** — A time-series plot displaying the temporal evolution of LAmin, LAeq(1s), LAmax, and LAeq(t) over the duration of the measurement. This chart provides an overview of noise level fluctuations and allows users to identify peaks and quiet periods.

2. **1/3 Octave Band Spectrum** — A frequency spectrum display showing sound pressure levels in standardized 1/3 octave bands. This view displays LZeq(t), LZeq(1s), LZmin, and LZmax across the frequency range, enabling users to identify the dominant frequency components of the noise environment.

3. **Sonogram (Spectrogram)** — A time-frequency representation of LZeq(1s) levels across 1/3 octave bands, displayed as a heat map. This visualization reveals how the frequency content of noise changes over time, which is useful for identifying intermittent tonal sources.

4. **FFT Spectrum** — A constant-bandwidth frequency spectrum computed using the Fast Fourier Transform algorithm. Both Z-weighted (LZeq(1s)) and A-weighted (LAeq(1s)) spectra are displayed, providing fine-grained frequency resolution.

All charts are interactive, powered by Plotly.js, and allow users to enable or disable individual parameters by tapping the chart legend.

### Data Management and Export

LDCE Noise Tracker includes robust data management capabilities:

- **File Saving** — Measurement data is saved to structured text files (CSV or TXT format). No audio is recorded; only computed sound level values are stored. File saving is activated via the Save button in the noise meter interface.
- **Configurable Export Format** — Users can configure the decimal separator (point or comma), field separator (semicolon, comma, or pipe), file extension (.txt or .csv), and date format (Y-M-D, D-M-Y, or M-D-Y) to suit regional preferences and software compatibility.
- **Optional Data Fields** — In addition to global levels, users can optionally save 1/3 octave band LZeq levels, 1/3 octave band LZmin levels, and debug parameters.
- **Marker Insertion** — When file saving is active, a Marker button is enabled, allowing users to tag events of interest in both the chart and the log file for later review.
- **File Operations** — Saved measurement files can be renamed, deleted, opened for preview, and shared via the device sharing interface. A built-in file viewer provides basic inspection of the data.
- **Metadata Compilation** — For each measurement, users can record contextual metadata including a free-text description, measurement condition (outdoor, indoor with open/closed windows), environment type (urban, rural, wilderness), primary noise source category, weather conditions, subjective perception of the soundscape, and the reason for taking the measurement. This metadata follows the framework of ISO/TS 12913-2:2018 (Acoustics — Soundscape).

### Interactive Map

The map feature provides spatial visualization of noise measurements:

- **Geolocated Measurements** — Measurements that include GPS coordinates are displayed as markers on an interactive Leaflet map.
- **Base Map Options** — Users can switch between topographic and orthophoto base maps.
- **Filtering** — Measurements can be filtered to show only the user's own data or community-submitted data.
- **Marker Clustering** — When many measurements are present in a small area, markers are automatically clustered for readability, with cluster counts displayed.
- **Measurement Details** — Tapping a marker displays the details of the associated measurement.

### Device Calibration

Since different devices have varying microphone responses, calibration is essential for obtaining reliable measurements. LDCE Noise Tracker includes a built-in calibration system:

- Compare the sound level measured by LDCE Noise Tracker with a known value from a professional sound level meter or a previously calibrated reference device.
- Set a calibration offset (in dBA) that is applied to all subsequent measurements.
- Recommended calibration values are provided as starting points (+24.0 dBA for iOS devices; Android values vary by model).
- Calibration values can be shared with the community to help build a database of device-specific calibration references.

### Community Data Sharing

LDCE Noise Tracker supports voluntary, anonymous sharing of calibration and measurement data:

- **Calibration Sharing** — Users can submit their device calibration value along with device model information. This data contributes to a growing database of model-specific calibration references.
- **Measurement Sharing** — Individual measurements, including their metadata and GPS coordinates, can be submitted to the community. All shared measurements are visible on the community map.
- **Privacy by Design** — No personal identification data is transmitted. Sharing is entirely opt-in and requires acceptance of the privacy notice.

### Settings and Customization

The application offers extensive customization options:

- **Level in Evidence** — Choose which acoustic parameter is prominently displayed during measurement.
- **Sound Level Axis Range** — Configure the minimum and maximum values for the Y-axis in charts.
- **Auto-Start** — Enable or disable automatic start of measurement when the app is launched.
- **Countdown Timer** — Set a 0–10 second delay before measurement begins.
- **Screen Orientation** — Lock or rotate the display orientation.
- **Frequency Range** — Configure the frequency range for analysis (recommended ranges are indicated).
- **Theme** — Choose between Light, Dark, or Auto (system) color modes.

---

## Technical Specifications

| Parameter | Details |
|-----------|---------|
| Measurement type | Real-time sound pressure level |
| Weighting | Linear Z (unweighted) and A-weighted |
| Time averaging | 1-second intervals and cumulative |
| Frequency analysis | 1/3 octave bands and FFT |
| Supported levels | LAeq(1s), LAeq(t), LAmin, LAmax, LZeq(1s), LZeq(t), LZmin, LZmax |
| Data output | CSV / TXT with configurable formatting |
| Calibration | User-adjustable offset in dBA |
| Geolocation | GPS coordinates attached to measurements |
| Metadata | ISO/TS 12913-2:2018 aligned soundscape descriptors |
| Languages | English, Italian |
| Platform | Android |

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| UI Framework | [Ionic 8](https://ionicframework.com/) | Cross-platform mobile UI components |
| Application Framework | [Angular 19](https://angular.dev/) | Application logic, routing, services |
| Native Runtime | [Capacitor 7](https://capacitorjs.com/) | Native device API access (GPS, filesystem, clipboard, etc.) |
| Charts | [Plotly.js](https://plotly.com/javascript/) | Interactive data visualization |
| Maps | [Leaflet](https://leafletjs.com/) + [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) | Map rendering and marker clustering |
| Audio Input | [cordova-plugin-audioinput](https://github.com/niclaslindstedt/cordova-plugin-audioinput) | Raw audio capture from device microphone |
| Signal Processing | [fourier-transform](https://www.npmjs.com/package/fourier-transform) | FFT computation for frequency analysis |
| PDF Viewer | [ng2-pdf-viewer](https://www.npmjs.com/package/ng2-pdf-viewer) | In-app PDF document viewing |
| Date Utilities | [date-fns](https://date-fns.org/) | Date formatting and manipulation |
| Language | TypeScript 5.6 | Type-safe application development |

---

## Architecture Overview

LDCE Noise Tracker follows a modular Angular architecture with standalone components. The application is organized into five primary feature modules, each corresponding to a tab in the bottom navigation:

```
+------------------------------------------------------------------+
|                        LDCE Noise Tracker                        |
+------------------------------------------------------------------+
|                                                                  |
|  +------------+  +--------+  +-----+  +----------+  +------+    |
|  | NoiseMeter |  | Saved  |  | Map |  | Settings |  | Info |    |
|  |    Page     |  | Data   |  |     |  |          |  |      |    |
|  +------+-----+  +---+----+  +--+--+  +----+-----+  +--+---+    |
|         |             |         |           |           |        |
|  +------v-------------v---------v-----------v-----------v---+    |
|  |                   Shared Services                         |    |
|  |  - VariabiliService (state, translations, GPS)           |    |
|  |  - PreferencesService (persistent settings)              |    |
|  +----------------------------------------------------------+    |
|                                                                  |
|  +----------------------------------------------------------+    |
|  |               Capacitor Native Plugins                    |    |
|  |  Geolocation | Filesystem | Clipboard | Share | Network  |    |
|  |  App | Device | Preferences | StatusBar | ScreenOrientation |  |
|  +----------------------------------------------------------+    |
|                                                                  |
|  +----------------------------------------------------------+    |
|  |                    Cordova Plugins                         |    |
|  |           AudioInput | ScreenOrientation                  |    |
|  +----------------------------------------------------------+    |
+------------------------------------------------------------------+
```

- **NoiseMeter Page** — The primary measurement interface. Handles audio capture, level computation, chart rendering, and data saving.
- **SavedData Page** — Lists saved measurement files with options to view, rename, delete, share, and edit metadata. Supports compact, normal, and full view modes.
- **Map Page** — Renders geolocated measurements using Leaflet with filtering and clustering.
- **Settings Page** — Manages user preferences, calibration, data export configuration, and display options.
- **Info Page** — Provides technical information, tutorials, glossary, origin and purpose, community details, privacy policy, contacts, credits, and team information.

---

## Project Structure

```
LDCE_Noice_Tracker/
|
+-- android/                        Android native project (Capacitor-managed)
|   +-- app/
|       +-- src/main/
|           +-- assets/public/      Built web assets copied by Capacitor
|           +-- res/                Android resources (icons, splash screens)
|           +-- AndroidManifest.xml Application manifest
|
+-- assets/                         Capacitor asset sources
|   +-- icon.png                    Application icon source
|   +-- splash.png                  Splash screen source (light)
|   +-- splash-dark.png             Splash screen source (dark)
|   +-- screenshots/                Application screenshots (1-5.jpeg)
|
+-- logo/                           Project logo files
|
+-- src/                            Application source code
|   +-- app/
|   |   +-- components/             Shared reusable UI components
|   |   +-- pages/
|   |   |   +-- noisemeter/         Noise measurement interface
|   |   |   +-- map/                Interactive measurement map
|   |   |   +-- savedata/           Saved measurement file browser
|   |   |   +-- settings/           Application settings and calibration
|   |   |   +-- info/               Information, credits, and documentation
|   |   |   +-- tabs/               Tab-based navigation layout
|   |   +-- services/
|   |       +-- variabili.service.ts   Global state, translations, GPS utilities
|   |       +-- preferences.service.ts Persistent storage via Capacitor Preferences
|   |
|   +-- assets/
|   |   +-- i18n/
|   |   |   +-- en.json             English translation file
|   |   |   +-- it.json             Italian translation file
|   |   +-- icon/                   SVG icons for UI elements
|   |
|   +-- theme/                      Global styles and Ionic CSS variables
|   +-- index.html                  Application entry point
|   +-- main.ts                     Angular bootstrap
|
+-- www/                            Built web assets (output directory)
+-- capacitor.config.ts             Capacitor configuration
+-- angular.json                    Angular CLI configuration
+-- package.json                    Dependencies and scripts
+-- tsconfig.json                   TypeScript configuration
+-- LICENSE                         GNU General Public License v3.0
+-- README.md                       This file
```

---

## Prerequisites

Before setting up the development environment, ensure the following tools are installed:

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | v18 or later | JavaScript runtime |
| [npm](https://www.npmjs.com/) | v9 or later | Package manager |
| [Android Studio](https://developer.android.com/studio) | Latest stable | Android build tools and emulator |
| [Java JDK](https://adoptium.net/) | 17 | Required by the Android Gradle build system |
| [Git](https://git-scm.com/) | Latest | Version control |

---

## Installation

Clone the repository and install all dependencies:

```bash
# Clone the repository
git clone https://github.com/Development-With-Dev/LDCE_Noice_Tracker.git
cd LDCE_Noice_Tracker

# Install Node.js dependencies
npm install
```

---

## Development

### Running the Development Server

Start a local development server for browser-based testing:

```bash
npm start
```

The application will be available at `http://localhost:4200/`. The server supports hot-reload and will automatically reflect source code changes.

**Note:** Audio capture, GPS, filesystem access, and other native features require a physical Android device and will not function in the browser environment.

### Building Web Assets

To compile the application for production:

```bash
npx ng build
```

The compiled output is written to the `www/` directory.

### Syncing with Android

After building, synchronize the web assets and plugin dependencies with the Android project:

```bash
npx cap sync android
```

### Opening in Android Studio

```bash
npx cap open android
```

This opens the `android/` project in Android Studio, where you can run and debug on a connected device or emulator.

---

## Building for Android

### Debug APK

```bash
# Step 1: Build the web assets
npx ng build

# Step 2: Sync with Android
npx cap sync android

# Step 3: Open in Android Studio
npx cap open android
```

In Android Studio, select **Build > Build Bundle(s) / APK(s) > Build APK(s)**. The debug APK will be generated at:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Production APK

For a production build with optimizations:

```bash
npx ng build --configuration production
npx cap sync android
```

Then build a signed APK or App Bundle through Android Studio using your release keystore.

---

## Calibration Guide

Calibration is critical for obtaining meaningful measurements. Each device model has a unique microphone response, and the calibration process determines a correction offset that is applied to all readings.

### Steps

1. **Obtain a reference** — Use one of the following as a reference:
   - A professional sound level meter (most accurate)
   - Another device that has already been calibrated
   - An iOS device set to the recommended value of +24.0 dBA

2. **Measure a constant source** — Place both the reference device and your phone at the same location. Measure the sound level from a constant noise source simultaneously on both devices.

3. **Calculate the offset** — Subtract the LDCE Noise Tracker reading from the reference reading.
   - Example: Reference = 58.0 dBA, LDCE Noise Tracker = 52.3 dBA, Offset = +5.7 dBA

4. **Apply the calibration** — Open Settings > Calibration, set the integer and decimal parts of the offset, and confirm.

5. **Verify** — After calibration, both devices should display the same level for the same source. If not, repeat the process.

### Dynamic Range

Even after calibration, smartphones cannot accurately measure sound levels beyond a certain dynamic range. It is important to determine the upper and lower bounds of reliable measurement for your specific device through comparison with a professional instrument. Measurements outside this range may be unreliable.

---

## Localization

LDCE Noise Tracker supports multiple languages. Translation files are stored as JSON in the `src/assets/i18n/` directory:

| File | Language |
|------|----------|
| `en.json` | English |
| `it.json` | Italian |

To add a new language:

1. Create a new JSON file (e.g., `hi.json` for Hindi) following the same key structure as `en.json`.
2. Register the language in the application's language selection logic within `VariabiliService`.
3. Rebuild the application.

All user-facing strings, including technical terms, settings labels, error messages, and informational content, are externalized in these translation files.

---

## Privacy Policy

LDCE Noise Tracker is designed with privacy as a fundamental principle:

- **No personal data collection** — The application does not collect, store, or transmit names, email addresses, phone numbers, or any other personally identifiable information.
- **No audio recording** — The microphone is used solely for real-time sound level computation. No audio data is recorded, stored, or transmitted at any point.
- **GPS data** — Location data is obtained only when the user explicitly chooses to save or share a geolocated measurement. GPS coordinates are not collected passively or in the background.
- **Community data sharing** — Calibration and measurement data can be voluntarily shared with the community. All submissions are anonymous. Sharing requires explicit acceptance of the privacy notice within the application.

---

## Team

| # | Name |
|---|------|
| 1 | **Dev Gondaliya** |
| 2 | **Jigar Ghoghari** |
| 3 | **Dev Bhavsar** |
| 4 | **Dev Letwala** |
| 5 | **Kaushal Yadav** |

**Institution:** L.D. College of Engineering (LDCE), Ahmedabad, Gujarat, India  
**Department:** Computer Engineering

---

## License

This project is licensed under the **GNU General Public License v3.0**.

```
LDCE Noise Tracker - Real-Time Environmental Noise Measurement Application
Copyright (C) 2026  Dev Gondaliya

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
```

See the [LICENSE](LICENSE) file for the complete license text.

---

## Contact

For bug reports, feature requests, questions, or contributions:

- **Email:** gondaliyadev007@gmail.com
- **GitHub:** [github.com/Development-With-Dev/LDCE_Noice_Tracker](https://github.com/Development-With-Dev/LDCE_Noice_Tracker)

Contributions are welcome. Please open an issue to discuss proposed changes before submitting a pull request.

---

<p align="center">
  Developed at L.D. College of Engineering, Ahmedabad, India
</p>
