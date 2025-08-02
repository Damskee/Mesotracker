# TRAINING_LOGIC_RULES.md

This file provides the core training logic derived from Renaissance Periodization resources: “How Much Should I Train?”, “Scientific Principles of Hypertrophy Training”, and “RP Mini Guide to Muscle Gain.” It is designed to guide the AI agent in building autoregulation logic, feedback interpretation, and volume/intensity progressions.

---

## 🔁 Mesocycle Structure

- **Duration**: Typically 4–6 weeks of progression, followed by 1 week of deload.
- **Deload**:
  - Halve number of sets and reduce load by ~50%
  - Trigger if fatigue accumulates or progress stalls
- **Training days per week**: 2–6
- **Each day targets specific muscle groups** (e.g., Push A, Pull A, Legs B, etc.)

---

## 📊 Volume Landmarks

| Term | Description |
|------|-------------|
| **MEV** | Minimum Effective Volume — fewest hard sets needed to make gains |
| **MAV** | Maximum Adaptive Volume — optimal range for growth |
| **MRV** | Maximum Recoverable Volume — most you can train and still recover |

- Begin mesocycles close to MEV and increase weekly toward MRV.
- Each muscle group has its own MEV/MAV/MRV.

---

## ⚙️ Autoregulation Logic

Use user feedback after each exercise to determine how to adjust volume or load for the next week:

### Feedback Inputs
- **Pump (1–5)**: How much blood flow/pump occurred
- **Perceived Effort (1–10 or descriptive)**: Was it hard to complete?
- **Joint Pain**: Yes/No or severity scale
- **Recovery (1–5)**: How recovered did the muscle feel going into the session?

### Decision Rules (example thresholds)

| Condition | Adjustment |
|----------|------------|
| Recovery 4–5 + Pump ≤ 2 + Effort low | Add 1 set next week |
| Recovery ≤ 2 + Effort high + Pump high | Maintain or reduce set |
| Joint Pain reported | Flag exercise to swap/replace |
| Performance declines >2 sessions | Trigger deload |
| Fatigue metrics (mood, sleep, stress) poor | Delay progression, consider deload |

---

## 🧠 Principles to Embed

### 1. **Specificity**
- Choose exercises that match user goals (hypertrophy bias = moderate rep, controlled tempo)

### 2. **Overload**
- Progressively increase volume or intensity week-to-week

### 3. **Fatigue Management**
- Use deloads, autoregulated volume, exercise rotation to prevent overreaching

### 4. **Variation**
- Slight exercise changes between mesocycles to reduce stagnation and joint stress

### 5. **SRA (Stimulus-Recovery-Adaptation)**
- Plan session spacing and frequency by body part to align with user’s recovery rate

---

## 💪 Muscle Group Prioritization

Allow users to identify “lagging” muscle groups → app gives slightly higher volume or frequency to these.

---

## 🔧 Training Volume Guidelines (per week)

| Muscle Group | Typical MEV | MAV Range | MRV |
|--------------|-------------|-----------|-----|
| Chest        | 10          | 12–20     | 22  |
| Back         | 10          | 14–22     | 25  |
| Quads        | 8           | 12–18     | 22  |
| Hamstrings   | 6           | 10–16     | 20  |
| Shoulders    | 6           | 12–20     | 25  |
| Biceps       | 8           | 14–22     | 26  |
| Triceps      | 8           | 12–20     | 24  |
| Calves       | 10          | 12–20     | 25  |
| Abs          | 6           | 10–20     | 25  |

> Volume = number of hard working sets per muscle per week.

---

## 📈 Performance Tracking

- Track estimated volume and intensity per muscle per week
- Detect plateaus and regressions
- Adjust recommendations based on actual session data

---

This training logic should guide how the app adjusts volume, weight, and deload timing to maximise hypertrophy while preventing overtraining.
