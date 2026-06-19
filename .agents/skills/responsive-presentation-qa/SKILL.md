---
name: responsive-presentation-qa
description: Use for responsive QA, mobile QA, iPhone Pro Max checks, Safari layout review, presentation viewport testing, mobile overflow, portrait/landscape presentation quality, or responsive web-presentation validation.
---

# Responsive Presentation QA Skill

## Purpose

Проверять, что web-презентация одинаково убедительно работает на desktop и iPhone Pro Max-class devices.

## Target environments

Обязательно учитывать:

- desktop Chrome;
- desktop Safari;
- iPhone Safari portrait;
- iPhone Safari landscape;
- iPhone Pro Max начиная с iPhone 14 Pro Max;
- Safari `aA` scale behavior, если возможно.

## Review checklist

### Desktop

- layout stable;
- no horizontal overflow;
- navigation works;
- charts readable;
- motion smooth;
- no clipped content;
- typography strong.

### iPhone portrait

- headline readable;
- no horizontal overflow;
- cards do not overlap;
- charts transform or simplify;
- navigation does not cover content;
- tap targets usable;
- motion smooth;
- spacing intentional.

### iPhone landscape

- critical content not clipped;
- navigation usable;
- charts readable enough;
- no horizontal overflow;
- fixed elements safe;
- layout feels designed, not broken.

### Safari risks

Check for:

- dynamic viewport height issues;
- fixed element overlap;
- `100vh` problems;
- safe-area insets;
- font scaling;
- scroll locking issues;
- touch gesture conflicts;
- animation jank.

## Output format

Давай результат так:

1. Summary risk level: low / medium / high.
2. Desktop risks.
3. iPhone portrait risks.
4. iPhone landscape risks.
5. Safari-specific risks.
6. P0/P1/P2 fixes.
7. Manual checks user must perform on real device.
8. Suggested future automated checks.
