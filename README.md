# Smart Card Checkout

An interactive, animated credit card checkout UI built with vanilla HTML, CSS, and JavaScript. Features a live 3D card preview that updates as you type, real-time form validation, and a smooth payment success flow — no backend or payment gateway required.

![Made with](https://img.shields.io/badge/HTML-CSS-JS-orange)

## Features

- **Live card preview** — card number, holder name, and expiry update on the 3D card in real time as you type
- **Auto brand detection** — recognizes VISA and Mastercard number patterns
- **3D flip animation** — the card flips to show the back when the CVV field is focused
- **Form validation** — inline error messages for invalid card number, name, expiry, and CVV
- **Loading + success states** — animated spinner on submit, followed by a success screen with a confetti celebration
- **Fully responsive** — adapts down to mobile screen sizes

## Demo

Open `index.html` in any modern browser — no build step, no dependencies, no server needed.

## Project Structure

```
├── index.html    # Page structure and form markup
├── style.css     # Styling, layout, and animations
└── script.js     # Card preview logic, validation, and interactions
```

## Getting Started

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   ```
2. Open `index.html` directly in your browser, or serve it with any static file server.

## Notes

- This is a **front-end UI demo only** — it does not process real payments and has no backend.
- Do not enter real card details when testing; all fields are for demonstration purposes only.
- To accept real payments, integrate a payment gateway such as Stripe or Razorpay on a proper backend.

## Tech Stack

- HTML5
- CSS3 (Grid, custom properties, keyframe animations, 3D transforms)
- Vanilla JavaScript (no frameworks or libraries)

## License

Feel free to use and modify this project for learning or portfolio purposes.
