export const debounce = (func: any, interval: number) => {
	let t: boolean = false
	return (...args: any[]) => {
		if (!t) {
			t = true
			setTimeout(() => {
				t = false
				func(...args)
			}, interval)
		}
	};
};
