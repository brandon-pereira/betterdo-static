const canvas = document.createElement('canvas');
canvas.height = 165;
canvas.width = 125;
const ctx = canvas.getContext('2d');
const pixelSize = 5;
const _ = 'transparent';
const g = '#0f0';

const bitmap = [
    [_, _, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, _, _],
    [_, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, _, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, g, _, g, _, _, _, _, _, g, _, g, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, g, _, _, _, _, _, _, _, g, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, g, _, g, _, _, _, _, _, g, _, g, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, g, _, _, g, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, _, g, g, _, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, g, g, g, g, g, g, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, g, _, _, _, _, _, _, g, g, _, _, _, _, g, _, _, g],
    [g, _, _, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _, _, g],
    [g, _, _, _, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, g, g, _, _, _, _, _, _, _, _, _, _, _, _, g, g, g, g, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g],
    [_, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, _],
    [_, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _],
    [_, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _],
    [_, g, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, g, _],
    [_, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, _],
    [_, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, _]
];

bitmap.forEach((row, j) => {
    row.forEach((pixel, i) => {
        ctx.fillStyle = pixel;
        ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
    });
});

document.body.prepend(canvas);
