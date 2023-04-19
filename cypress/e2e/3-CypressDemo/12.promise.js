let promise = new Promise((resolve, reject) => {
	let a = 1 + 2
	if (a == 2) {
		resolve('Promise Fullfilled!')
	} else {
		reject('Promised is rejected')
	}
})

promise
	.then(message => {
		console.log(message + ' Promise is passed')
	})
	.catch(message => {
		console.log(message + ' Promise is rejected')
	})
