import React from 'react';

export const add = (x, y) => x + y;

export const total = (shipping, handling) => {
	return `$ ${shipping + handling}`;
};

export default function Box() {
	return <div>This is a Box</div>;
}
