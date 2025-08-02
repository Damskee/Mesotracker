# AI Development Guide for Hypertrophy Training Tracker App

This document is for the AI coding assistant working in VS Code. It contains instructions, architecture guidelines, and functional requirements for building a robust, scalable, and bug-resistant training tracker web app based on Renaissance Periodization (RP) hypertrophy principles.

---

## 1. **Project Overview**

Goal: Build a hypertrophy-focused training tracker app that allows:
- Mesocycle planning (4–8 weeks + deload week)
- Customizable training splits (2–6 days/week)
- Exercise database (built-in + custom exercises)
- Post-exercise feedback (pump, perceived effort, joint pain, recovery)
- Autoregulation logic to adjust sets, reps, and load each week based on feedback
- Flexible scheduling (session can be logged on any day)
- Metric choice: kg or lbs
- Clear, scalable structure to avoid breakages when adding features

---

## 2. **Architecture Guidelines**

- Use **React (TypeScript)** for the front-end
- Use **Node.js (TypeScript) + Express** for the backend
- Database: MongoDB or PostgreSQL (whichever suits scalability)
- Use **API-first design** with RESTful endpoints returning JSON
- Separate concerns: 
  - Front-end UI components
  - Backend services and controllers
  - Database models
  - Business logic (e.g., autoregulation calculations) in isolated modules

---

## 3. **Coding Standards**

- Follow **SOLID principles** and clean code practices
- Use **strict typing** (TypeScript everywhere)
- Write **descriptive variable/function names**
- Add **comments and JSDoc** for every function
- Avoid duplicated logic – use shared utility functions

---

## 4. **Testing & CI/CD**

- Implement **unit tests** for all key functions
- Add **end-to-end tests** for main user flows
- Set up **GitHub Actions** or similar to auto-run tests on commits
- Never merge untested code into main branch

---

## 5. **UI Stability**

- Component-based architecture in React
- Use Storybook or similar for isolated UI testing
- Ensure changes to one screen/component do not affect others

---

## 6. **Error Handling**

- Gracefully handle errors with user-friendly messages
- Log technical details to console or server logs

---

## 7. **Documentation**

- Maintain a **README.md** for each module
- Explain:
  - Purpose of module
  - Inputs and outputs
  - How to modify safely
- Include a **high-level architecture diagram**

---

## 8. **Core Data Models**

### User
- id
- name
- unitPreference ("kg" | "lbs")
- goal ("hypertrophy" | "strength")
- priorityMuscles []
- wellnessLog [{date, sleepHours, mood, stress, appetite}]

### Exercise
- id
- name
- type ("barbell", "dumbbell", "machine", "smith machine", "cable", "bodyweight", "bodyweight loadable", "machine assisted")
- muscleGroups []
- loadType ("kg" | "lbs" | "bodyweight")
- userCreated (boolean)

### WorkoutSession
- userId
- date
- workoutName
- exercises: [ {exerciseId, sets: [{weight, reps, rir, pump, perceivedEffort, jointPain, recoveryRating}]} ]
- sessionNotes

### Mesocycle
- userId
- startDate
- weeks
- includesDeload
- daysPerWeek
- plannedSplit {Mon:"Push A", Tue:null,...}
- actualLogs [WorkoutSession]

---

## 9. **Autoregulation Logic**

Based on RP training principles:
- Start week 1 at MEV (minimum effective volume)
- Increase sets weekly until:
  - Pump is high and performance is progressing → keep adding sets until MRV
  - Poor recovery, high fatigue, or joint pain → maintain or reduce sets
- If progression stalls or fatigue accumulates → trigger deload
- MRV, MEV, MAV values stored per muscle group, updated dynamically

---

## 10. **Development Process**

- Each feature in its **own branch**
- Explain code in **plain English** after writing it
- Document risks of breakage and mitigations
- Ensure all tests pass before merging

---

By following these guidelines, the app should be scalable, maintainable, and resistant to breakage when new features or changes are introduced.
