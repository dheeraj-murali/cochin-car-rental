export const scroll = (
	element: React.MutableRefObject<HTMLDivElement>,
	scrollOffset: number,
	side: 'l' | 'r'
) => {
	let current = 0;

	const scroll = () => {
		if (side === 'r') element.current.scrollLeft += 1;
		if (side === 'l') element.current.scrollLeft -= 1;
		current += 1;

		if (current < scrollOffset) {
			setTimeout(() => {
				scroll();
			}, 5);
		}
	};

	scroll();
};
