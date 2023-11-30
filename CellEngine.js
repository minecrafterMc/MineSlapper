function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 200);
  });
}
const settings = document.createElement('script');
const classes = document.createElement('script');
const script = document.createElement('script');
settings.type = 'text/javascript';
settings.src = 'settings.js';
classes.type = 'text/javascript';
classes.src = 'classes.js';
script.type = 'text/javascript';
script.src = 'script.js';
async function importing() {
  document.head.appendChild(settings);
console.log("importing settings");
await resolveAfter2Seconds();
document.head.appendChild(classes);
console.log("importing classes");
await resolveAfter2Seconds();
document.head.appendChild(script);
console.log("importing scripts");
await resolveAfter2Seconds();
}
importing();

